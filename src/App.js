import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./utilis/appStore";

function App() {
  return(
    <Provider store={appStore}><Body></Body></Provider>
//  <Body></Body>
  );
}

export default App;
