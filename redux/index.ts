import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import  { reducer } from "./reducers";
import { RootState } from './reducers';



const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
