import './App.css';
import Overview from './Components/Overview';
import TodoMain from './Components/TodoMain';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" component = {Overview} exact />
            <Route path = "/todos" component = {TodoMain} exact />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
