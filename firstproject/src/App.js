import React from 'react'
import Navigation from './Components/Navigation'
import {BrowserRouter as Router,Redirect,Route} from 'react-router-dom'
import PageRender from './Components/PageRender'
function App() {
  return (
    <Router>
    <div className="App">
    <Navigation/>
      <Route path='/:pages'>
      <PageRender/>
      </Route>
      <Route exact path='/'>
<Redirect to='/home'></Redirect>
      </Route>
   
       
    </div>
    </Router>
  );
}

export default App;
