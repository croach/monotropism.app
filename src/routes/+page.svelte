<script>
  import Plot from '$lib/components/Plot.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  /** @type {import('./$types').ActionData} */
  export let form;

  console.log(form)
</script>

<div class="centered questions">
  <form name="questionnaire" method="POST">
  
    {#each data.questions as { id, text, reversed }}
      <fieldset>
        <legend>{text}</legend>

        <input type="radio" id="not_applicable_{id}" name="answer[{id}]" value="0" required>
        <label for="not_applicable_{id}">N/A</label>

        <input type="radio" id="strongly_disagree_{id}" name="answer[{id}]" value="{reversed ? 5 : 1}">
        <label for="strongly_disagree_{id}">Strongly disagree</label>

        <input type="radio" id="disagree_{id}" name="answer[{id}]" value="{reversed ? 4 : 2}">
        <label for="disagree_{id}">Disagree</label>
        
        <input type="radio" id="neither_agree_nor_disagree_{id}" name="answer[{id}]" value="{reversed ? 3 : 3}">
        <label for="neither_agree_nor_disagree_{id}">Neither agree nor disagree</label>
        
        <input type="radio" id="agree_{id}" name="answer[{id}]" value="{reversed ? 2 : 4}">
        <label for="agree_{id}">Agree</label>
        
        <input type="radio" id="strongly_agree_{id}" name="answer[{id}]" value="{reversed ? 1 : 5}">
        <label for="strongly_agree_{id}">Strongly agree</label>
      </fieldset>
    {/each}

    <div class="submit-button">
      <button>Submit</button>
    </div>

  </form>
</div>

<div class="centered">
  <Plot options={{ x: { domain: [100, 0] }, grid: true }} />
</div>

<style>
  .centered {
    display: flex;
    justify-content: center;
  }
  
  .questions {
    padding-top: 20px;
  }

  .submit-button {
    text-align: center;
    padding-bottom: 100px;
  }

  fieldset {
    border: 0;
    padding: 0 0 100px 0;
    display: grid;
    max-width: 900px;
    grid-auto-rows: 1fr;
    gap: 2px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  fieldset > legend {
    padding: 0 0 30px 0;
  }
    /* @media only screen and (max-width: 680px) {
        .likert {
            grid-template-columns: minmax(0, 400px);
            justify-content: center;
        }
    } */

    input {
        /* max-width: 250px; */
        position: fixed;
        opacity: 0;
        pointer-events: none;
    }

    label {
        /* border-radius: 5px; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px;
        background: #eeeded;
        color: rgb(103, 102, 102)
        /* transition: background .2s ease-in-out; */
    }

    input:checked + label {
        /* background: #18adf3; */
        /* opacity: 0.9; */
        background: #5fc6f5;
        color: rgb(255, 255, 255);
    }

    input:focus + label {
        /* outline: -webkit-focus-ring-color auto 1px; */
    }

    label:hover {
        background: #fbfafa;
        /* outline: lightgrey auto 0.5px; */
    }

    button {
        background-color: #eeeded;
        border: none;
        padding: 16px 32px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        text-rendering: optimizeLegibility;
        color: rgb(103, 102, 102)
    }

    button:hover {
        background-color: #5fc6f5; 
        cursor: pointer;
    }    

</style>