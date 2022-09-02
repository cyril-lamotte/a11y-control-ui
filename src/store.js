import { writable} from "svelte/store";

export const CriteriaStore = writable([
  {
    id: 1,
    theme: 1,
    number: 1,
    title: 'Chaque image porteuse d’information a-t-elle une alternative textuelle ?',
  },
  {
    id: 2,
    theme: 1,
    number: 2,
    title: 'Chaque image de décoration est-elle correctement ignorée par les technologies d’assistance ?',
  }
]);
