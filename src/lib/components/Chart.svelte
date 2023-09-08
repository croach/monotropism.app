<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { gaussianCurve } from '$lib/utils.js';

    export let data;

    onMount(async () => {
        // Check if the user has dark mode enabled and change the color of the
        // annotation text and line accordingly.
        const mq = window. matchMedia('(prefers-color-scheme: dark)');
        const isDarkMode = () => mq.matches;
        const darkModeAnnotationColor = "#ffffff";
        const lightModeAnnotationColor = "#25292e";
        const annotationColor = isDarkMode() ? darkModeAnnotationColor : lightModeAnnotationColor;

        // Get the autistic and non-autistic (allistic) css variables
        const autisticColor = getComputedStyle(document.documentElement).getPropertyValue('--autistic-color');
        const allisticColor = getComputedStyle(document.documentElement).getPropertyValue('--allistic-color');

        const defaultWidth = 800;
        const defaultHeight = 500;
        const defaultRatio = defaultWidth /  defaultHeight;

        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        // let currentRatio = currentWidth / currentHeight;

        // Adjust the dimensions of the chart to fit the screen while keeping 
        // the same aspect ratio.
        let h = defaultHeight;
        let w = defaultWidth;
        // Make the chart's width stays within the boundaries of the screen
        if (currentWidth < w) {
            w = currentWidth;
            h = w / defaultRatio;
        }
        // Make the chart's height stays within the boundaries of the screen
        if (currentHeight < h) {
            h = currentHeight;
            w = h * defaultRatio;
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
                .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
                .attr('preserveAspectRatio', 'xMidYMid meet')
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
            .attr("stroke", allisticColor)
            .attr("stroke-width", 3)
            .attr("d", line);
    
        svg
            .append("path")
            .datum(allisticCurve)
            .attr("fill", allisticColor)
            .attr("opacity", 0.3)
            .attr("d", area);
    
        svg
            .append("path")
            .datum(autisticCurve)
            .attr("fill", "none")
            .attr("stroke", autisticColor)
            .attr("stroke-width", 3)
            .attr("d", line);
    
        svg
            .append("path")
            .datum(autisticCurve)
            .attr("fill", autisticColor)
            .attr("stroke", autisticColor)
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
            .style("stroke-width", 1)
            .style("stroke-dasharray", "10 4")
            .style("stroke", annotationColor);

        // Add a tooltip to the line representing the user's results
        const message = `Your score: ${data.avgScore}`;
        const annotation = svg
            .append("text")
            .text(message)
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
                annotation.style("fill", darkModeAnnotationColor);
                annotationLine.style("stroke", darkModeAnnotationColor);
            } else {
                annotation.style("fill", lightModeAnnotationColor);      
                annotationLine.style("stroke", lightModeAnnotationColor);      
            }
        });

    });
</script>

<h1>Monotropism Questionnaire</h1>

<p>
  Please remember that this questionnaire is not a test for autism; it is a self-report measure of <a href="https://monotropism.org">monotropism</a>. Your score does not necessarily reflect whether or not you are autistic. If you score high for monotropism, you may want to do some further research. A big thank you to the full team responsible for creating the questionnaire: Valeria Garau, Richard Woods, Nick Chown, Sonny Hallett, Fergus Murray, Rebecca Wood, Aja Louise Murray, Sue Fletcher-Watson. If you are interested in the research behind the questionnaire, I encourage you to read over the <a href="https://osf.io/wpx5g/">paper</a> (this is a pre-print currently awaiting peer review).
</p>

<h2>What does my score mean?</h2>
<p>
  Your score is a measure of how monotropic you lean. The higher the score, the more monotropic. The curves in the graph below represent the distribution of scores for autistic and non-autistic people. The vertical line represents your average score. The mean score for non-autistic people is {data.allisticStats.mu} with a standard deviation of {data.allisticStats.sd}. The mean score for autistic people is {data.autisticStats.mu} with a standard deviation of {data.autisticStats.sd}.
</p>

{#if data.id}
<p>
  <em>Note: if you would like to share your results, or come back at a later date, you can simply share this <a href="/{data.id}">link</a>.</em>
</p>
{/if}

<div id="chart-container"></div>