import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions'


class CommentBox extends Component {
  state = { comment: '' }

  handleComment = e => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Add Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleComment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className={'fetch-comments'} onClick={this.props.getComments}>Get comments</button>
      </React.Fragment>
    )
  }
}

export default connect(null, actions)(CommentBox)