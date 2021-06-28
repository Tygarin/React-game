import '../App.css';
import React from 'react';

export default class TypeHard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type_hard : 1,
            type : 1
        }
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
        console.log(result);
        console.log(token);
    }
    handleChangeTypeHard = (e) => {
        this.setState({
            type_hard : e.target.value
        })
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
                </div>
            </div>
        )
    }
}