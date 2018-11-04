import { SAVE_COMMENT, GET_COMMENTS } from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    case GET_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name).slice(0, 50)
      return [...state, ...comments]
    default:
      return state
  }
}