<script>
  /** @type {import('./$types').PageData} */
  export let data

  /** @type {import('./$types').ActionData} */
  export let form;

  import Questionnaire from '../lib/components/Questionnaire.svelte';
  import Chart from '$lib/components/Chart.svelte';

  console.log(form)
</script>

{#if !form}
  <Questionnaire questions={data.questions} />
{:else}
  <Chart data={form} />
{/if}