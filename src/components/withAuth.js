import React, { Component } from 'react'
import { connect } from 'react-redux';

export default WrappedComponent => {
  class withAuth extends Component {
    componentDidMount = () => {
      this.redirectToHome()
    }
    
    componentDidUpdate = () => {
      this.redirectToHome()
    }
    
    redirectToHome = () => { if(!this.props.auth) this.props.history.push('/') }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  
  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(withAuth)
}
