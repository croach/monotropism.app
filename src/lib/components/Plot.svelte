<script>
    import * as Plot from "@observablehq/plot";
    
    export let options;

    function normPdf(x, mu, sd) {
        const a = 1 / (sd * Math.sqrt(2 * Math.PI))
        const b = Math.exp(-0.5 * ((x - mu)/sd)**2)
        return a * b
    }

    function arange(start, end, step) {
        let arr = [];
        let curr = start;
        while (curr <= end) {
            arr.push(curr);
            curr += step
        }
        return arr;
    }

    function myplot(node) {
        let mu = 3.19
        let sd = .578
        let x = arange(mu - sd * 3, mu + sd * 3, 0.001)
        let y = x.map((x) => normPdf(x, mu, sd))
        const allistic = x.map((e, i) => [e, y[i]])

        mu = 4.15
        sd = .347
        x = arange(mu - sd * 3, mu + sd * 3, 0.001)
        y = x.map((x) => normPdf(x, mu, sd))
        const autistic = x.map((e, i) => [e, y[i]])

        node.appendChild(
            // Plot
            //     .rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random}))
            //     .plot()
            Plot
                // .line(allistic)
                .line(autistic)
                .plot()
        )
    }
</script>


{#key options}
    <div use:myplot {...$$restProps}></div>
{/key}