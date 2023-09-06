<script>
  /** @type {import('./$types').PageData} */
  export let data

  import Chart from '$lib/components/Chart.svelte';
</script>

<Chart {data} />