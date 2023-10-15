<script>
    export let question;
</script>

<div class="question">{question.display}</div>
<div class="answers">
    <input type="tel" name="{question.name}" pattern="[0-9]*">
</div>
