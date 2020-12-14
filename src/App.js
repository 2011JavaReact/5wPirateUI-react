import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import ViewPage from './components/pages/view-page/ViewPage';
import { AddPage } from './components/pages/AddPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LoginPage from './components/pages/LoginPage';

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/view-pirates" component={ViewPage}/> 
        <Route path="/add" component={AddPage} />  
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>   
      </Switch>
    </Router>
    <Footer />
    </>
    
  );
}

export default App;
