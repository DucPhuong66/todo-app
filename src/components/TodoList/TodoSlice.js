const initState = [
  { id: 1, name: "Learn React", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn Js", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
