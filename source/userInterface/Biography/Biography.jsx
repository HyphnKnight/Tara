import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './Biography.scss';

import ui from '../../data/ui.js';

class Biography extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'Biography' + this.generateClasses( [ 'view' ] ) } >
      <div class="Biography-Summary" >I love words. I love photos. I love stories and stories and stories. My name is Tara Maria Gonzalez and I am a 2014 creative writing and fine arts graduate from The University Of Pennsylvania. I am a writer and photographer based in NYC interested in writing, editorial and filmmaking.</div>
      <div class="Biography-Experiance" >
        <div class="Biography-Experiance-Title" >Work Experience</div>
        <ul class="Biography-Jobs" >
          <li class="Biography-Job state-subtitle">TV</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt5516152/?ref_=fn_al_tt_1" target="_blank">Drew (CBS TV Pilot)</a> - Art Department PA</li>
          <li class="Biography-Job state-subtitle">Film</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt5658242/?ref_=nv_sr_1" target="_blank">Humor Me</a> - Art Department PA</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt3745058/?ref_=nm_flmg_pdsg_4" target="_blank">Weightless</a> - Art Department PA</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt3268340/?ref_=nm_flmg_ardp_2" target="_blank">Untitled Colin Warner Project</a> - Art Department PA</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt3687316/?ref_=fn_al_tt_1" target="_blank">Youth In Oregon</a> - Art Department PA</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt4019560/" target="_blank">Exposed</a> - Art Department Intern</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt4144190/?ref_=nv_sr_1" target="_blank">Wiener-Dog</a> - On Set PA</li>
          <li class="Biography-Job state-subtitle">Commercial</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt4144190/?ref_=nv_sr_1" target="_blank">People’s TV (Facebook Commercial)</a> - Set Decorator</li>
          <li class="Biography-Job"><a href="http://www.ucbcomedy.com/" target="_blank">UCB (Comedy Skit)</a> - Set PA</li>
          <li class="Biography-Job state-subtitle">Short Film</li>
          <li class="Biography-Job"><a href="http://www.funnyordie.com/videos/7a2520219a/de-niro-tricks-zac-into-making-him-a-sandwich?_cc=__d___&_ccid=89e72738-b85e-4e84-bd89-e4f531fa72c9" target="_blank">Robert De Niro & Zac Efron: Funny Or Die (Three Comedy Skits)</a> - Art PA</li>
          <li class="Biography-Job"><a href="http://www.unitedbroadcastingfilm.com/" target="_blank">Untitled Broadcasting Film Company: “Dead Water” (Short Film)</a> - Set PA</li>
          <li class="Biography-Job state-subtitle">Documentary</li>
          <li class="Biography-Job"><a href="http://www.imdb.com/title/tt2124803/" target="_blank">Public Square Films</a> - Researcher</li>
          <li class="Biography-Job"><a href="http://panglossfilms.com/" target="_blank">Pangloss Films</a> - Producer’s Assistant</li>
          <li class="Biography-Job state-subtitle">Copywriting</li>
          <li class="Biography-Job"><a>Bloomingdale’s</a> - Copywriting Intern</li>
        </ul>
      </div>

      <img class="Biography-Eyes" src={ require( '../../media/Eyes.gif' ) } />
    </section> );
  }

}

export default Biography;
