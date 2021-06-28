import '../App.css';
import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type_hard : 1,
            type : 1
        }
    }
    render() {
        return (
            <div className="wrapper">
                Game
            </div>
        )
    }
}