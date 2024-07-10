import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
  //bindActionCreators returns an object that has the following structure:
  //{ searchRepositories: dispatch(searchRepositories),
  //otherAction: dispatch(otherAction)}
};
