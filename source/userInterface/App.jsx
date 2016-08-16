import React from 'react';
import Reflex from '../utilities/Reflex.jsx';

import { } from './App.scss';

import ui from '../data/ui.js';

import Landing      from './Landing/Landing.jsx';
import JumpCut      from './JumpCut/JumpCut.jsx';
import Stills       from './Stills/Stills.jsx';
import Illustration from './Illustration/Illustration.jsx';
import Essays from './Essays/Essays.jsx';
import Motion from './Motion/Motion.jsx';
import Biography from './Biography/Biography.jsx';

class App extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Application' + this.generateClasses( [ 'view' ] ) } >
      <div class="Application-Logo" onClick={ () => ui.setState( { view: 'Landing' } ) } >Tara</div>
      <Landing />
      <JumpCut />
      <Stills />
      <Illustration />
      <Essays />
      <Motion />
      <Biography />
    </section> );
  }

}

export default App;
