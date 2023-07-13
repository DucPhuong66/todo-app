import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText)
//     })

//     return todoRemaining;
// }

//  reselect
export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);
