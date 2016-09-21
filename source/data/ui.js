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
  },
  lastView = uiStore.getState().view;

window.setTimeout( function() {
  let application = document.querySelector( 'section' );

  ui.subscribe( () => {

    const { view } = ui.getState();

    if ( lastView !== view ) {
      lastView = view;
      if ( lastView !== 'Landing' ) {
        Array.from( application.querySelectorAll( 'section' ) ).forEach( el => {
          el.scrollTop = 0;
        } );
      }
    }

  } )
}, 100 );

export default ui
