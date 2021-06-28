import '../App.css';
import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: JSON.parse(localStorage.getItem('options')),
            points: localStorage.getItem('points'),
            question: localStorage.getItem('question'),
            time: localStorage.getItem('time'),
            type_hard: localStorage.getItem('type_hard'),
            type: 2,
            answer: 0
        }
    }
    componentDidMount() {
        this.timeout()
    }
    timeout(){
        let time = setInterval(() => {
            this.setState({
                time: this.state.time -=1
            })
            if(this.state.time == 0){
                clearInterval(time)
            }
        }, 1000)
    }
    back = () => {
        localStorage.removeItem('options')
        localStorage.removeItem('points')
        localStorage.removeItem('question')
        localStorage.removeItem('time')
        localStorage.removeItem('type_hard')
        this.props.history.push('/typehard')
    }
    game = async() => {
        let token = localStorage.getItem('token');
        let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({
                type: this.state.type,
                type_hard: this.state.type_hard,
                answer: this.state.answer
            })
        });
        let result = await response.json();
    }
    render() {
        return (
            <div className="wrapper">
                <div className="game">
                    <h3>Game</h3>
                    <div className="score">
                        SCORE: {this.state.points}
                    </div>
                    <div className="timer">
                        TIMER: {this.state.time}
                    </div>
                    <div className="question">
                        {this.state.question}
                    </div>
                    <div className="options">
                        <input type="button" value={this.state.options[0]} />
                        <input type="button" value={this.state.options[1]} />
                        <input type="button" value={this.state.options[2]} />
                        <input type="button" value={this.state.options[3]} />
                    </div>
                    <div className="hardoption" id='hardoption'>
                        <input type="text" name="" id="" placeholder='ответ..' />
                        <input type="button" value="Отправить" />
                    </div>
                    <input className="backBtn" type="button" value="Go back" onClick={this.back}/>
                </div>
            </div>
        )
    }
}