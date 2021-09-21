import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home.js';
import Result from './Result.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/result" exact
          render={(props) => (
            <Result 
              state={props.location.state}
            />
          )}
        />
      </Switch>
    </Router>
  )
}

export default App;








