/* eslint react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// eslint-disable-next-line import/no-unresolved
import { ActionCreators } from "../actions/";

export default function AuthContainer(ComposedComponent, isLoggedin, type) {
  class AuthContainer extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {}
    render() {
      return <ComposedComponent {...this.props} {...isLoggedin} />;
    }
  }
  function mapStateToProps(state) {
    let prop = {
      commonReducer: state.commonReducer,
    };

    return prop;
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(ActionCreators(type), dispatch),
    };
  }
  return connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
}
