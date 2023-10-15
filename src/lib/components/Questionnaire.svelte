<script>
    import LikertScaleQuestion from "./LikertScaleQuestion.svelte";
    import DemographicsSurvey from "./demographics/DemographicsSurvey.svelte";

    export let questions;

    let dialog;
</script>

<h1>Monotropism Questionnaire</h1>

<p>
  Monotropism is a theory of autism that was developed by Drs. Dinah Murray, Wenn Lawson, and Mike Lesser. It is based on the idea that individuals have a finite amount of attention and that the strategies for allocating this scarce resource is different for autistic versus non-autistic people. Autistic people tend to have their full attention pulled strongly toward a small number of interests (monotropism) leaving little attention for anything else, while non-autistic people tend to have a wider range of less highly aroused interests (polytropism) allowing them to spread their attention across multiple interests at a time. In <a href="https://monotropism.org/murray-lesser-lawson/">"Attention, monotropism and the diagnostic criteria for autism"</a> Murray et al. argue that monotropism can explain nearly all of the characteristics that are commonly associated with autism.
</p>

<h2>What is the Monotropism Questionnaire?</h2>
<p>
  The Monotropism Questionnaire (<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC-BY-NC-ND</a>) is a collection of 47 questions developed by a group of autistic adults based on their lived experiences and academic expertise with the goal of being used as self-report measure of monotropism.
</p>

<h2>Why did I create this website?</h2>
<p>
  A little over a year ago my oldest child was diagnosed with autism and ADHD. Naturally, my wife and I wanted to learn as much as as we could about both topics and so we read and/or listened to just about anything we could find. A few months ago my wife sent me an interesting <a href="https://www.tiktok.com/@nd_psych/video/7256607960254713106">TikTok video</a> from Dr. Joey Lawrence that piqued my interest since I found the questions to be quite relevant to my day-to-day experiences. And so I took the quiz and scored above the mean for autistic people (4.38 to be exact). This was enlightening! The results could explain so many of the struggles that I encounter on a daily basis, as well as several memorable episodes from my childhood.
</p>

<p>
  After that, I began to wonder how some of my friends and family would score. My answers to the questions seemed so obvious to me that I was confident everyone else I knew would score similarly. I had a couple close family members take the test and was shocked by how much their scores diverged from mine. This piqued my interest even more and I wanted to send this out to all of my acquaintances, but I knew I couldn't just send out the PDF, so I created this website.
</p>

<h2>How secure is this Questionnaire?</h2>
<p>
  I don't claim to be an expert in web security. That said, I do take some simple precautions like making sure that communication goes through a properly encrypted connection so none of your data can be captured by a <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">man-in-the-middle attack</a>. In addition, I give you the option of saving your data when you submit the questionnaire. If you choose to save your data, know that I do not collect any information from you other than the answers you submit and these are associated with a randomly generated ID so as to make it impossible to connect your submission back to you. Any saved data will be used only for the purposes of making results retrievable by the user (i.e., you can save/share the link to your results) and possibly for calculating interesting aggregate statistics (e.g., average score, standard deviation, etc.). 
 </p>
 
 <p>
  If you have further questions or concerns, I have open sourced the code for this website, which you can find <a href="https://github.com/croach/monotropism.app">here</a>, and please feel free to reach out to me at <a href="mailto:christopher.g.roach@gmail.com">christopher.g.roach@gmail.com</a>.
</p>
  
<form class="questionnaire" name="questionnaire" autocomplete="off" method="POST">
    {#each questions as question}
        <LikertScaleQuestion {...question} />
    {/each}

    <!-- Add a dialog box that asks the user if they want to save their data; and if so, it asks them for some extra
         demographics data -->
    <dialog id="save-data-dialog" bind:this={dialog}>
        <h2>Save Data?</h2>
        <p>
            Do you want to save your answers so you can come back later and view your results? All data saved will be completely anonymous and will not be shared with anyone.
        </p>

        <DemographicsSurvey id="demographics-form" style="display: none" />

        <div class="submit-button">
            <button type="button" name="reveal-form" on:click={() => document.getElementById('demographics-form').style.display = 'block'}>Reveal</button>
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
    /* Add some space between the form and the sides of the screen */
    margin: 50px var(--left-right-margins);
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
    button {
        font-weight: 300;
    }
}

</style>