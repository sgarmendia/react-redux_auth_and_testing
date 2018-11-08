import { SAVE_COMMENT, GET_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';


export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}

export function getComments() {
  const comments = axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type: GET_COMMENTS,
    payload: comments
  }
}

export function changeAuth(isLogged) {
  return {
    type: CHANGE_AUTH,
    payload: isLogged
  }
}