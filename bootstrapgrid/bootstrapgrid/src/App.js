import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from './components/container';
import Assignment from './components/assignment';
import FlexContainer from './components/flexboxes/flexcontainer';
import FlexOrder from './components/flexboxes/flexorder';



function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
          <Route  exact path="/">
            <Container />
          </Route>
          <Route exact path="/assignment">
            <Assignment />
          </Route>
          <Route exact path="/flex">
            <FlexContainer />
          </Route>
          <Route exact path="/flexorder">
            <FlexOrder />
          </Route>
         
        </Switch>
     </Router>
   </div>
  );
}

export default App;
