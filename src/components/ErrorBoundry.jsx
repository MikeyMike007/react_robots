import React from "react";
// Will render error if: throw new Eerror("") anywhere in the code

class ErrorBoundry extends React.Component {
  constructor() {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})

  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps. Thats not good</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
