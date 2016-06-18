import * as React from "react"
import * as Redux from "redux"
import { connect } from "react-redux"

import { Increment, IncrementProps } from "../components/Increment"
import * as model from "../models"
import { increment } from "../actions"

const mapStateToProps = (state: model.AppState): IncrementProps => {
    return {
        counter: state.increment
    };
}

const mapDispatchToProps = (dispatch:Redux.Dispatch): IncrementProps => {
    return {    
        increment: () => {
            dispatch(increment());
        }
    }
}

console

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Increment)
