/**
 * Guide.jsx
 * Created by Kevin Li 4/28/17
 */

import React from 'react';

import GuideHeader from './GuideHeader';
import GuideSearchResults from './search/GuideSearchResults';
import GuideDefinition from './definition/GuideDefinition';

const propTypes = {
    guide: React.PropTypes.object,
    loading: React.PropTypes.bool,
    error: React.PropTypes.bool
};

export default class Guide extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.guide.term !== prevProps.guide.term) {
            // we've either gone to a definition or returned from one
            // scroll back to the top
            if (this.sidebar) {
                this.sidebar.scrollTop = 0;
            }
        }
    }
    render() {
        let content = <GuideSearchResults {...this.props} />;

        if (this.props.guide.term.slug && this.props.guide.term.slug !== '') {
            content = <GuideDefinition {...this.props} />;
        }

        let loading = null;
        if (this.props.loading) {
            loading = (<div className="guide-loading">
                Loading Guide...
            </div>);
        }
        else if (this.props.error) {
            loading = (<div className="guide-loading">
                Error: Could not load Guide.
            </div>);
        }

        return (
            <div className="usa-da-guide-wrapper">
                <div
                    className="guide-sidebar"
                    ref={(div) => {
                        this.sidebar = div;
                    }}>
                    <GuideHeader {...this.props} />
                    {loading}
                    {content}
                </div>
            </div>
        );
    }
}

Guide.propTypes = propTypes;
