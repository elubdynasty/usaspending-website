/**
 * InvalidAccount.jsx
 * Created by Kevin Li 3/24/17
 */

import React from 'react';

import Header from '../sharedComponents/header/Header';
import Footer from '../sharedComponents/Footer';
import Error from '../sharedComponents/Error';

const propTypes = {
    account: React.PropTypes.object
};

export default class InvalidAccount extends React.Component {
    render() {
        return (
            <div className="usa-da-account-page">
                <Header />
                <main
                    id="main-content"
                    className="main-content">
                    <div className="wrapper">
                        <Error
                            title="Invalid Federal Account"
                            message="The federal account ID provided is invalid.
                            Please check the ID and try again." />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

InvalidAccount.propTypes = propTypes;
