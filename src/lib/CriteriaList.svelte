<script>
  import Criteria from './CriteriaItem.svelte'
  export let criteraList = [];
</script>

{#each criteraList as criteria}
  <Criteria criteria={criteria.criterium} />
{/each}
