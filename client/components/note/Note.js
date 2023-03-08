import React from 'react';

import './Note.less';
import SpendTime from '../spendTime/SpendTime';

export default class Note extends React.Component {

    render() {
        const style = {backgroundColor: this.props?.color};

        return (
            <div className="Note" style={style}>
                <span className="Note__del-icon" onClick={this.props?.onDelete}> x </span>
                {
                    this.title
                        ?
                            <h4 className="Note__title">{this.title}</h4>
                        :
                            null
                }
                <div className="Note__text">{this.props?.children}</div>

                <SpendTime props={this.props} spendTime={this.props?.spendTime} onUpdate={this.props?.onUpdate}/>
            </div>
        );
    }
};





