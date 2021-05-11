import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import Erro from './pages/Erro'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos} />
                <Route path="*" component={Erro} />
                
                
            </Switch>        
        </BrowserRouter>
    );
}

export default Routes;