import { createStore } from 'redux';

const defaultState = {
  view: 'Landing',
  width: window.innerWidth
};

function navigator( state = defaultState, action ) {

  return Object.assign( state, action.data );

}

let
  uiStore = createStore( navigator ),
  ui = {
    subscribe: func => uiStore.subscribe( func ),
    getState: () => uiStore.getState(),
    setState: data => uiStore.dispatch( { type: 'set', data } )
  };

export default ui
