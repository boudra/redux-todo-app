import React from 'react';

import {createStore} from "redux";
import {Provider} from "react-redux";

import TodoList from "./TodoList";

const initialState = {
  todos: [
    {
      text: "do the laundry",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "TOGGLE_TODO":
      return { ...state, todos: state.todos.map((todo, index) => {
        if(index === action.payload) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })};

    default:
      return state;
  }
}

const store = createStore(reducer);


store.subscribe(() => console.log("new state", store.getState()))

function App() {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
