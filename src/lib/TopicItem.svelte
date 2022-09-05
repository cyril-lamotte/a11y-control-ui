<script>
  import CriteriaList from './CriteriaList.svelte'

  export let topic = {};
  const criteraList = topic.criteria;
</script>

<h1>{topic.number}. {topic.topic}</h1>

<CriteriaList {criteraList} />
