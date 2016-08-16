import React from 'react';
import immutable from 'immutable';
import isEqual from 'lodash.isequal';

const { Map, Set } = immutable;

class Reflex extends React.Component {

  constructor() {

    super();

    this.state = {};

    this._STATE_CACHE = [];

    this._STATE_UPDATE_TIMEOUT = false;

    this._SUBSCRIPTIONS = [];

  }

  matchState( dataStore, type ) {

    if ( !type || type === 'redux' ) {

      const updater = () => {

        const dataState = dataStore.getState();

        this.updateState( Map( dataState ).filter( ( value, key ) => this.state[ key ] !== undefined ).toObject() );

      };

      this._SUBSCRIPTIONS.push( dataStore.subscribe( updater ) );

      updater();

    } else if ( type === 'flux' ) {

      const updater = () => {

        const dataState = dataStore.getAll();

        this.updateState( Map( dataState ).filter( ( value, key ) => this.state[ key ] !== undefined ).toObject() );

      };

      dataStore.addChangeListener( updater );

      this._SUBSCRIPTIONS.push( () => dataStore.removeChangeListener( updater ) );

      updater();

    } else if ( type === 'reflux' ) {

      const updater = dataState => this.updateState( Map( dataState ).filter( ( value, key ) => this.state[ key ] !== undefined ).toObject() );

      this._SUBSCRIPTIONS.push( dataStore.listen( updater ) );

    }

  }

  unsubscribe( ) {

    this._SUBSCRIPTIONS.forEach( unsubscribe => unsubscribe() );

  }

  _STATE_CACHE_UPDATER( ) {

    this.setState( Object.assign.apply( null, this._STATE_CACHE ) );

    window.cancelAnimationFrame( this._STATE_UPDATE_TIMEOUT );

    this._STATE_UPDATE_TIMEOUT = false;

    this._STATE_CACHE = [];

  }

  componentWillUnmount() {

    window.cancelAnimationFrame( this._STATE_UPDATE_TIMEOUT );

    this._STATE_UPDATE_TIMEOUT = false;

    this._STATE_CACHE = [];

  }

  updateState( data ) {

    const
      newState = {},
      dataMap = Map( data );

    dataMap.forEach( ( value, key ) => {

      if ( this.state[ key ] !== undefined ) {

        if ( Object.getPrototypeOf( value ) !== Object.getPrototypeOf( this.state[ key ] ) ) {

          newState[ key ] = value;

        } else if ( value instanceof Object ) {

          if ( !!value.isSame && !value.isSame( this.state[ key ] ) ) {
            // is the same date in moment

            newState[ key ] = value;

          } else if ( !!value.equals && !value.equals( this.state[ key ] ) ) {
            // is the same Immutable in Object

            newState[ key ] = value;

          } else if ( Object.getPrototypeOf( value ) === Object.prototype && !Map( value ).equals( Map( this.state[ key ] ) ) ) {
            // if object

            newState[ key ] = value;

          } else if ( Object.getPrototypeOf( value ) === Array.prototype && !Set( value ).equals( Set( this.state[ key ] ) ) ) {

            newState[ key ] = value;

          } else if ( !isEqual( this.state[ key ], value ) ) {

            newState[ key ] = value;

          }

        } else if ( !isEqual( this.state[ key ], value ) ) {

          newState[ key ] = value;

        }

      } else {

        throw 'Reflex - Attempting to set value of unregistered key.'

      }

    } );

    if ( Object.keys( newState ).length !== 0 ) {

      this._STATE_CACHE.push( data );

      if ( this._STATE_UPDATE_TIMEOUT ) {

        window.cancelAnimationFrame( this._STATE_UPDATE_TIMEOUT );

      }

      this._STATE_UPDATE_TIMEOUT = window.requestAnimationFrame( () => this._STATE_CACHE_UPDATER() );

    }

  }

  generateClasses( propertyNames ) {

    let cssClasses = '';

    propertyNames.forEach( name => {

      if ( this.state[ name ] !== undefined ) {

        if ( typeof this.state[ name ] === 'boolean' ) {

          if ( this.state[ name ] ) {
            cssClasses += ` state-${name}`;
          }

        } else {

          cssClasses += ` state-${name}-${this.state[ name ]}`;

        }

      } else {

        throw 'Reflex - Attempting to create class from unregistered key';

      }

    } );

    return cssClasses;

  }

}

export default Reflex;
