<script>
  import Criteria from './CriteriaItem.svelte'
  import {CriteriaStore} from '../store.js';

  let criteriaCount = $CriteriaStore.length;

</script>

<h1>Critères RGAA 4.1 ({criteriaCount})</h1>

{#each $CriteriaStore as criteria}
  <Criteria {criteria} />
{/each}
