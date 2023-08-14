<script>
    export let questions;
</script>
  
  <div class="centered" id= "questions">
    <form name="questionnaire" method="POST">
    
      {#each questions as { id, text, reversed }}
        <fieldset>
          <legend>{text}</legend>
    
          <input type="radio" id="strongly_disagree_{id}" name="answer[{id}]" value="{reversed ? 5 : 1}">
          <label for="strongly_disagree_{id}">
            <span class="large-screen">Strongly disagree</span>
            <span class="small-screen">1</span>
          </label>
  
          <input type="radio" id="disagree_{id}" name="answer[{id}]" value="{reversed ? 4 : 2}">
          <label for="disagree_{id}">
            <span class="large-screen">Disagree</span>
            <span class="small-screen">2</span>
          </label>
          
          <input type="radio" id="neither_agree_nor_disagree_{id}" name="answer[{id}]" value="{reversed ? 3 : 3}">
          <label for="neither_agree_nor_disagree_{id}">
            <span class="large-screen">Neither agree nor disagree</span>
            <span class="small-screen">3</span>
          </label>
          
          <input type="radio" id="agree_{id}" name="answer[{id}]" value="{reversed ? 2 : 4}">
          <label for="agree_{id}">
            <span class="large-screen">Agree</span>
            <span class="small-screen">4</span>
          </label>
          
          <input type="radio" id="strongly_agree_{id}" name="answer[{id}]" value="{reversed ? 1 : 5}">
          <label for="strongly_agree_{id}">
            <span class="large-screen">Strongly agree</span>
            <span class="small-screen">5</span>
          </label>

          <div class="small-screen alt-labels">
            <span>Strongly Disagree</span>
            <span>Strongly Agree</span>
          </div>

        </fieldset>

      {/each}
  
      <div class="submit-button">
        <button>Submit</button>
      </div>
  
    </form>
  </div>
  
  <style>
    .centered {
      display: flex;
      justify-content: center;
    }
    
    #questions {
      padding-top: 50px;
    }
  
    .submit-button {
      text-align: center;
      padding-bottom: 100px;
    }
  
    fieldset {
      border: 0;
      padding: 0 20px 100px 20px;
      display: grid;
      max-width: 900px;
      grid-auto-rows: 1fr;
      gap: 2px;
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  
    fieldset > legend {
      padding: 0 0px 30px 0px;
    }

    div.alt-labels {
        display: flex;
        width: 100vw;
        justify-content: space-between;
    }

    div.alt-labels > span {
        padding: 7px 10px 0 10px;
        font-size: 14px;
    }

    .large-screen {
        visibility: visible;
        display: inline;
      }

      .small-screen {
        visibility: hidden;
        display: none;
      }
  
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
        /* outline-style: dotted; */
      }
    
      @media (hover: hover) {
          label:hover {
              background: #fbfafa;
          }
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
      

      @media only screen and (max-width: 680px) {

        .large-screen {
            visibility: hidden;
            display: none;
        }

        .small-screen {
            visibility: visible;
            display: inline;
        }

        fieldset {
            text-align: center;
            padding-left: 0;
            padding-right: 0;
        }

        fieldset > legend {
            padding-left: 40px;
            padding-right: 40px; 
        }


    }

  
  </style>