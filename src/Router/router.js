import react from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import OurStory from '../Pages/Ourstory'
import PickYourBox from '../Pages/PickYourBox'
function Routes() {
    return (
        <Switch>
            {/* <Route path="/">
                <Home />
            </Route> */}
            <Route path="/pick-your-box">
                <PickYourBox />
            </Route>
            <Route path="/our-story">
                <OurStory />
            </Route>
        </Switch>
    )
}

export default Routes