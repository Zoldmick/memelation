import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import notfound from './pages/notFound'
import register from './pages/register'
import adultMeme from './pages/adultMeme'
import remove from './pages/delete'
import change from './pages/change'
import home from './pages/home'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} componenets={home}/>
                <Route path='/notFound' componenets={notfound}/>
                <Route path='/adulMeme' componenets={adultMeme}/>
                <Route path='/register' componenets={register}/>
                <Route path='/change' componenets={change}/>
                <Route path='/delete' componenets={remove}/>
            </Switch>
        </BrowserRouter>
    )
}