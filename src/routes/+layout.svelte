<div class="main">
    <slot></slot>
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