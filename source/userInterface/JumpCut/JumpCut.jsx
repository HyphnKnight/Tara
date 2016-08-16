import React from 'react';
import Reflex from '../../utilities/Reflex.jsx';

import { } from './JumpCut.scss';

import ui from '../../data/ui.js';

import Series from '../Series.jsx';

class JumpCut extends Reflex {

  constructor() {

    super();

    this.state = {
      view: 'Landing'
    };

    this.matchState( ui );

  }

  render() {
    return ( <section class={ 'JumpCut' + this.generateClasses( [ 'view' ] ) } >
      <div class="JumpCut-title" >The JumpCut</div>
      <div class="JumpCut-label" >verb</div>
      <div class="JumpCut-Definition" >1.    (in filmmaking or television) make an abrupt transition from one scene to another.</div>
      <div class="JumpCut-Summary" ><i>The Jump Cut</i> is a series of photographs and stories told as film stills, created out of my desire to tell stories cinematically on a regular basis. Each story is told through the POV of one of the characters, whether they are on or off screen. Each series represents a small part of a whole story, and either a jump cut or series of jump cuts, leaving the beginning, middle and end of the story up to the audience’s interpretation. </div>
      <Series
        title="Nicole Nicole Nicole"
        images={ [
          require( '../../media/JumpCut/NicoleNicoleNicole-1.jpg' ),
          require( '../../media/JumpCut/NicoleNicoleNicole-2.jpg' ),
          require( '../../media/JumpCut/NicoleNicoleNicole-3.jpg' ) ] }
        text='I don’t know what about it made us feel good. The sun or the sand or the notes. Maybe it was the fact that he was gone for just a minute. Standing in between pillars, we were hoping for more than just one one one. I hear my voice echo as I tell my sister how long it has been. Things became complicated seven years ago, when a local decided he would pursue my sister endlessly, despite being eight years older than her and perpetually unemployed. After the second summer we thought he would have to give up. But every year we’d come back and he’d be there, running into us in stores and on street corners. He’d even occasionally join us at lunch. There was no chair for him but it didn’t matter, he was hundreds of feet above us, hanging from his window just a block away. He’d wave, calling to her, as if none of us existed. Nicole, Nicole, Nicole. My Dad felt bad for him, my mom tried to entertain his conspiracy theories and my Abuela attempted to scare him off by saying my sister was married to her education. We found him to be perfectly nice but too persistent, the type of person you can’t get to stop talking once they start. And so, today, we think we see him on the beach boardwalk and naturally find ourselves below the pier, seconds later and out of sight. I’m reading notes and lists and names etched onto the pillars when Nicole tells me she sees him walking along the water. “Don’t look!” she leans back to turn her head discretely before falling down laughing. We had been avoiding a stranger. And with sandy toes we walk up the steps to the boardwalk, only to find him crossing the street. This time we are positive. With our sandals still in our hands we pick up our pace. Barefeet on hot stones, we feel invisible. But he sees our fingers wrapped in flip flops. Nicole drops one sandal as she moves, hearing her name echoed in the background. Nicole Nicole Nicole.'
        />
      <Series
        title="Rafe's Shoes"
        images={ [
          require( '../../media/JumpCut/RafesShoes-1.jpg' ) ] }
        text='My boyfriend Rafe hates shoes. He wouldn’t describe himself as a shoe-hater but he is one. One look at his feet and you’d see why. He doesn’t buy shoes but receives them, usually a nice pair from me or his mom. He hates them so much he wears them day in and day out, letting the soles suffocate as he rips at laces that eventually split into two after being torn in all directions. He hates them so much he opts to walk on dirt instead of the sidewalk, in mud instead of on grass. He does all sorts of things in nice shoes that you aren’t supposed to do in nice shoes. Soccer, bocce ball, frisbee. Walking in snow and in rain. By the end of the year they look as though he’s had them all his life. They look like they’ve been through it all. They have been. Eventually there are holes and toes and dirt on skin. That is when he decides he loves them and that he can’t let them go. He tries to scrub off months of dirt, to tape over too-big-holes, to ignore the pieces of sole falling off with every step. He wants to keep them but they are already gone. I throw them away when he isn’t looking and replace them with a new different pair that he will hate until he loves.'
        />
      <Series
        title="It never rains in Cadiz but last saturday it did."
        images={ [
          require( '../../media/JumpCut/ItNeverRainsInCadizButLastSaturdayItDid-1.jpg' ) ] }
        text='It never rains in Cadiz but last Saturday it did. By night it stopped, yet looking out the bus window I can still see people inside, illuminated in different colors. Everyone is scared of rain here and no one has an umbrella. We are on the number 5 bus which we never take when suddenly my sister urges us to get off. Because she recognizes a train station. Because she thinks we are close to home. We get off just to keep walking around a part of town we have never been in before. And there is no one walking the streets with us, which is a first.<br><br>She tells me we should get on another bus because she was wrong and we are lost; she leaves out the last part but it’s true. I tell her that the buses aren’t running when she points to a couple at a bus stop. We are footsteps away when we realize they aren’t sitting but standing and they aren’t waiting but arguing. Loudly. The bus stop is small and their argument is taking place right next to the sign that indicates the number bus and the map, everything we need. Feeling too awkward to do anything, we stand directly next to the bus stop. Just standing. A large advertisement separating us. It’s hard to hear exactly what they are arguing about in their thick andalucian accents but we make out one sentence: Why then did you lie to my mom and say you didn’t have a facebook?  They continue to argue and my sister taps me on the shoulder, “Shouldn’t we just go check the map?” But I am paralyzed by the prospect of embarrassment. And so we stand, feet away from them, separated by a shampoo ad.'
        />
      <Series
        title="Hot Tub"
        images={ [
          require( '../../media/JumpCut/Hottub-1.jpg' ),
          require( '../../media/JumpCut/Hottub-2.jpg' ),
          require( '../../media/JumpCut/Hottub-3.jpg' ) ] }
        text='I was always the little girl in all black in the yellow house. I wore all black because my parents are not relatively colorful people, which makes the yellow house part strange. But I guess some things in life just happen. And that yellow house happened. Maybe that’s why my parents bought me clothing in all muted tones, to balance out the house that just happened. They never mention it so I’ll never be sure but it makes sense, that’s all I’m really saying.<br><br>Our neighbors who lived across the street seemed like they would live in a yellow house but theirs was white. Also the door to their backyard was broken. It wasn’t my fault that I couldn’t help but notice. Their backyard is always spilling with people and I usually fall asleep to the door opening and closing. Recently it’s been quiet, not because there have been less people but because of that broken door I just told you about.<br><br>Nina always reminded me that I wasn’t invited over. She didn’t even have to say it, it’s just the way she looked at me when she held the door open for other people. We don’t really have a backyard. It’s more like a collection of cement. Or a fenced in square of sidewalk. I sit staring at their backyard fence all the time, and I don’t think Nina or the rest of them really liked that. But I couldn’t help it, there wasn’t much else to do. It wasn’t like I could see past it anyway.<br><br>So when they started hopping the fence, I decided I would. I couldn’t sleep, ironically because there wasn’t the noise of their door, so I hopped over their silver fence and stepped onto their stone. They could look outside the window at any moment and see a guest they never wanted admiring their colorful plants and the neon lights of their hot tub. But they didn’t. And I thought about what everyone did here, what they said and where they laughed. My eyes fixated on the lights of the hot tub. As I get into the water I feel the lights changing on my skin, wondering if anyone would recognize me in color. Wet drops follow me everywhere as I step out and walk back home. On their stone and over their fence and past their house. I paint my nails blue before falling asleep, thinking about color, my yellow house and their neon lights.'
        />
      <Series
        title="Shower"
        images={ [
          require( '../../media/JumpCut/NicoleShower-1.jpg' ),
          require( '../../media/JumpCut/NicoleShower-2.jpg' ) ] }
        text='He’s the one who said:<br><br>They say that if you don’t think about it in the shower you don’t care about it that much. He was trying to discourage me or provoke me, I could tell. But I don’t think about anything in the shower. And I didn’t care before but now that scares me, because they say it should. Not that I even know who they is. Yet when someone says something like that you can’t just not think about it, even when you don’t think about anything. You know? And ever since I heard that, it’s the only thing I can think about in the shower. Thinking about not thinking. Feeling my toes on the bathmat makes me nervous because this empty space is filled with nothing and I’m fixating on shampoo and conditioner. I hear his voice come join me in this brown tiled space, dripping. So? You just don’t think of anything? I mouth no to myself, alone. When I step out of the shower I pull my blue towel over my shoulders, only to feel warm and hollow, thinking of reasons why he is wrong. Why they are wrong.<br><br>I’m the one who said:<br><br>Maybe they are mistaken. '
        />
      <Series
        title="Beba Pool"
        images={ [
          require( '../../media/JumpCut/BebaPool-1.jpg' ) ] }
        text='I cry every time he calls, without fail. It’s been so long but it happens immediately...sometimes I wait to pick up the phone so I can feel my heart before it falls. Because it hurts. You know that. I try to express this to my grandmother as she moves her feet in my aunt’s cold pool. She shrugs and continues kicking her feet as I move out of her view, storming off the porch.<br><br>When my grandmother’s best friend Xavier left for Ecuador, he said he would be back soon. No one told me that he sold his taxi cab and was moving there. No one told me being back soon wouldn’t be for many years if any at all. I was in denial for a while about this, sometimes I still am. I try not to count the years that it’s been. And it’s still weird to think of him in any place other than in the chair at my grandmother’s table upstairs in my house, waiting for me to come back home from middle school. Waiting to play soccer at the park.<br><br>He calls on every holiday. He called today, July 4th. I waited a couple of seconds before picking up. He calls from a phone we can’t call back, so when I waited too long and missed the call, I missed it completely. We won’t be able to talk until September 14th, my sister’s birthday. I feel the feeling I was trying to avoid in the pit of my stomach right before my grandmother starts to yell after I tell her who called. She soaks her feet in the pool as she tells me that I don’t care and that eight years is all it takes me to forget. And suddenly I’m flustered because I didn’t want to count the years.  '
        />
    </section> );
  }

}

export default JumpCut;
