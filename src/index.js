import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import ExperienceProviderReg from './views/experience-provider-reg'
import LandingPage from './views/landing-page'
import DestinationDetails from './views/destination-details'
import AboutUs from './views/about-us'
import LocalGuideReg from './views/local-guide-reg'
import AllDestinations from './views/all-destinations'
import PackagesBuilder from './views/packages-builder'
import LocalGuides from './views/local-guides'
import NotFound from './views/not-found'
import Test from './views/test'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route
          component={ExperienceProviderReg}
          exact
          path="/experience-provider-reg"
        />
        <Route component={LandingPage} exact path="/" />
        <Route
          component={DestinationDetails}
          exact
          path="/destination-details"
        />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={LocalGuideReg} exact path="/local-guide-reg" />
        <Route component={AllDestinations} exact path="/all-destinations" />
        <Route component={PackagesBuilder} exact path="/packages-builder" />
        <Route component={LocalGuides} exact path="/local-guides" />
        <Route component={Test} exact path="/test" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
