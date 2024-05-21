import cacaoHerbalLatte from './cacaoHerbalLatte.png';
import beetrootLatte from './beetrootLatte.png';
import chickenLollypopMix from './chickenLollypopMix.png';
import batterMixClassic from './classicBatterMix.png';
import batterMixHerb from './herbBatterMix.png';
import batterMixHotSpicy from './hotSpicyBatterMix.png';
import batterMixThaiGreen from './thaiGreenBatterMix.png';
import crunchyMasala from './Crunchy-Masala.png';
import turmericMintHotChocolate from './turmericMintHotChocolate.png';
import regularSalted from './Regular-Salted.png';
import sourCream from './Sour-Cream&Onion.png';
import tangoTomato from './Tango-Tomato.png';
import turmericLatte from './turmericLatte.png';
import laalMansMasala from './laalMansMasala.png';
import lucknowiKormaMasala from './lucknowiKormaMasala.png';
import lucknowiKebabMasala from './lucknowiKebabMasala.png';
import dhabiStyleKeemaMasala from './dhabiStyleKeemaMasala.png';
import hyderabadiHaleemMasala from './hyderabadiHaleemMasala.png';
import bhuniKalejiMasala from './bhuniKalejiMasala.png';
import goaFishCurryMasala from './goaFishCurryMasala.png';
import butterChickenMasala from './butterChickenMasala.png';
import afghaniChickenAngaraMasala from './afghaniChickenAngaraMasala.png';
import coconutVaruthaChickenCurryMasala from './coconutVaruthaChickenCurryMasala.png';
import achariGoshtMasala from './achariGoshtMasala.png';
import hyderabadiChickenBiryaniMasala from './hyderabadiChickenBiryaniMasala.png';
import tandooriMasala from './tandooriMasala.png';
import keralaStylePrawnsCurryMasala from './keralaStylePrawnsCurryMasala.png';
import kashmiriPayaMasala from './kashmiriPayaMasala.png';
import shahiNihariMasala from './shahiNihariMasala.png';
import mumbaiPavBhajiMasala from './mumbaiPavBhajiMasala.png';
import mughlaiPaneerMasala from './mughlaiPaneerMasala.png';
import kashmiriDumAlooMasala from './kashmiriDumAlooMasala.png';
import tadkaMasala from './tadkaMasala.png';
import allSpicesMasala from './allSpicesMasala.png';
import periPeriChickenMasala from './periPeriChickenMasala.png';
import whiteChickenTikka from './whiteChickenTikka.png';
import goldenChickenTikka from './goldenChickenTikka.png';
import veganOmelette from './veganOmelette.png';
import veganBombayToastMix from './veganBombayToastMix.png';
import veganFrenchToastMix from './veganFrenchToastMix.png';
import veganOatsOmelette from './veganOatsOmelette.png';
import veganEgglessOmelette from './veganEgglessOmelette.png';
import upmaMasala from './upmaMasala.png';
import veganEggBhurji from './veganEggBhurji.png';
import veganSpanishPotatoOmelette from './veganSpanishPotatoOmelette.png';
import veganScrambledEgg from './veganScrambledEgg.png';
import veganMasalaOmelette from './veganMasalaOmelette.png';
import veganGreenOmelette from './veganGreenOmelette.png';
import pohaMasala from './pohaMasala.png';
import corianderPowder from './corianderPowder.png';
import cuminPowder from './cuminPowder.png';
import garamMasalaPowder from './garamMasalaPowder.png';
import redChilliPowder from './redChilliPowder.png';
import turmericPowder from './turmericPowder.png';
import aftermealJaggeryGingerBites from './aftermealJaggeryGingerBites.png';
import veganEnergyBar from './veganEnergyBar.png';
import aftermealPaanBites from './aftermealPaanBites.png';
const types = {
    snacks: 'snacks',
    batterMix: 'batterMix',
    drink:'drinks',
    blendedSpices: 'blendedSpices',
    powderSpices: 'powederSpices',
    veganMix: 'veganMix'
}

