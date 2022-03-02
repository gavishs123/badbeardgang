import react from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
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
        </Switch>
    )
}

export default Routes