import React from "react";
import {connect} from "react-redux";
import {testAction} from "../store/actions/common";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.props.onTestAction("test")
    }
    render() {
        return (
            <div className="Home">
                <h2>Home</h2>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        testParam : state.commonReducer.testParam
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTestAction : (data) => dispatch(testAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
