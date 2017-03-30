/**
 * ResultsTablePicker.jsx
 * Created by Lizzie Salita 03/28/17
 **/

import React from 'react';
import * as Icons from 'components/sharedComponents/icons/Icons';
import ResultsTablePickerOption from './ResultsTablePickerOption';

const propTypes = {
    types: React.PropTypes.array,
    active: React.PropTypes.string,
    switchTab: React.PropTypes.func
};

export default class ResultsTablePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // TODO: add awardType
            showPicker: false
        };

        this.togglePicker = this.togglePicker.bind(this);
    }

    togglePicker() {
        this.setState({
            showPicker: !this.state.showPicker
        });
    }

    render() {
        const options = this.props.types.map((type) => (
            <ResultsTablePickerOption
                {...type}
                active={this.props.active === type.internal}
                switchTab={this.props.switchTab}
                key={`table-type-item-${type.internal}`} />
        ));

        const currentField = this.props.active;
        let showPicker = 'hide';
        let icon = <Icons.AngleDown alt="Pick a field" />;
        if (this.state.showPicker) {
            showPicker = '';
            icon = <Icons.AngleUp alt="Pick a field" />;
        }

        return (
        <div className="field-picker">
            <button
                className="selected-button"
                title={currentField}
                aria-label={currentField}
                onClick={this.togglePicker}>
                    <span className="label">
                        {currentField}
                    </span>
                    <span className="arrow-icon">
                        {icon}
                    </span>
            </button>

            <div className={`field-list ${showPicker}`}>
                <ul>
                    {options}
                </ul>
            </div>
        </div>
        );
    }
}

ResultsTablePicker.propTypes = propTypes;
