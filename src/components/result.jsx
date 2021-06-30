import '../App.css';
import React from 'react';
import {Link} from "react-router-dom";

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: JSON.parse(localStorage.getItem('questions')),
            points: localStorage.getItem('points'),
            type: 2
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
    logout = () => {
        localStorage.clear()
    }
    render() {
        return(
            <div className="wrapper1">
                <div className="result">
                    <div className="score">SCORE: {this.state.points}</div>
                    <div className="timer">TIMER: 0</div>
                    <h3>END GAME</h3>
                    <div className="toptbl">
                        <h3>Question</h3>
                        <h3>Answer</h3>
                        <h3>Correct</h3>
                    </div>
                    {this.state.questions.map((i,index) => 
                        <div className="contenttbl" key={index}>
                            <p>{i.question}</p>
                            <p>{i.current_answer}</p>
                            <p>{i.answer}</p>
                        </div>
                        )
                    }
                    <Link to='/typehard'><input type="button" value="play again" /></Link>
                    <Link to="/login"><input type="button" value="log out" onClick={this.logout}/></Link>
                </div>
            </div>
        )
    }
}