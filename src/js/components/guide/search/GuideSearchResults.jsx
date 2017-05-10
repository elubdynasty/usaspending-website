/**
 * GuideSearchResults.jsx
 * Created by Kevin Li 5/1/17
 */

import React from 'react';
import _ from 'lodash';

import ResultGroup from './ResultGroup';

const propTypes = {
    guide: React.PropTypes.object,
    setGuideTerm: React.PropTypes.func
};

export default class GuideSearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.selectTerm = this.selectTerm.bind(this);
    }

    selectTerm(term) {
        this.props.setGuideTerm(term);
    }

    groupResults() {
        // we need to group the results by their starting letter
        const groups = {};

        this.props.guide.search.results.forEach((result) => {
            const startingLetter = result.term.charAt(0).toUpperCase();
            // check if we already have the character
            if (Object.hasOwnProperty.call(groups, startingLetter)) {
                // we do, add it to to the list
                const groupValues = _.concat([], groups[startingLetter].terms, result);
                groups[startingLetter].terms = _.sortBy(groupValues, ['term']);
            }
            else {
                // the character doesn't exist as a group item yet
                const group = {
                    letter: startingLetter,
                    terms: [result]
                };
                groups[startingLetter] = group;
            }
        });

        // sort the groups by starting letter
        const orderedGroups = _.sortBy(groups, ['letter']);

        return orderedGroups.map((group) => (
            <ResultGroup
                key={group.letter}
                title={group.letter}
                items={group.terms}
                search={this.props.guide.search.input}
                selectTerm={this.selectTerm} />
        ));
    }

    render() {
        const results = this.groupResults();
        return (
            <div className="guide-search-results">
                {results}
            </div>
        );
    }
}

GuideSearchResults.propTypes = propTypes;
