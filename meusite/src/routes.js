import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Views/Home'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact component={Home} path="/"/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes