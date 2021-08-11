import React from 'react'
import './Login.css'
import {Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../ReactContextApi/StateProvider'
import { actionTypes } from '../ReactContextApi/reducer'
const Login = () => {

    const  [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
             dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user
             })
        })
        .catch(err =>{
            console.log(err)
            alert(err.message)
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo" />
                <h1>Sign in to Killer Programmer</h1>
                <p>killer.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
