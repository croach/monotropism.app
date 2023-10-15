<fieldset {...$$restProps}>
    <div class="question">What is your gender?</div>
    <div class="answers">
        <select name="gender">
            <option value="-1">--Please choose an option--</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Non-binary / third gender</option>
            <option value="4">Prefer not to say</option>
          </select>
    </div>

    <div class="question">What is your age in years?</div>
    <div class="answers">
        <input type="tel" name="age" pattern="[0-9]*">
    </div>

    <div class="question">What is your ethnic group?</div>
    <div class="answers">
        <select name="ethnicity">
            <option value="-1">--Please choose an option--</option>
            <option value="1">White / Caucasian</option>
            <option value="2">Black or African American</option>
            <option value="3">Asian / Pacific Islander</option>
            <option value="4">Native American or Alaskan Native</option>
            <option value="5">Hispanic</option>
            <option value="6">Multiple ethnicity</option>
            <option value="7">Other / Unknown</option>
          </select>
    </div>

    <div class="question">What is the highest level of education you have completed?</div>
    <div class="answers">
        <select name="education_level">
            <option value="-1">--Please choose an option--</option>
            <option value="1">High school degree or equivalent (e.g., GED)</option>
            <option value="2">Some college but no degree</option>
            <option value="3">Associate degree</option>
            <option value="4">Bachelor's degree</option>
            <option value="5">Master's degree</option>
            <option value="6">Doctorate / Post-doctoral degree</option>
          </select>
    </div>

    <div class="question">What is your autism status?</div>
    <div class="answers">
        <select name="autism_status">
            <option value="-1">--Please choose an option--</option>
            <option value="1">I am not autistic.</option>
            <option value="2">I am autistic and I have a diagnosis from a clinician.</option>
            <option value="3">I am autistic and I do not have a diagnosis from a clinician.</option>
            <option value="4">I think I might be autistic</option>
            <option value="5">I am not sure</option>
          </select>
    </div>

    <div class="question">What is your attention deficit hyperactivity disorder (ADHD) status?</div>
    <div class="answers">
        <select name="adhd_status">
            <option value="-1">--Please choose an option--</option>
            <option value="1">I do not have ADHD.</option>
            <option value="2">I have ADHD and I have a diagnosis from a clinician.</option>
            <option value="3">I have ADHD and I do not have a diagnosis from a clinician.</option>
            <option value="4">I think I might have ADHD.</option>
            <option value="5">I am not sure.</option>
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