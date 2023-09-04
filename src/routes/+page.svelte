<script>
  /** @type {import('./$types').PageData} */
  export let data

  import Questionnaire from '../lib/components/Questionnaire.svelte';
</script>

<div class="main">
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
    A little over a year ago my oldest child was diagnosed with autism and ADHD. Naturally, my wife and I wanted to learn as much as as we could about both topics and so we read and/or listened to just about anything we could find on the subjects. A few months ago my wife sent me an interesting <a href="https://www.tiktok.com/@nd_psych/video/7256607960254713106">TikTok video</a> from Dr. Joey Lawrence that she came across in her own independent research. The video piqued my interest and so I followed the link to the questionnaire and read through a few of the questions. What I found was that they were actually quite relevant to my lived experiences. And so I read through the remaining questions, answered each one, tallied up my score, and found that I scored above the mean for autistic people (4.38 to be exact). This was enlightening to me since the results could explain so many of the day-to-day struggles that I encounter, as well as several episodes from my childhood.
  </p>
  
  <p>
    After that, I began to wonder how some of my friends and family would score. My answers to the questions seemed so obvious to me that I was confident everyone else I knew would score similarly even though I was pretty sure that they were fairly neurotypical. In essence, I wanted to see how a few negatives scored to get a better idea of the questionnaire's efficacy. So, I had a couple of close family members take the test and I was shocked by how different their scores were from mine. This piqued my interest even more and I wanted to send this out to all of my friends, family, colleagues, etc. to see how they all would score. I knew I couldn't send out the PDF to everyone &mdash; not only would it be too much to ask of some of my acquaintances &mdash; but it would also be intractable for me to collect and analyze all of the data. So, I decided to create this website.  
    
  </p>

  <h2>How secure is this Questionnaire?</h2>
  <p>
    I am by no means an expert web developer. I am a machine learning engineer with a background in traditional software engineering and some experience creating web applications, but typically only for internal use, so I don't claim to be an expert in web security. That said, I do take some simple precautions like making sure that communication with the website goes through a properly encrypted connection so none of your data can be captured by a man-in-the-middle attack. In addition, I currently do not store any of your submitted data. The answers that you submit are only used to calculate your score and nothing more. I do not make any money from hosting this website, it is strictly a passion project for me and I have no intention of ever using this website for monetary gain (nor could I, since the questionnaire's license makes it available for non-commercial purposes only). Additionally, I have open sourced the code for this website and you can find it <a href="https://github.com/croach/monotropism.app">here</a>. If you have any questions or concerns, please feel free to reach out to me at <a href="mailto:christopher.g.roach@gmail.com">christopher.g.roach@gmail.com</a>.
  </p>

  <h2>Instructions</h2>
  <p>
    There's not much too it really, just read each question and answer according to your own lived experience. If you run across a question that simply does not make sense to you, skip it and it won't be taken into account when calculating your score. Once you've answered all of the questions, click the submit button and you'll be taken to a page that shows your score and how it compares to those for autistic and non-autistic people.
  </p>

  <Questionnaire questions={data.questions} />
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