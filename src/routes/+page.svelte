<script>
  /** @type {import('./$types').PageData} */
  export let data

  /** @type {import('./$types').ActionData} */
  export let form;

  import Questionnaire from '../lib/components/Questionnaire.svelte';
  import Chart from '$lib/components/Chart.svelte';
</script>

<div class="main">
  
  <h1>Monotropism Questionnaire</h1>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna. Nunc sed velit dignissim sodales ut eu sem integer vitae. Consectetur libero id faucibus nisl. At auctor urna nunc id cursus metus aliquam eleifend mi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Lorem mollis aliquam ut porttitor leo a. Lectus nulla at volutpat diam ut. Venenatis cras sed felis eget velit aliquet sagittis. A erat nam at lectus urna duis convallis. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Blandit volutpat maecenas volutpat blandit aliquam. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Rhoncus est pellentesque elit ullamcorper. Eget mauris pharetra et ultrices neque ornare aenean euismod. Metus aliquam eleifend mi in nulla. Duis ultricies lacus sed turpis tincidunt id.</p>

  <p>Velit egestas dui id ornare. Vulputate dignissim suspendisse in est ante in nibh. Augue mauris augue neque gravida in fermentum. Sit amet venenatis urna cursus eget nunc. Cursus metus aliquam eleifend mi in nulla posuere. Morbi tristique senectus et netus et malesuada fames. Enim lobortis scelerisque fermentum dui faucibus. Urna neque viverra justo nec ultrices dui sapien eget mi. Amet luctus venenatis lectus magna fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Vitae ultricies leo integer malesuada nunc vel risus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Senectus et netus et malesuada fames ac turpis. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Urna neque viverra justo nec ultrices dui sapien eget.</p>

  <p>Porttitor leo a diam sollicitudin. Iaculis urna id volutpat lacus laoreet non. Ultrices eros in cursus turpis massa tincidunt dui. Eu sem integer vitae justo eget. Malesuada bibendum arcu vitae elementum curabitur. Duis ut diam quam nulla porttitor massa id neque aliquam. Senectus et netus et malesuada fames. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Mauris commodo quis imperdiet massa. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum est ultricies integer quis auctor elit sed vulputate. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Molestie a iaculis at erat.</p>

  <p>At volutpat diam ut venenatis tellus in metus. Ipsum dolor sit amet consectetur adipiscing. Amet massa vitae tortor condimentum lacinia quis. Enim nunc faucibus a pellentesque sit amet porttitor. Nibh ipsum consequat nisl vel pretium lectus. Convallis convallis tellus id interdum velit. Et tortor consequat id porta nibh venenatis cras sed felis. Massa placerat duis ultricies lacus sed turpis. Facilisis volutpat est velit egestas dui. Dapibus ultrices in iaculis nunc sed. Orci nulla pellentesque dignissim enim sit amet venenatis. Sit amet purus gravida quis blandit turpis cursus. Natoque penatibus et magnis dis parturient. Erat velit scelerisque in dictum non consectetur a. Aliquam vestibulum morbi blandit cursus. Suspendisse sed nisi lacus sed viverra tellus in hac. Commodo odio aenean sed adipiscing diam. Bibendum enim facilisis gravida neque. Mi bibendum neque egestas congue quisque.</p>

  <p>Nunc non blandit massa enim nec dui nunc. Sagittis aliquam malesuada bibendum arcu. Nec tincidunt praesent semper feugiat nibh. Purus semper eget duis at tellus at urna. In fermentum et sollicitudin ac orci phasellus egestas tellus. Enim blandit volutpat maecenas volutpat blandit. Faucibus in ornare quam viverra. Fames ac turpis egestas integer eget aliquet. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Pharetra et ultrices neque ornare aenean euismod. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Fusce ut placerat orci nulla pellentesque. Eu mi bibendum neque egestas congue quisque egestas. Orci phasellus egestas tellus rutrum tellus pellentesque. Facilisis volutpat est velit egestas dui id. Venenatis a condimentum vitae sapien pellentesque habitant. Amet massa vitae tortor condimentum lacinia quis vel eros. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.</p>

  {#if !form}
    <Questionnaire questions={data.questions} />
  {:else}
    <Chart data={form} />
  {/if}
</div>

<style>
  div.main {
    --left-right-margins: 0.8rem;

    /* Maker sure that the form looks good on bigger screens */
    max-width: 900px;
  }

  h1 {
    /* Add some space around the title  */
    margin: 1rem var(--left-right-margins);
  }

  p {
    /* Add some space around the paragraphs */
    margin: 1rem var(--left-right-margins);
  }
</style>