import React from 'react';
import {Link} from "react-router-dom";

class NotFound extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <article className="bgimg w3-display-container w3-animate-opacity w3-text-white" style={{backgroundColor: "#fff"}}>
                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top">This page is not available.</h1>
                    <hr className="w3-border-grey" style={{margin: "auto", width: "40%"}} />
                    <p className="w3-large w3-center">The link you followed may have been broken, or the page may have been removed. <Link to="/">Go back to Place Puppies.</Link></p>
                </div>
            </article>
        );
    }

    componentWillMount() {}
}

export default NotFound;