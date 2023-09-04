<script>
  /** @type {import('./$types').PageData} */
  export let data

  import Chart from '$lib/components/Chart.svelte';
</script>

<div class="main">
  <h1>Monotropism Questionnaire</h1>
  
    <p>
      Please remember that this questionnaire is not a test for autism; it is a self-report measure of <a href="https://monotropism.org">monotropism</a>. Your score does not necessarily reflect whether or not you are autistic. If you score high for monotropism, you may want to do further research. A big thank you to the full team responsible for creating the questionnaire: Valeria Garau, Richard Woods, Nick Chown, Sonny Hallett, Fergus Murray, Rebecca Wood, Aja Louise Murray, Sue Fletcher-Watson. If you are interested in the research behind the questionnaire, I encourage you to read over the <a href="https://osf.io/wpx5g/">paper</a> (this is a pre-print currently awaiting peer review).
    </p>

    <h2>What does my score mean?</h2>
    <p>
      Your score is a measure of how monotropic you lean. The higher the score, the more monotropic. The curves in the graph below represent the distribution of scores for autistic and non-autistic people. The vertical line represents your average score. The mean score for non-autistic people is {data.allisticStats.mu} with a standard deviation of {data.allisticStats.sd}. The mean score for autistic people is {data.autisticStats.mu} with a standard deviation of {data.autisticStats.sd}.
    </p>
    
    <Chart {data} />
</div>

<style>
  div.main {
    --left-right-margins: 0.8rem;

    /* Maker sure that the form looks good on bigger screens */
    max-width: 900px;
  }

  h1, h2 {
    /* Add some space around the title  */
    margin: 1rem var(--left-right-margins);
  }

  h2 {
    font-size: 1em;
    font-weight: bold;
  }

  p {
    /* Add some space around the paragraphs */
    margin: 1rem var(--left-right-margins);
  }
</style>