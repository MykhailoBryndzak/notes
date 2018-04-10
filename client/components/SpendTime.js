import React from 'react';
import FontAwesome from 'react-fontawesome';

import './SpendTime.less';

const formattedSeconds = (sec) => {
    var date = new Date(null);
    date.setSeconds(sec);
    return date.toISOString().substr(11, 8);
}

class SpendTime extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            lastClearedIncrementer: null
        };
        this.incrementer = null;
    }

    handleStartClick() {
        this.incrementer = setInterval(() => this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        }), 1000);
    }

    handleStopClick() {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer
        });
    }


    render() {
        return (
            <div className="SpendTime">
                <button
                    className="SpendTime__start"
                    onClick={this.handleStartClick.bind(this)}
                >
                    <FontAwesome name='far fa-play-circle'/>
                </button>

                <button
                    className="SpendTime__pause"
                    onClick={this.handleStopClick.bind(this)}
                >
                    <FontAwesome name='far fa-pause-circle'/>
                </button>

                <span className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</span>
            </div>
        );
    }
}

export default SpendTime;
