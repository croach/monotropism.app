<script>
    export let questions;

    let dialog;
</script>
  
<form class="questionnaire" name="questionnaire" method="POST">
    {#each questions as { id, text, reversed }}
    <fieldset>
        <div class="question">{text}</div>
        <div class="answers">
            <input type="radio" id="likert-scale-{id}-1" name="answer[{id}]" value="{reversed ? 5 : 1}">
            <label for="likert-scale-{id}-1">
                <span class="small-screen-labels">1</span>
                <span class="large-screen-labels">Strongly disagree</span>
            </label>
    
            <input type="radio" id="likert-scale-{id}-2" name="answer[{id}]" value="{reversed ? 4 : 2}">
            <label for="likert-scale-{id}-2">
                <span class="small-screen-labels">2</span>
                <span class="large-screen-labels">Disagree</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-3" name="answer[{id}]" value="{reversed ? 3 : 3}">
            <label for="likert-scale-{id}-3">
                <span class="small-screen-labels">3</span>
                <span class="large-screen-labels">Neither agree nor disagree</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-4" name="answer[{id}]" value="{reversed ? 2 : 4}">
            <label for="likert-scale-{id}-4">
                <span class="small-screen-labels">4</span>
                <span class="large-screen-labels">Agree</span>
            </label>
            
            <input type="radio" id="likert-scale-{id}-5" name="answer[{id}]" value="{reversed ? 1 : 5}">
            <label for="likert-scale-{id}-5">
                <span class="small-screen-labels">5</span>
                <span class="large-screen-labels">Strongly agree</span>
            </label>    
        </div>

        <div class="likert-scale-labels small-screen-labels">
            <span>Strongly Disagree</span>
            <span>Strongly Agree</span>
        </div>

    </fieldset>
    {/each}

    <!-- Add a dialog box with a checkbox asking the user if they want to save their data -->
    <dialog id="save-data-dialog" bind:this={dialog}>
        <h2>Save Data?</h2>
        <p>
            Do you want to save your answers so you can come back later and view your results?
        </p>
        <div class="submit-button">
            <button type="submit" name="save-data" value="true">Yes</button>
            <button type="submit" name="save-data" value="false">No</button>
        </div>
    </dialog>

    <div class="submit-button">
        <button on:click={() => dialog.showModal()} type="button">Submit</button>
    </div>

</form>
  
<style>

form {
    /* Add a space between the questions and the top and bottom of the "page" */
    margin: 50px 0;
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
    padding: 0 var(--left-right-margins);
    /* Center the question */
    text-align: center;
    /* Add a bit of space between the question and the answers */
    margin-bottom: 1em;
}

div.answers {
    /* Create a Likert scale set of answers */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* Add some space between each of the answers */
    gap: 2px;
}

label {
    color: var(--button-text-color);
    background: var(--button-color);
    /* Center the label */
    text-align: center;
    /* Add a bit of padding around the labels. The padding is relative to the
       the font size for the labels. */
    padding: 1em;
    /* Center the text vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;
}

label span {
    /* Resize the button labels for smaller screens */
    font-size: 0.8em;
    font-weight: 500;
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
    background: var(--button-selected-color);
    color: var(--button-selected-text-color);
}

div.likert-scale-labels {
    font-size: 0.6em;
    /* Push the labels to opposite ends of the scale */
    display: flex;
    justify-content: space-between;
    /* Add a bit of padding between the labels and the edges of the screen */
    padding: 0 5px 0 5px;
    /* Add a bit of space between the top of the labels and answers */
    margin-top: 3px;
}

/* Hide the labels that are used for large screens only */
.large-screen-labels {
    visibility: hidden;
    display: none;
}

div.submit-button {
    /* Center the submit button horizontally */
    display: flex;
    justify-content: center;
}

button {
    background-color: var(--button-color);
    border: none;
    padding: 1em 2em;
    font-size: 0.8em;
    font-weight: 500;
    color: var(--button-text-color);
    /* show a hand cursor when hovering over the button */
    cursor: pointer;
}

dialog {
    /* Translate the coordinate system to the center of the dialog box */
    transform: translate(-50%, -50%);
    /* Center the dialog vertically and horizontally */
    top: 50%;
    left: 50%;
}

@media only screen and (min-width: 680px) {
    form {
        /* Add additional space between the form and the sides of the screen*/
        margin-left: var(--left-right-margins);
        margin-right: var(--left-right-margins);
        /* Make sure that the form doesn't stretch too wide */
        /* max-width: 900px; */
    }

    label:hover {
        /* Add highlighting on hover to let the user know that they can select 
           the answer */
        background: var(--button-hover-color);
        color: var(--dark-mode-color);
    }

    /* Hide the labels just for the small screen and display their large screen
       counterparts */
    .small-screen-labels {
        visibility: hidden;
        display: none;
    }
    .large-screen-labels {
        visibility: visible;
        display: inline;
        font-size: 20px;
        font-weight: 300;
    }

    button {
        font-weight: 300;
    }

}

</style>