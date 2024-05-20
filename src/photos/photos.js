import chai from './Chai.jpg';
import beetrootLatte from './Beatroot-Latte.jpg';
import chickenLollipop from './Chicken-Lollypop.jpg';
import batterMixClassic from './classicBatterMix.png';
import batterMixHerb from './Batter-Mix-Herb.jpg';
import batterMixHot from './Batter-Mix-Hot.jpg';
import batterMixThai from './thaiBatterMix.png';
import crunchyMasala from './Crunchy-Masala.png';
import hotChocolate from './Hot-Chocolate.jpg';
import regularSalted from './Regular-Salted.png';
import sourCream from './Sour-Cream&Onion.png';
import tangoTomato from './Tango-Tomato.png';
import turmericLatte from './Turmeric-Latte.jpg';
import laalMansMasala from './laalMansMasala.png';
const types = {
    snacks: 'snacks',
    batterMix: 'batterMix',
    drink:'drinks',
    blendedSpices: 'blendedSpices',
    powderSpices: 'powederSpices',
    veganMix: 'veganMix'
}

export const productJson = {
    "chai":{src:chai, name:'Chai Latte', id:'chai', type: types.drink},
    "chickenLollipop":{src:chickenLollipop, name:'Chicken Lollipop', id:'chickenLollipop',type: types.batterMix},
    "beetRoot":{src:beetrootLatte, name:'Beetroot Latte', id:'beetrootLatte',type: types.drink},
    "batterMixClassic": {src:batterMixClassic, name: 'Classic Batter Mix', id:'batterMixClassic', type: types.batterMix},
    "batterMixHerb":{src:batterMixHerb, name: 'Herb batter mix', id:'batterMixHerb', type: types.batterMix},
    "batterMixHot": {src:batterMixHot, name:'Hot batter mix', id:'batterMixHot', type: types.batterMix},
    "batterMixThai": {src:batterMixThai, name: 'Thai batter mix', id:'batterMixThai', type: types.batterMix},
    "crunchyMasala":{src:crunchyMasala, name: 'Crunchy masala mix', id:'crunchyMasala', type: types.snacks},
    "hotChocolate": {src:hotChocolate, name: 'Hot chocolate mix', id:'hotChocolate', type: types.drink},
    "regularSalted": {src:regularSalted, name: 'Regular salted chips', id:'regularSalted', type: types.snacks},
    "sourCream": {src:sourCream, name: 'Sour cream and onion chips', id:'sourCream',type: types.snacks},
    "tangoTomato": {src:tangoTomato, name: 'Tango tomato chips', id:'tangoTomato', type: types.snacks},
    "turmericLatte": {src:turmericLatte, name:'Turmeric Latte', id:'turmericLatte', type: types.drink},
    "laalMansMasala": {src: laalMansMasala, name:'Laal Maans Masala', id:'laalMansMasala', type: types.powderSpices},
}