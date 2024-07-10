import "./App.css";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux TypeScript Tutorial</h1>
        <hr />
        <h3>Search for a package</h3>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
