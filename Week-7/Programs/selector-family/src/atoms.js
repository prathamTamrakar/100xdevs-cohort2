import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async () => {
      const res = await axios.get(`http://localhost:8080/todo?id=${id}`);
      return res.data.todo;
    },
  })
});
 
// we use selectorFamily because selector is not able to take parameters
// it would be a dynamic value
// selectorFamily is a function that takes a parameter and returns a selector