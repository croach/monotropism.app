<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

    export let data;

    // Helper functions
    function arange(start, end, step) {
        let arr = [];
        let curr = start;
        while (curr <= end) {
            arr.push(curr);
            curr += step;
        }
        return arr;
    }

    function gaussianPdf(x, mu, sd) {
        const a = 1 / (sd * Math.sqrt(2 * Math.PI));
        const b = Math.exp(-0.5 * ((x - mu)/sd)**2);
        return a * b;
    }

    function gaussianCurve(mu, sd) {
        let x = arange(mu - sd * 3, mu + sd * 3, 0.001);
        let y = x.map((x) => gaussianPdf(x, mu, sd));
        return x.map((e, i) => [e, y[i]]);
    }

    onMount(async () => {
        // Check if the user has dark mode enabled and change the color of the
        // annotation text and line accordingly.
        const mq = window. matchMedia('(prefers-color-scheme: dark)');
        const isDarkMode = () => mq.matches;
        const annotationColor = isDarkMode() ? "white" : "black";

        const defaultWidth = 800;
        const defaultHeight = 500;
        const defaultRatio = defaultWidth /  defaultHeight;

        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        const currentRatio = currentWidth / currentHeight;

        // Adjust the dimensions of the chart to fit the screen keeping the same
        // aspect ratio.
        let h = defaultHeight;
        let w = defaultWidth;
        if (currentRatio <= defaultRatio) {
            w = currentWidth;
            h = w / defaultRatio;
        }
        
        // Set dimensions and margins for the chart
        const margin = {top: 70, right: 30, bottom: 40, left: 50};
        const width = w - margin.left - margin.right;
        const height = h - margin.top - margin.bottom;
        
        // Allistic curve
        const allisticCurve = gaussianCurve(3.19, .578);
    
        // Autistic curve
        const autisticCurve = gaussianCurve(4.15, .347);
    
        // Set up the x and y scales
        const x = d3
            .scaleLinear()
            .domain([1, 5])
            .range([0, width]);
    
        const y = d3
            .scaleLinear()
            .domain([0, d3.max(autisticCurve, d => d[1])])
            .range([height, 0]);
    
        // Create the SVG element and append it to the chart container
        const svg = d3
            .select("#chart-container")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

        // Add the x-axis
        svg
            .append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3
                .axisBottom(x)
                .ticks(5));
    
        // Add the y-axis
        svg
            .append("g")
            .call(d3.axisLeft(y)
                .ticks(5));
    
        // Create the line generator
        const line = d3
            .line()
            .defined(d => d[0] > 1 && d[0] < 5)
            .curve(d3.curveNatural)
            .x(d => x(d[0]))
            .y(d => y(d[1]));
    
        const area = d3
            .area()
            .defined(d => d[0] > 1 && d[0] < 5)
            .curve(d3.curveNatural)
            .x(d => x(d[0]))
            .y0(y(0))
            .y1(d => y(d[1]));
    
        // Add the line path to the SVG element
        svg
            .append("path")
            .datum(allisticCurve)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    
        svg
            .append("path")
            .datum(allisticCurve)
            .attr("fill", "steelblue")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1)
            .attr("opacity", 0.3)
            .attr("d", area);
    
        svg
            .append("path")
            .datum(autisticCurve)
            .attr("fill", "none")
            .attr("stroke", "red")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    
        svg
            .append("path")
            .datum(autisticCurve)
            .attr("fill", "red")
            .attr("stroke", "red")
            .attr("stroke-width", 1)
            .attr("opacity", 0.3)
            .attr("d", area);

        // Add a line representing the user's results
        const annotationLine = svg
            .append("line")
            .attr("x1", x(data.avgScore))
            .attr("y1", 0)
            .attr("x2", x(data.avgScore))
            .attr("y2", height)
            .attr("opacity", 0.7)
            .style("stroke-width", 2)
            .style("stroke-dasharray", "10 4")
            .style("stroke", annotationColor)
            .style("fill", "none");

        // Add a tooltip to the line representing the user's results
        const message = `Your score: ${data.avgScore}`;
        const annotation = svg
            .append("text")
            .text(message)
            .attr("opacity", 0.7)
            .style("fill", annotationColor)
            // Position the annotation just above the chart so as to not obscure
            // the message. The chart is translated by the margin amount, so we
            // can position the annotation above the chart by giving a negative
            // y-coordinate.
            .attr("y", -10);

        // Adjust the horizontal position of the tooltip to make sure it doesn't
        // go outside of the chart's boundaries
        const annotationLength = Math.ceil(annotation.node().getComputedTextLength());
        if (Math.ceil(annotationLength / 2) > x(data.avgScore)) {
            annotation.attr("x", 0);
        } else if (Math.ceil(annotationLength / 2) > width - x(data.avgScore)) {
            annotation.attr("x", width - annotationLength);
        } else {
            annotation.attr("x", x(data.avgScore) - annotationLength / 2);
        }

        // Add an event listener to the media query to change the color of the
        // annotation text and line when the user changes their color scheme.
        mq.addEventListener('change', (e) => {
            if (e.matches) {
                annotation.style("fill", "white");
                annotationLine.style("stroke", "white");
            } else {
                annotation.style("fill", "black");      
                annotationLine.style("stroke", "black");      
            }
        });

    });
</script>

<div id="chart-container" class="centered"></div>

<style>
    .centered {
        display: flex;
        justify-content: center;
    }
</style>