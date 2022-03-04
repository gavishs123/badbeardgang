import react from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import OurStory from '../Pages/Ourstory'
import PickYourBox from '../Pages/PickYourBox'
function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/pick-your-box">
                <PickYourBox />
            </Route>
            <Route exact path="/our-story">
                <OurStory />
            </Route>
        </Switch>
    )
}

export default Routes