import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './Components/Register.Components';
function App() {
  
  return (
    <div className="App">
      <Router>
        
        <Switch>

        <Route path="/" exact component={Home}/>
        <Route path="/register"  component={Register}/>
 
        </Switch>
        
     </Router>
    </div>
  );
}

export default App;
