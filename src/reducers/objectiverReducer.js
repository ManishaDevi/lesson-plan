import { OBJECTIVE } from '../actions/types';

const initialState = { result:[] };

export default function objectiveReducer(state = initialState, action) {
  switch (action.type) {
    case OBJECTIVE:
      let newResult = state.result
      let index = newResult.findIndex(data => data.title === action.result.title)
      if (index === -1) {
        newResult.push(action.result)
      } else {
        newResult[index] = action.result
      }
      return {result:newResult,...state};
    default:
      return state;
  }
}