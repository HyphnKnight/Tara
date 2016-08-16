import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './Motion.scss';

import ui from '../../data/ui.js';

class Motion extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Motion' + this.generateClasses( [ 'view' ] ) } >
      <div class="Motion-TBD" >Coming Soon</div>
    </section> );
  }

}

export default Motion;
