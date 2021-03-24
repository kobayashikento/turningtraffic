import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import HomeSkeleton from './sections/HomeSkeleton';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/" render={props => <HomeSkeleton {...props} />} />
    </Router>
  );
}

export default App;
