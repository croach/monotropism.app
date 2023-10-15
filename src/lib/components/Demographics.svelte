<fieldset {...$$restProps}>
    <div class="question">What is your gender?</div>
    <div class="answers">
        <select name="gender">
            <option value="">--Please choose an option--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary / third gender">Non-binary / third gender</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
    </div>

    <div class="question">What is your age in years?</div>
    <div class="answers">
        <input type="tel" name="age" pattern="[0-9]*">
    </div>

    <div class="question">What is your ethnic group?</div>
    <div class="answers">
        <select name="ethnicity">
            <option value="">--Please choose an option--</option>
            <option value="White / Caucasian">White / Caucasian</option>
            <option value="Black or African American">Black or African American</option>
            <option value="Asian / Pacific Islander">Asian / Pacific Islander</option>
            <option value="Native American or Alaskan Native">Native American or Alaskan Native</option>
            <option value="Hispanic">Hispanic</option>
            <option value="Multiple ethnicity">Multiple ethnicity</option>
            <option value="Other / Unknown">Other / Unknown</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
    </div>

    <div class="question">What is the highest level of education you have completed?</div>
    <div class="answers">
        <select name="education">
            <option value="">--Please choose an option--</option>
            <option value="High school degree or equivalent (GED)">High school degree or equivalent (e.g., GED)</option>
            <option value="Some college but no degree">Some college but no degree</option>
            <option value="Associate degree">Associate degree</option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate / Post-doctoral degree">Doctorate / Post-doctoral degree</option>
          </select>
    </div>

    <div class="question">What is your autism status?</div>
    <div class="answers">
        <select name="autism">
            <option value="">--Please choose an option--</option>
            <option value="I am not autistic.">I am not autistic.</option>
            <option value="I am autistic and I have a diagnosis from a clinician.">I am autistic and I have a diagnosis from a clinician.</option>
            <option value="I am autistic and I do not have a diagnosis from a clinician.">I am autistic and I do not have a diagnosis from a clinician.</option>
            <option value="I think I might be autistic">I think I might be autistic</option>
            <option value="I am not sure">I am not sure</option>
          </select>
    </div>

    <div class="question">What is your attention deficit hyperactivity disorder (ADHD) status?</div>
    <div class="answers">
        <select name="adhd">
            <option value="">--Please choose an option--</option>
            <option value="I do not have ADHD.">I do not have ADHD.</option>
            <option value="I have ADHD and I have a diagnosis from a clinician.">I have ADHD and I have a diagnosis from a clinician.</option>
            <option value="I have ADHD and I do not have a diagnosis from a clinician.">I have ADHD and I do not have a diagnosis from a clinician.</option>
            <option value="I think I might have ADHD.">I think I might have ADHD.</option>
            <option value="I am not sure.">I am not sure.</option>
          </select>
    </div>

</fieldset>


<style>

fieldset {
    /* Remove the standard border on the fieldset */
    border: 0;
    /* Remove the standard padding on the fieldset */
    padding: 0;
    margin: var(--left-right-margins);
    margin-bottom: 30px;
}
</style>