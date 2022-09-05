<script>
  import Topic from './TopicItem.svelte';
  import {CriteriaStore} from '../store.js';

</script>

{#each $CriteriaStore as topic}
  <Topic {topic} />
{/each}
