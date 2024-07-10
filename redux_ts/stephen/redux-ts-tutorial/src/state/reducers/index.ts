import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

//creating a root type to tell ts/react-redux what type of data is coming out of the store
export type RootState = ReturnType<typeof reducers>;
