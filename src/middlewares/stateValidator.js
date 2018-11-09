import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => next => action => {
  next(action)
  const isStateValid = tv4.validate(getState(), stateSchema)
  if (!isStateValid) console.error('invalid state')
}
