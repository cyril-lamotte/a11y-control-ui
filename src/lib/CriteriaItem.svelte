<script>
  import Button from './Button.svelte'

  export let criteria = {};
  let state = 'DEFAULT';

  // Export full criteria title.
  export const fullTitle = `${criteria.number} ${criteria.title}`;

  // Set state.
  const setCriteriaState = (e) => {
    state = e.detail;
  };

</script>

<div class="criteria">
  <h2>{fullTitle}</h2>
  <div>
    <strong>{state}</strong>
  </div>

  <Button label={"Conforme"} state="VALID" on:state-update={setCriteriaState} />
  <Button label={"Non-conforme"} state="NOT_VALID" on:state-update={setCriteriaState} />
  <Button label={"Non-testé"} state="DEFAULT" on:state-update={setCriteriaState} />
  <Button label={"Non-applicable"} state="NOT_APPLICABLE" on:state-update={setCriteriaState} />

</div>

<style>

  .criteria {
    background: #f4f4f4;
    padding: 20px;
    margin: 0 0 30px 0;
    border-radius: 10px;
  }

</style>
