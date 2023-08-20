<script>
    export let questions;
</script>
  
<form class="questionnaire" name="questionnaire" method="POST">
    {#each questions as { id, text, reversed }}
    <fieldset>
        <div class="question">{text}</div>
        <div class="answers">
            <input type="radio" id="likert-scale-{id}-1" name="answer[{id}]" value="{reversed ? 5 : 1}">
            <label for="likert-scale-{id}-1">
                <!-- <span class="large-screen">Strongly disagree</span> -->
                <span>1</span>
            </label>
    
            <input type="radio" id="likert-scale-{id}-2" name="answer[{id}]" value="{reversed ? 4 : 2}">
            <label for="likert-scale-{id}-2">
                <!-- <span class="large-screen">Disagree</span> -->
                <span>2</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-3" name="answer[{id}]" value="{reversed ? 3 : 3}">
            <label for="likert-scale-{id}-3">
                <!-- <span class="large-screen">Neither agree nor disagree</span> -->
                <span>3</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-4" name="answer[{id}]" value="{reversed ? 2 : 4}">
            <label for="likert-scale-{id}-4">
                <!-- <span class="large-screen">Agree</span> -->
                <span>4</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-5" name="answer[{id}]" value="{reversed ? 1 : 5}">
            <label for="likert-scale-{id}-5">
                <!-- <span class="large-screen">Strongly agree</span> -->
                <span>5</span>
            </label>    
        </div>

        <div class="likert-scale-labels">
            <span>Strongly Disagree</span>
            <span>Strongly Agree</span>
        </div>

    </fieldset>
    {/each}

    <div class="submit-button">
        <button>Submit</button>
    </div>

</form>
  
<style>

form {
    /* Custom CSS variables */
    --button-background-color: #eeeded;
    --button-label-color: rgb(103, 102, 102);
    --button-checked-background-color: #5fc6f5;
    --button-checked-label-color: rgb(255, 255, 255);

    /* Add a space between the questions and the top and bottom of the "page" */
    margin: 20px 0 20px 0;
}

fieldset {
    /* Remove the standard border on the fieldset */
    border: 0;
    /* Remove the standard padding on the fieldset */
    padding: 0;
    /* Add some space between each question */
    margin-bottom: 100px; 
}

div.question {
    /* Add a little padding between the question and the sides of the screen */
    padding: 0 10px 0 10px;
    /* Center the question */
    text-align: center;
    /* Add a bit of space between the question and the answers */
    margin-bottom: 10px;
}

div.answers {
    /* Create a Likert scale set of answers */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* Add some space between each of the answers */
    gap: 2px;
}

label {
    font-size: 12px;
    color: var(--button-label-color);
    background: var(--button-background-color);
    /* Center the label */
    text-align: center;
    /* Add a bit of padding around the labels. The padding is relative to the
       the font size for the labels. */
    padding: 1em;
}

input {
    /* Hide the radio button */
    opacity: 0;
    /* By default, the label (1, 2, 3, etc.) is displayed to the right of the
       radio button. Setting its position to "fixed" positions it relative to 
       its containing block, i.e., the label element. If you don't set the 
       position in this way, the label will show up slightly to the right of 
       center. */
    position: fixed;
}

input:checked + label {
    /* Highlight selected answer by changing the background and text colors */
    background: var(--button-checked-background-color);
    color: var(--button-checked-label-color);
}

div.likert-scale-labels {
    font-size: 12px;
    /* Push the labels to opposite ends of the scale */
    display: flex;
    justify-content: space-between;
    /* Add a bit of padding between the labels and the edges of the screen */
    padding: 0 5px 0 5px;
    /* Add a bit of space between the top of the labels and answers */
    margin-top: 3px;
}

div.submit-button {
    /* Center the submit button horizontally */
    display: flex;
    justify-content: center;
}

button {
    background-color: var(--button-background-color);
    border: none;
    padding: 1em 2em;
    font-size: 16px;
    color: var(--button-label-color);
}

</style>