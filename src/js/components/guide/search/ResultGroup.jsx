/**
 * ResultGroup.jsx
 * Created by Kevin Li 5/1/17
 */

import React from 'react';

import ResultItem from './ResultItem';

const propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array,
    search: React.PropTypes.string,
    selectTerm: React.PropTypes.func
};

export default class ResultGroup extends React.Component {
    render() {
        const items = this.props.items.map((item) => (
            <ResultItem
                item={item}
                search={this.props.search}
                selectTerm={this.props.selectTerm}
                key={item.term} />
        ));

        return (
            <div className="guide-result-group">
                <h3 className="group-title">
                    {this.props.title}
                </h3>
                <hr className="group-divider" />
                <ul className="group-items">
                    {items}
                </ul>
            </div>
        );
    }
}

ResultGroup.propTypes = propTypes;
