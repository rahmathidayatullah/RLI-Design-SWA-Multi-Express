import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import "../src/assets/styles/typography.css";
import "../src/assets/styles/radio.css";
import "../src/assets/styles/checkbox.css";
import "../src/assets/styles/toggle.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
