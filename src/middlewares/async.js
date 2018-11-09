export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) return next(action)
  action.payload.then(data => dispatch({ ...action, payload: data }))
}
