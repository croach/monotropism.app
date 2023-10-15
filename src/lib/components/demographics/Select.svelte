<script>
export let question;
</script>

<div class="question">{ question.display }</div>
<div class="answers">
    <select name="{question.name}">
        <option value="-1">--Please choose an option--</option>
        {#each question.options as option}
            <option value="{option.value}">{option.display}</option>
        {/each}
      </select>
</div>
