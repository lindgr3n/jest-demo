import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-component">
                <i className="icon-test-1">One</i><br></br>
                <i className="icon-test-2">Two</i><br></br>
                <i className="icon-test-3">Three</i>
            </div>
        )
    }
}

export default Test;