export const productJson = {
    "cacaoHerbalLatte":{src:cacaoHerbalLatte, name:'Cacao Herbal Latte(Chai)', id:'cacaoHerbalLatte', type: types.drink},
    "chickenLollypopMix":{src:chickenLollypopMix, name:'Chicken Lollypop Mix', id:'chickenLollypopMix',type: types.batterMix},
    "beetrootLatte":{src:beetrootLatte, name:'Beetroot Latte', id:'beetrootLatte',type: types.drink},
    "batterMixClassic": {src:batterMixClassic, name: 'Classic Batter Mix', id:'batterMixClassic', type: types.batterMix},
    "batterMixHerb":{src:batterMixHerb, name: 'Herb batter mix', id:'batterMixHerb', type: types.batterMix},
    "batterMixHotSpicy": {src:batterMixHotSpicy, name:'Hot & Spicy Batter Mix', id:'batterMixHotSpicy', type: types.batterMix},
    "batterMixThaiGreen": {src:batterMixThaiGreen, name: 'Thai Green Batter Mix', id:'batterMixThaiGreen', type: types.batterMix},
    "crunchyMasala":{src:crunchyMasala, name: 'Crunchy masala mix', id:'crunchyMasala', type: types.snacks},
    "turmericMintHotChocolate": {src:turmericMintHotChocolate, name: 'Turmeric Mint Hot Chocolate', id:'turmericMintHotChocolate', type: types.drink},
    "regularSalted": {src:regularSalted, name: 'Regular salted chips', id:'regularSalted', type: types.snacks},
    "sourCream": {src:sourCream, name: 'Sour cream and onion chips', id:'sourCream',type: types.snacks},
    "tangoTomato": {src:tangoTomato, name: 'Tango tomato chips', id:'tangoTomato', type: types.snacks},
    "turmericLatte": {src:turmericLatte, name:'Turmeric Latte', id:'turmericLatte', type: types.drink},
    "laalMansMasala": {src: laalMansMasala, name:'Laal Maans Masala', id:'laalMansMasala', type: types.powderSpices},
    "lucknowiKormaMasala": {src: lucknowiKormaMasala, name:'Lucknowi Korma Masala', id:'lucknowiKormaMasala', type: types.powderSpices},
    "lucknowiKebabMasala": {src: lucknowiKebabMasala, name:'Lucknowi Kebab Masala', id:'lucknowiKebabMasala', type: types.powderSpices},
    "dhabiStyleKeemaMasala": {src: dhabiStyleKeemaMasala, name:'Dhabi Style Keema Masala', id:'dhabiStyleKeemaMasala', type: types.powderSpices},
    "hyderabadiHaleemMasala": {src: hyderabadiHaleemMasala, name:'Hyderabadi Haleem Masala', id:'hyderabadiHaleemMasala', type: types.powderSpices},
    "bhuniKalejiMasala": {src: bhuniKalejiMasala, name:'Bhuni Kaleji Masala', id:'bhuniKalejiMasala', type: types.powderSpices},
    "goaFishCurryMasala": {src: goaFishCurryMasala, name:'Goa Fish Curry Masala', id:'goaFishCurryMasala', type: types.powderSpices},
    "butterChickenMasala": {src: butterChickenMasala, name:'Butter Chicken Masala', id:'butterChickenMasala', type: types.powderSpices},
    "afghaniChickenAngaraMasala": {src: afghaniChickenAngaraMasala, name:'Afghani Chicken Angara Masala', id:'afghaniChickenAngaraMasala', type: types.powderSpices},
    "coconutVaruthaChickenCurryMasala": {src: coconutVaruthaChickenCurryMasala, name:'Coconut Varutha Chicken Curry Masala', id:'coconutVaruthaChickenCurryMasala', type: types.powderSpices},
    "achariGoshtMasala": {src: achariGoshtMasala, name:'Achari Gosht Masala', id:'achariGoshtMasala', type: types.powderSpices},
    "hyderabadiChickenBiryaniMasala": {src: hyderabadiChickenBiryaniMasala, name:'Hyderabadi Chicken Biryani Masala', id:'hyderabadiChickenBiryaniMasala', type: types.powderSpices},
    "tandooriMasala": {src: tandooriMasala, name:'Tandoori Masala', id:'tandooriMasala', type: types.powderSpices},
    "keralaStylePrawnsCurryMasala": {src: keralaStylePrawnsCurryMasala, name:'Kerala Style Prawns Curry Masala', id:'keralaStylePrawnsCurryMasala', type: types.powderSpices},
    "kashmiriPayaMasala": {src: kashmiriPayaMasala, name:'Kashmiri Paya Masala', id:'kashmiriPayaMasala', type: types.powderSpices},
    "shahiNihariMasala": {src: shahiNihariMasala, name:'Shahi Nihari Masala', id:'shahiNihariMasala', type: types.powderSpices},
    "mumbaiPavBhajiMasala": {src: mumbaiPavBhajiMasala, name:'Mumbai Pav Bhaji Masala', id:'mumbaiPavBhajiMasala', type: types.powderSpices},
    "mughlaiPaneerMasala": {src: mughlaiPaneerMasala, name:'Mughlai Paneer Masala', id:'mughlaiPaneerMasala', type: types.powderSpices},
    "kashmiriDumAlooMasala": {src: kashmiriDumAlooMasala, name:'Kashmiri Dum Aloo Masala', id:'kashmiriDumAlooMasala', type: types.powderSpices},
    "tadkaMasala": {src: tadkaMasala, name:'Tadka Masala', id:'tadkaMasala', type: types.powderSpices},
    "allSpicesMasala": {src: allSpicesMasala, name:'All Spices Masala', id:'allSpicesMasala', type: types.powderSpices},
    "periPeriChickenMasala": {src: periPeriChickenMasala, name:'Peri Peri Chicken Masala', id:'periPeriChickenMasala', type: types.powderSpices},
    "whiteChickenTikka": {src: whiteChickenTikka, name:'White Chicken Tikka', id:'whiteChickenTikka', type: types.blendedSpices},
    "goldenChickenTikka": {src: goldenChickenTikka, name:'Golden Chicken Tikka', id:'goldenChickenTikka', type: types.blendedSpices},
    "veganOmelette": {src: veganOmelette, name:'Vegan Omelette', id:'veganOmelette', type: types.veganMix},
    "veganBombayToastMix": {src: veganBombayToastMix, name:'Vegan Bombay Toast Mix', id:'veganBombayToastMix', type: types.veganMix},
    "veganOatsOmelette": {src: veganOatsOmelette, name:'Vegan Oats Omelette', id:'veganOatsOmelette', type: types.veganMix},
    "veganFrenchToastMix": {src: veganFrenchToastMix, name:'Vegan French Toast Mix', id:'veganFrenchToastMix', type: types.veganMix},
    "veganEgglessOmelette": {src: veganEgglessOmelette, name:'Vegan Eggless Omelette', id:'veganEgglessOmelette', type: types.veganMix},
    "upmaMasala": {src: upmaMasala, name:'Masala Upma', id:'upmaMasala', type: types.powderSpices},
    "veganEggBhurji": {src: veganEggBhurji, name:'Vegan Egg Bhurji', id:'veganEggBhurji', type: types.veganMix},
    "veganSpanishPotatoOmelette": {src: veganSpanishPotatoOmelette, name:'Vegan Spanish Potato Omelette', id:'veganSpanishPotatoOmelette', type: types.veganMix},
    "veganScrambledEgg": {src: veganScrambledEgg, name:'Vegan Scrambled Egg', id:'veganScrambledEgg', type: types.veganMix},
    "veganMasalaOmelette": {src: veganMasalaOmelette, name:'Vegan Masala Omelette', id:'veganMasalaOmelette', type: types.veganMix},
    "veganGreenOmelette": {src: veganGreenOmelette, name:'Vegan Green Omelette', id:'veganGreenOmelette', type: types.veganMix},
    "pohaMasala": {src: pohaMasala, name:'Masala Poha', id:'pohaMasala', type: types.powderSpices},
    "corianderPowder": {src: corianderPowder, name:'Coriander Powder', id:'corianderPowder', type: types.powderSpices},
    "cuminPowder": {src: cuminPowder, name:'Cumin Powder', id:'cuminPowder', type: types.powderSpices},
    "garamMasalaPowder": {src: garamMasalaPowder, name:'Garam Masala Powder', id:'garamMasalaPowder', type: types.powderSpices},
    "redChilliPowder": {src: redChilliPowder, name:'Red Chilli Powder', id:'redChilliPowder', type: types.powderSpices},
    "turmericPowder": {src: turmericPowder, name:'Turmeric Powder', id:'turmericPowder', type: types.powderSpices},
    "aftermealJaggeryGingerBites": {src:aftermealJaggeryGingerBites, name: 'Aftermeal Jaggery Ginger Bites', id:'aftermealJaggeryGingerBites', type: types.snacks},
    "veganEnergyBar": {src:veganEnergyBar, name: 'Vegan Energy Bar', id:'veganEnergyBar', type: types.snacks},
    "aftermealPaanBites": {src:aftermealPaanBites, name: 'Aftermeal Paan Bites', id:'aftermealPaanBites', type: types.snacks},
}