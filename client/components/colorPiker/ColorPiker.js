import React from 'react';
import cx from 'classnames';

import './ColorPiker.less';

const COLORS = [
    '#fff',
    '#80d8ff',
    '#ffff8d',
    '#ff8a80',
    '#ccff90',
    '#cfd8dc',
    '#ffd180',
    '#dc96fb'
];

export default class ColorPicker extends React.Component {
    
    render() {
        return (
            <div className="ColorPicker">
                {
                    COLORS?.map(color =>
                        <div
                            key={color}
                            className={cx('ColorPicker__swatch', {selected: this.props?.value === color})}
                            style={{background: color}}
                            onClick={this.props?.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
};
