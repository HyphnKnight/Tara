import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './Illustration.scss';

import ui from '../../data/ui.js';

import Series from '../Series.jsx';

class Illustration extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Illustration' + this.generateClasses( [ 'view' ] ) } >
      <Series
        title="Attached"
        images={ [
          require( '../../media/Illustration/Attached-1.jpg' ),
          require( '../../media/Illustration/Attached-2.jpg' ),
          require( '../../media/Illustration/Attached-3.jpg' ),
          require( '../../media/Illustration/Attached-4.jpg' ),
          require( '../../media/Illustration/Attached-5.jpg' ),
          require( '../../media/Illustration/Attached-6.jpg' ),
          require( '../../media/Illustration/Attached-7.jpg' ),
          require( '../../media/Illustration/Attached-8.jpg' ),
          require( '../../media/Illustration/Attached-9.jpg' )
        ] }
        />
      <Series
        title="Abstract"
        images={ [
          require( '../../media/Illustration/Abstract-1.jpg' ),
          require( '../../media/Illustration/Abstract-2.jpg' ),
          require( '../../media/Illustration/Abstract-3.jpg' )
        ] }
        />
      <Series
        title="Painting"
        images={ [
          require( '../../media/Illustration/Painting-1.jpg' ),
          require( '../../media/Illustration/Painting-2.jpg' ),
          require( '../../media/Illustration/Painting-3.jpg' ),
          require( '../../media/Illustration/Painting-4.jpg' ),
          require( '../../media/Illustration/Painting-5.jpg' ),
          require( '../../media/Illustration/Painting-6.jpg' ),
          require( '../../media/Illustration/Painting-7.jpg' ),
          require( '../../media/Illustration/Painting-8.jpg' ),
          require( '../../media/Illustration/Painting-9.jpg' )
        ] }
        />
    </section> );
  }

}

export default Illustration;
