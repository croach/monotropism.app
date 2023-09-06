<script>
    export let questions;

    let dialog;
</script>

<h1>Monotropism Questionnaire</h1>

<p>
  Monotropism is a theory of autism that was developed by Drs. Dinah Murray, Wenn Lawson, and Mike Lesser. It is based on the idea that at any one point in time an individual has a finite amount of attention and that the strategies for how this scarce resource is allocated is different for autistic versus non-autistic people. Autistic people tend to have their full attention pulled strongly toward a small number of interests (monotropism) leaving little attention for anything else, while non-autistic people tend to have a wider range of less highly aroused interests (polytropism) allowing them to spread their attention across multiple interests at a time. In <a href="https://monotropism.org/murray-lesser-lawson/">"Attention, monotropism and the diagnostic criteria for autism"</a> Murray et al. argue that monotropism can be used to explain nearly all of the characteristics that are commonly associated with autism.
</p>

<h2>What is the Monotropism Questionnaire?</h2>
<p>
  The Monotropism Questionnaire was developed by a group of autistic adults based on their lived experience and academic expertise and is a collection of 47 questions with the goal of being used as self-report measure of monotropism in both autistic and non-autistic people. The questionnaire itself is published under a Creative Commons license, <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND - Attribution-NonCommercial-NoDerivatives 4.0 International License</a>. 
</p>

<h2>Why did I create this website?</h2>
<p>
  A little over a year ago my oldest child was diagnosed with autism and ADHD. Naturally, my wife and I wanted to learn as much as as we could about both topics and so we read and/or listened to just about anything we could find on the topics. A few months ago my wife sent me an interesting <a href="https://www.tiktok.com/@nd_psych/video/7256607960254713106">TikTok video</a> from Dr. Joey Lawrence that she came across in her own independent research. The video piqued my interest and so I followed the link to the questionnaire and read through a few of the questions. What I found was that they were actually quite relevant to my lived experiences. And so I filled in the questionnaire, tallied up my score, and found that I scored above the mean for autistic people (4.38 to be exact). This was enlightening to me since the results could explain so many of the day-to-day struggles that I encounter, as well as several memorable episodes from my childhood.
</p>

<p>
  After that, I began to wonder how some of my friends and family would score. My answers to the questions seemed so obvious to me that I was confident everyone else I knew would score similarly even though I was pretty sure that they were fairly neurotypical. In essence, I wanted to see how a few negatives scored to get a better idea of the questionnaire's efficacy. So, I had a couple close family members take the test and I was shocked by how different their scores were from mine. This piqued my interest even more and I wanted to send this out to all of my friends, family, colleagues, etc. to see how they all would score. I knew I couldn't send out the PDF to everyone &mdash; not only would it be too much to ask of some of my acquaintances &mdash; but it would also be intractable for me to collect and analyze all of the data. So, I decided to create this website.  
  
</p>

<h2>How secure is this Questionnaire?</h2>
<p>
  I am by no means an expert web developer. I am a machine learning engineer with a background in traditional software engineering and some experience creating web applications, but typically for internal use only, so I don't claim to be an expert in web security. That said, I do take some simple precautions like making sure that communication with the website goes through a properly encrypted connection so none of your data can be captured by a <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">man-in-the-middle attack</a>. In addition, I give you the option of saving your data when you submit the questionnaire. If you choose not to save your data, the answers that you submit will only be used to calculate your score and nothing more; however, you will not be able to return to your results at a later date. If you do choose to save your data, your answers are completely anonymized. I do not collect any data from you other than the answers you submitted and these are associated with a randomly generated ID so as to make it impossible to connect your submission back to you. Any saved data will be used only for the purposes of making results retrievable by the user (i.e., you can save/share the link to your results) and possibly for calculating interesting aggregate statistics (e.g., average score, standard deviation, etc.). 
 </p>
 
 <p>
  I do not make any money from hosting this website, it is strictly a passion project for me and I have no intention of ever using this website for monetary gain (nor could I, since the questionnaire's license makes it available for non-commercial purposes only). If you have further concerns, I have open sourced the code for this website, which you can find <a href="https://github.com/croach/monotropism.app">here</a>. If you have any additional questions or concerns, please feel free to reach out to me at <a href="mailto:christopher.g.roach@gmail.com">christopher.g.roach@gmail.com</a>.
</p>

<h2>Instructions</h2>
<p>
  There's not much too it really, just read each question and answer according to your own lived experience. If you run across a question that simply does not make sense to you, skip it and it won't be taken into account when calculating your score. Once you've answered all of the questions, click the submit button and you'll be taken to a page that shows your score and how it compares to those for autistic and non-autistic people.
</p>
  
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
            Do you want to save your answers so you can come back later and view your results? All data saved will be completely anonymous and will not be shared with anyone.
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

    margin: 0 0.3em;
}

button:hover {
    background-color: var(--button-hover-color);
    color: var(--button-hover-text-color);
}

button:focus {
    outline: 1px solid var(--button-focus-outline-color);
}

dialog {
    /* Pop the dialog box out of the page so we can position it relative to the viewport */
    position: fixed;
    /* Translate the coordinate system to the center of the dialog box */
    transform: translate(-50%, -50%);
    /* Center the dialog vertically and horizontally */
    top: 50%;
    left: 50%;
}

dialog::backdrop {
    /* background: linear-gradient(45deg, #F57888, #5fc6f5); */
    background: #25292e;
    opacity: 0.7;
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
        color: var(--button-hover-text-color);
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