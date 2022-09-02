<script>
  import Button from './Button.svelte'

  export let criteria = {};
  let state = 'DEFAULT';

  // Export full criteria title.
  export const fullTitle = `${criteria.theme}.${criteria.number} ${criteria.title}`;

  // Set state.
  const setCriteriaState = (e) => {
    state = e.detail;
  };

</script>

<div class="criteria">
  <h2>{fullTitle}</h2>
  <strong>{state}</strong>

  {#if state !== 'VALID'}
    <Button label={"Conforme"} state="VALID" on:state-update={setCriteriaState} />
  {/if}

  {#if state !== 'DEFAULT'}
    <Button label={"Non-testé"} state="DEFAULT" on:state-update={setCriteriaState} />
  {/if}

</div>

<style>

  .criteria {
    background: #f4f4f4;
    padding: 20px;
    margin: 0 0 30px 0;
    border-radius: 10px;
  }

</style>
