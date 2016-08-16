import React from 'react';
import Reflex from '../utilities/Reflex.jsx';

import { } from './Gallery.scss';

import ui from '../data/ui.js';

class Gallery extends Reflex {

  constructor() {

    super();

    this.state = {
      image: false,
      width: 0
    };

    this.matchState( ui );

  }

  render() {

    const
      width = window.innerWidth > 960 ? 3 : ( window.innerWidth > 560 ? 2 : 1 ),
      length = this.props.images.length,
      style = {
        height: ( ( Math.floor( window.innerWidth / 3 ) * 2 ) / 3 ) * ( Math.floor( length / 3 ) + 1 ) + 'px',
        overflowY: !this.state.image ? 'scroll' : 'hidden'
      };

    return ( <article class={ 'Gallery' } style={ style } >{
      this.props.images.map( ( imageURL, index ) => {

        const
          x = index % width,
          y = Math.floor( index / width ),
          style = {
            zIndex: this.state.image === index ? 100 : 0,
            transform: this.state.image !== index ?
              `translate3d(${x * ( 100 / width )}%,${y * ( 100 / width )}%,0) scale3d(${1 / width},${1 / width},1)` :
              `translate3d(0px,${( y === 0 ? y : ( y === Math.floor( length / 3 ) ? y - 2 :  y - 1 ) ) * ( 100 / width )}%,0) scale3d(1,1,1)`
          };

        return ( <img
          key={index}
          class="Gallery-Image"
          style={ style }
          src={ imageURL }
          onClick={ this.state.image !== index ? () => this.updateState( { image: index } ) : () => this.updateState( { image: false } ) } /> );

      } )
    }</article> );
  }

}

export default Gallery;
