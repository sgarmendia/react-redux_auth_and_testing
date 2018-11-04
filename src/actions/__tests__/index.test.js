import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('save comment action', () => {
  it('has the correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })
  it('has the correct payload', () => {
    const action = saveComment('this is a comment')
    expect(action.payload).toEqual('this is a comment')
  })
})