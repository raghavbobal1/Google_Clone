import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
          <SearchPage/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
