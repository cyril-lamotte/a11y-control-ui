<script>
  import {createEventDispatcher} from 'svelte';

  export let label = 'TEST';
  export let state;

  const dispatch = createEventDispatcher();

  // Set state.
  const click = () => {
    dispatch('state-update', state);
  };
</script>

<button type="button" on:click={click}><span>{label}</span></button>
