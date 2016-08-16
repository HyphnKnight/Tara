import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './Stills.scss';

import ui from '../../data/ui.js';

//import Gallery from '../Gallery.jsx';

import Series from '../Series.jsx';

class Stills extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Stills' + this.generateClasses( [ 'view' ] ) } >
      <Series
        title="Speak For Yourself"
        images={ [
          require( '../../media/Stills/SpeakForYourself-1.jpg' ),
          require( '../../media/Stills/SpeakForYourself-2.jpg' ),
          require( '../../media/Stills/SpeakForYourself-3.jpg' ),
          require( '../../media/Stills/SpeakForYourself-4.jpg' ),
          require( '../../media/Stills/SpeakForYourself-5.jpg' ),
          require( '../../media/Stills/SpeakForYourself-6.jpg' ),
          require( '../../media/Stills/SpeakForYourself-7.jpg' ),
          require( '../../media/Stills/SpeakForYourself-8.jpg' ),
          require( '../../media/Stills/SpeakForYourself-9.jpg' ),
          require( '../../media/Stills/SpeakForYourself-10.jpg' ),
          require( '../../media/Stills/SpeakForYourself-11.jpg' )
        ] }
        />
      <Series
        title="We Want To Know What Happened"
        images={ [
          require( '../../media/Stills/WeWantToKnowWhatHappened-1.jpg' ),
          require( '../../media/Stills/WeWantToKnowWhatHappened-2.jpg' ),
          require( '../../media/Stills/WeWantToKnowWhatHappened-3.jpg' )
        ] }
        />
    </section> );
  }

}

export default Stills;
