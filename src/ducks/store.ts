import { createStore } from "redux";

interface Action {
  type: string;
}

export const INITIAL_STATE = { isAuthenticated: false, profile: null };
const rootReducer = (state = INITIAL_STATE, action: Action) => {
  if (!action.type) throw Error("action type not provided");
  return state;
};
export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, INITIAL_STATE);
