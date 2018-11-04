import React, { Component } from 'react'
import { connect } from 'react-redux';


class CommentList extends Component {
  renderComments = () => 
    this.props.comments.map((comment, i) => <li key={i}>{comment}</li>)

  render() {
    return (
      <React.Fragment>
        <ul>
        {this.renderComments()}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(CommentList)
