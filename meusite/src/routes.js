import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Views/home'
import FilmDescription from './Views/home/FilmDescription'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact component={Home} path="/"/>
                <Route exact component={FilmDescription} path="/:id"/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes