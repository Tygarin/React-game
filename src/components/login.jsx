import '../App.css';
import React from 'react';
import {Link} from "react-router-dom"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email    : '',
            password : '',
            errors   : ''
        }
    }
    handleChangeEmail = (event) => {
        console.log(this.state);
        this.setState({email: event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }
    onLogin = async () => {
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email : this.state.email,
                password : this.state.password
            })
        });
        let result = await response.json();
        console.log(result);
        if(result.errors) {
            this.setState({
                errors : result.errors
            })
        }
        if(result.status == true) {
            localStorage.setItem('token', result.data.access_token)
            this.props.history.push('/typehard')
            console.log(result.data.access_token);
        }
    }
    render() {
        return(
            <div className="wrapper">
                <div className="authorization">
                    <h3>Авторизация</h3>
                    <form name="authorization_form" id="authorization_form" className="authorization_form">
                        <input type="email" name="email" onChange={this.handleChangeEmail} placeholder="Введите email"/>
                        <input type="password" name="password" onChange={this.handleChangePassword} placeholder="Введите пароль"/>
                        <p>{this.state.errors}</p>
                        <input type="button" id="log_btn" className="log_btn" value="Войти" onClick={this.onLogin}/>
                        <br />
                        <Link to='/registration'>Нет аккаунта? Создайте!</Link>
                    </form>
                </div>
            </div>
        )
    }
}