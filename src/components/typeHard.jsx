import '../App.css';
import React from 'react';
import {Link} from "react-router-dom"

export default class TypeHard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type_hard : 1,
            type : 1
        }
    }
    componentWillMount() {
        let checkAauth = setInterval(() => {
            if(!localStorage.getItem('token')){
                this.props.history.push('/login')
                clearInterval(checkAauth)
        } 
        }, 1000)
    }
    onStart = async () => {
        let token = localStorage.getItem('token');
        let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({
                type_hard : this.state.type_hard,
                type: this.state.type,
                Authorization: localStorage.getItem('token')
            })
        });
        let result = await response.json();
        localStorage.setItem('options', JSON.stringify(result.data.options))
        localStorage.setItem('points', result.data.points)
        localStorage.setItem('question', result.data.question)
        localStorage.setItem('time', result.data.time)
        localStorage.setItem('type_hard', this.state.type_hard)
        if(result.status == true) {
            this.props.history.push('/game')
        } else {
            this.props.history.push('/login')
        }
        console.log(result);
        console.log(token);
    }
    handleChangeTypeHard = (e) => {
        this.setState({
            type_hard : e.target.value - 1
        })
    }
    logout = () => {
        localStorage.clear()
    }
    render() {
        return (
            <div className="wrapper">
                <div className="typehard">
                    <h3>Выберите сложность</h3>
                    <br />
                    <select onChange={this.handleChangeTypeHard}>
                        <option disabled="disabled" value>Выберите сложность</option> 
                        <option value='1'>Еasy/легко</option> 
                        <option value='2'>Hard/тяжело</option> 
                    </select>
                    <br />
                    <input type="button" value="Start" onClick={this.onStart} />
                    <br />
                    <Link to='/login'><input type="button" onClick={this.logout} value="Log out" /></Link>
                </div>
            </div>
        )
    }
}