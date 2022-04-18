import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/container";
import Assignment from "./components/assignment";
import FlexContainer from "./components/flexboxes/flexcontainer";
import FlexOrder from "./components/flexboxes/flexorder";
import Todolist from './components/todolist/todolist';
import React, { useState } from "react";
import Form from "./Form";



function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
  setTodos(
    todos.map(
      (todo, k) =>
        k === i
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
    )
  );
    const deleteItem = (i) => {
      const newList = todos.filter((todo) => todo.key !== i);
           todos.map((todo, k) =>
                 k === i,
                 todos.filter((todo) => todo.k !== i),
                 setTodos(todos)
       )
      
     }

  
  return (
    <div className="App">
      <div className="">
      {/* <Form
        onSubmit={(text) => setTodos([{ text, complete: false,key:Date.now() }, ...todos])}
      /> */}
    
        
          {todos.map(({ text, complete }, i) => (
            <div
              // key={text}
              onClick={() => toggleComplete(i)}
              style={{
                textDecoration: complete ? "line-through" : "",

              }}
              
             
            >
              <button onClick={() => delete(text.key)}>del</button>
              
              {text}
             
            </div>
          ))}
           
      
        {/* <button onClick={() => setTodos([])}><b>Reset</b></button> */}
        
        </div>
        
        <Router>
          <Switch>
          <Route  exact path="/container">
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
          <Route exact path="/todolist">
            <Todolist />
          </Route>
         
        </Switch>
     </Router>
    </div>
  );
}

export default App;
