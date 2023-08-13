<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

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

        // Set dimensions and margins for the chart
        const margin = {top: 70, right: 30, bottom: 40, left: 80};
        const width = 800 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        
        // Allistic curve
        const allisticCurve = gaussianCurve(3.19, .578);
    
        // Autistic curve
        const autisticCurve = gaussianCurve(4.15, .347);
    
        // Set up the x and y scales
        const x = d3.scaleLinear()
            .domain([1, 5])
            .range([0, width]);
    
        const y = d3.scaleLinear()
            .domain([0, d3.max(autisticCurve, d => d[1])])
            .range([height, 0]);
    
        // Create the SVG element and append it to the chart container
        const svg = d3.select("#chart-container")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
    
        // Add the x-axis
        svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x)
            .ticks(5));
    
        // Add the y-axis
        svg.append("g")
        .call(d3.axisLeft(y));
    
        // Create the line generator
        const line = d3.line()
        .defined(d => d[0] > 1 && d[0] < 5)
        .curve(d3.curveNatural)
        .x(d => x(d[0]))
        .y(d => y(d[1]));
    
        const area = d3.area()
        .defined(d => d[0] > 1 && d[0] < 5)
        .curve(d3.curveNatural)
        .x(d => x(d[0]))
        .y0(y(0))
        .y1(d => y(d[1]));
    
        // Add the line path to the SVG element
        svg.append("path")
            .datum(allisticCurve)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    
        svg.append("path")
        .datum(allisticCurve)
        .attr("fill", "steelblue")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1)
        .attr("opacity", 0.3)
        .attr("d", area);
    
        svg.append("path")
        .datum(autisticCurve)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    
        svg.append("path")
        .datum(autisticCurve)
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", 1)
        .attr("opacity", 0.3)
        .attr("d", area);
    });
</script>

<div id="chart-container"></div>