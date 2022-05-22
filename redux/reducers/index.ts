import auth from './auth'
import category from './category'
import product from './product'
import basket from './basket'
import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

const rootReducers = combineReducers({
    auth: auth,
    category: category,
    product: product,
    basket: basket,
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    } else {
      return rootReducers(state, action);
    }
  };
  

export type RootState = ReturnType<typeof reducer>;