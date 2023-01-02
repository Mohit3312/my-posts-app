import "./App.css";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import Store from "./store/Store";

function App() {
  return (
    <Provider store={Store}>
      <Posts />
    </Provider>
  );
}

export default App;
