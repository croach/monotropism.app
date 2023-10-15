<script>
    import questionnaire from '$lib/data/questionnaire.json'
    import Select from './Select.svelte';
    import TextBox from './TextBox.svelte';

    // Get the most recent version of the demographics survey
    const demographicsSurvey = questionnaire.demographicsSurvey[0];
</script>

<fieldset {...$$restProps}>
    {#each demographicsSurvey.questions as question}
        {#if question.type === "select"}
            <Select {question} />
        {:else}
            <TextBox {question} />
        {/if}
    {/each}
</fieldset>

<style>
fieldset {
    /* Remove the standard border on the fieldset */
    border: 0;
    /* Remove the standard padding on the fieldset */
    padding: 0;
    margin: var(--left-right-margins);
    margin-bottom: 30px;
}
</style>