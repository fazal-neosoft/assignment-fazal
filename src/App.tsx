/**
 * @author Fazal Iqubal
 */

import Home from "./component/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./component/Layout/Navbar";
import Count from "./component/Count";
import AddUser from "./AddUser";

const App: React.FC = ()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/count" component={Count} />
          <Route exact path="/users/add" component={AddUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
