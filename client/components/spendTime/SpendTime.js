import React from 'react';
import FontAwesome from 'react-fontawesome';

import './SpendTime.less';

const formattedSeconds = (sec) => {
    let date = new Date(null);
    date.setSeconds(sec);
    return date.toISOString().substr(11, 8);
}

export default class SpendTime extends React.Component {
    state = {
        spendTime: this.props?.spendTime,
        lastClearedIncrementer: null,
        isDisablePause: true,
        isDisabledStart: false
    }

    handleStartClick = () => {
        this.incrementer = setInterval(() => this.setState({
            spendTime: this.state?.spendTime + 1
        }), 1000);
        this.setState({
            isDisabledStart: true,
            isDisablePause: false
        });
        setInterval(() => { this.props?.onUpdate(this.state?.spendTime)}, 10000)
    }

    handlePauseClick = () => {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer,
            isDisabledStart: false,
            isDisablePause: true
        });
        this.props?.onUpdate(this.state?.spendTime)
    }


    render() {
        return (
            <div className="SpendTime">
                <button
                    className="SpendTime__start"
                    disabled={this.state?.isDisabledStart}
                    onClick={this.handleStartClick}
                >
                    <FontAwesome name='far fa-play-circle'/>
                </button>

                <button
                    className="SpendTime__pause"
                    disabled={this.state?.isDisablePause}
                    onClick={this.handlePauseClick}
                >
                    <FontAwesome name='far fa-pause-circle'/>
                </button>

                <span className="stopwatch-timer">{formattedSeconds(this.state?.spendTime || 0)}</span>
            </div>
        );
    }
};
