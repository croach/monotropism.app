<script>
    import * as Plot from "@observablehq/plot";
    
    export let options;

    function myplot(node) {
        node.appendChild(
            // Plot.plot(options)
            Plot
                .rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random}))
                .plot()
        )
    }
</script>


{#key options}
    <div use:myplot {...$$restProps}></div>
{/key}