import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './common/Header'
import HomePage from './homepage/HomePage'

const App: React.VFC = () => {

  return (
    <Router>
        <Suspense fallback={<div>Fallback</div>}>

          <Header />

          <Switch>
            <Route
              exact
              path='/'
            >
              <HomePage />
            </Route>
  
            <Route>
              <div>
                This is 404
              </div>
            </Route>




          </Switch>
        </Suspense>
      
    </Router>
  )

}

export default App;