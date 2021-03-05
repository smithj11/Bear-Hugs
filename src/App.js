import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/Loginpage'
import RegisterPage from './Pages/Registerpage'
import ViewProfilePage from './Pages/ViewProfilesPage';
import MatchProfile from './Components/MatchProfile.js'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route exact path="/viewmatches" component={ViewProfilePage}></Route>
    </Switch>
</Router>
  
  );
}

export default App;
