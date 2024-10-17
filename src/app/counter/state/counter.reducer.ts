import {Action, createReducer, on} from "@ngrx/store";
import {initialState} from "./counter.state";
import {changeName, customIncrement, decrement, increment, reset} from "./counter.actions";

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    }
  }),
  on(changeName, (state, action) => {
    return {
      ...state,
      name: "Modified Mahabub Rahman"
    }
  })
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
