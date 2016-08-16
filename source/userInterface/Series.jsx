import React from 'react';
import Reflex from '../utilities/Reflex.jsx';

import { } from './Series.scss';

//import ui from '../../data/ui.js';

class Series extends Reflex {

  constructor() {

    super();

    this.state = {
      page: 0
    };

  }

  render() {
    return ( <article class={ 'Series ' + ( this.state.page === this.props.images.length ? 'state-text' : 'state-image' ) } >
      { this.state.page !== 0 ? ( <div class="Series-Left" onClick={ () => this.updateState( { page: this.state.page - 1 } ) } ></div> ) : '' }
      { this.state.page < ( !!this.props.text ? this.props.images.length : this.props.images.length - 1 ) ? ( <div class="Series-Right" onClick={ () => this.updateState( { page: this.state.page + 1 } ) } ></div> ) : '' }
      { this.props.images.length > 0 ? this.props.images.map( ( imageUrl, index ) => ( <ImageTile key={ index } focus={ index < this.state.page ? 'left' : ( index === this.state.page ? 'focus' : 'right' ) } src={ imageUrl } /> ) ) : '' }
      { !!this.props.text ? ( <TextTile title={ this.props.title } focus={ this.state.page === this.props.images.length } content={ this.props.text } /> ) : '' }
    </article> );
  }

}

class ImageTile extends Reflex {

  constructor() {

    super();

    this.state = {};

  }

  render() {
    return ( <div class={ 'ImageTile state-' + this.props.focus }  >
      <img src={ this.props.src }/>
    </div> );
  }

}

class TextTile extends Reflex {

  constructor() {

    super();

    this.state = {};

  }

  render() {
    return ( <div class={ 'TextTile' + ( this.props.focus ? ' state-focus' : '' ) } >
      <div class="TextTile-Buffer" ></div>
      <div class="TextTile-Content" dangerouslySetInnerHTML={ ({ __html: !!this.props.content ? this.props.content : ''}) } ></div>
    </div> );
  }

}

export default Series;
