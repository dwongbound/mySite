import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './common/Header'
import HomePage from './homepage/HomePage'
import AboutPage from './aboutpage/AboutPage'

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
              <div>
                Hello
              </div>
              <HomePage />
            </Route>
            <Route
              exact
              path='/about'
            >
              <AboutPage />
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