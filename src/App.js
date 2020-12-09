import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ViewPage from './components/pages/ViewPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/view-pirates" component={ViewPage}/> 
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/> 
      </Switch>
    </Router>
  );
}

export default App;
