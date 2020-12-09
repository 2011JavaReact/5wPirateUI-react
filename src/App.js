import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>       
      </Switch>
    </Router>
  );
}

export default App;
