import React from 'react';
import { HashRouter as Router, Link, Route} from 'react-router-dom'
import signUp from './components/signUp';
import home from './components/home';
import "./style/App.css";
import login from './components/login';
import LoginRedirect from './components/loginre';
class Home extends React.Component {
  render() {
     return( <h1> Home </h1> );
  }
}

class CV extends React.Component {
  render() {
     return( <h1> CV </h1> );
  }
}

class Courses extends React.Component {
  render() {
     return( <h1> Courses </h1> );
  }
}

class App extends React.Component {
render() {
   return(
      <Router>
         <div>
           <h1> Single-Page Application (SPA) </h1>
           <ul>
               <li><Link to="/">Home</Link></li>      
               <li><Link to="/signUp">signUp</Link></li>
               <li><Link to="/login">login</Link></li>

               
           </ul>
          <div>
              <Router>
              <Route exact path="/" component={home}/>
              <Route path="/signUp" component={signUp}/> 
              <Route path="/login" component={login}/> 
              <Route exact path="/connect/:providerName/redirect" component={LoginRedirect} />
              </Router>

          </div>
         </div>
      </Router>
   );
}
}

export default App