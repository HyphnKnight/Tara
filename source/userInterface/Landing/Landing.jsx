import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './Landing.scss';

import ui from '../../data/ui.js';

class Landing extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Landing' + this.generateClasses( [ 'view' ] ) } >
      <div class="Landing-Line"></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Biography' } ) } ><div class="Landing-Line-Text">Tara</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Biography' } ) } ><div class="Landing-Line-Text">Maria</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Biography' } ) } ><div class="Landing-Line-Text">Gonzalez</div></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'JumpCut' } ) } ><div class="Landing-Line-Text">The Jump Cut</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Stills' } ) } ><div class="Landing-Line-Text">Stills</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Motion' } ) } ><div class="Landing-Line-Text">Motion</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Essays' } ) } ><div class="Landing-Line-Text">Essays</div></div>
      <div class="Landing-Line" onClick={ () => ui.setState( { view: 'Illustration' } ) } ><div class="Landing-Line-Text">Illustration</div></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
      <div class="Landing-Line"></div>
    </section> );
  }

}

export default Landing;
