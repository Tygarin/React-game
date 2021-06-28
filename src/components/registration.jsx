import '../App.css';
import React from 'react';

export default class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name                  : '',
            email                 : '',
            password              : '',
            password_confirmation : '',
            errors                : '',
            access_token          : ''
        }
    }
    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    }
    handleChangeEmail = (event) => {
        console.log(this.state);
        this.setState({email: event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }
    handleChangePasswordConfirmation = (event) => {
        this.setState({password_confirmation: event.target.value});
    }
    reDirect = () => {
        this.props.history.push('/login')
    }
    onRegistration = async () => {
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name                  : this.state.name,
                email                 : this.state.email,
                password              : this.state.password,
                password_confirmation : this.state.password_confirmation
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
            this.reDirect()
        }
    }
    render() {
        return(
            <div className="wrapper">
                <div className="registration">
                    <h3>Регистрация</h3>
                    <form name="registration_form" id="registration_form" className="registration_form">
                        <input type="text" name="name" onChange={this.handleChangeName} placeholder="Введите имя"/>
                        <input type="email" name="email" onChange={this.handleChangeEmail} placeholder="Введите email"/>
                        <input type="password" name="password" onChange={this.handleChangePassword} placeholder="Введите пароль"/>
                        <input type="password" name="password_confirmation" onChange={this.handleChangePasswordConfirmation} placeholder="Подтвердите пароль"/>
                        <p>{this.state.errors}</p>
                        <input type="button" onClick={this.onRegistration} className="reg_btn" value="Зарегистрироваться" />
                        <br />
                        <a onClick={this.reDirect}>Войти в аккаунт</a>
                    </form>
                </div>
            </div>
        )
    }
}