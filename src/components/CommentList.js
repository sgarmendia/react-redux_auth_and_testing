import React, { Component } from 'react'
import { connect } from 'react-redux';


class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.length 
      ? this.props.comments.map((comment, i) => <li key={i}>{comment}</li>)
      : <h3>Oops! No comments here...</h3>
  }

  render() {
    return (
      <React.Fragment>
        <h4>Comment List</h4>
        <ul>
        {this.renderComments()}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(mapStateToProps)(CommentList)
