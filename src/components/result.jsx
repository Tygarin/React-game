import '../App.css';
import React from 'react';

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: JSON.parse(localStorage.getItem('questions')),
            points: localStorage.getItem('points'),
            type: 2
        }
    }
    render() {
        return(
            <div className="wrapper">
                <div className="result">
                    <div className="score">SCORE: 0</div>
                    <div className="timer">TIMER: 0</div>
                    <h3>END GAME</h3>
                    
                </div>
            </div>
        )
    }
}