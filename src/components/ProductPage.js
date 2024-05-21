import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, CssBaseline, FormGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Carousel from 'react-grid-carousel'
import { productJson } from '../photos/photos';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import getLPTheme from '../getLPTheme';
import AppAppBar from './AppAppBar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';

const productList = [productJson.batterMixClassic,productJson.batterMixHerb,productJson.batterMixHotSpicy,productJson.batterMixThaiGreen, productJson.beetrootLatte,
productJson.cacaoHerbalLatte,productJson.chickenLollypopMix,productJson.crunchyMasala,productJson.turmericMintHotChocolate,productJson.regularSalted,
productJson.sourCream, productJson.tangoTomato,productJson.turmericLatte, productJson.laalMansMasala, productJson.lucknowiKormaMasala, productJson.lucknowiKebabMasala, 
productJson.dhabiStyleKeemaMasala, productJson.hyderabadiHaleemMasala, productJson.bhuniKalejiMasala, productJson.goaFishCurryMasala, productJson.butterChickenMasala, 
productJson.afghaniChickenAngaraMasala, productJson.coconutVaruthaChickenCurryMasala, productJson.achariGoshtMasala, productJson.hyderabadiChickenBiryaniMasala, 
productJson.tandooriMasala, productJson.keralaStylePrawnsCurryMasala, productJson.kashmiriPayaMasala, productJson.shahiNihariMasala, productJson.mumbaiPavBhajiMasala,
productJson.mughlaiPaneerMasala, productJson.kashmiriDumAlooMasala, productJson.tadkaMasala, productJson.allSpicesMasala, productJson.periPeriChickenMasala, 
productJson.whiteChickenTikka, productJson.goldenChickenTikka, productJson.veganOmelette, productJson.veganBombayToastMix, productJson.veganOatsOmelette, 
productJson.veganFrenchToastMix, productJson.veganEgglessOmelette, productJson.upmaMasala, productJson.veganEggBhurji, productJson.veganSpanishPotatoOmelette,
productJson.veganScrambledEgg, productJson.veganMasalaOmelette, productJson.veganGreenOmelette, productJson.pohaMasala, productJson.corianderPowder, productJson.cuminPowder,
productJson.garamMasalaPowder, productJson.redChilliPowder, productJson.turmericPowder, productJson.aftermealJaggeryGingerBites, productJson.veganEnergyBar,
productJson.aftermealPaanBites]

export default function ProductPage() {
  const [mode, setMode] = React.useState('light');
  const [showCA, setCountry] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const [filter, setFilter] = React.useState('all');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  let navigate = useNavigate();

  const handleClick = (productId) => {
    navigate({
      pathname:'/selectedProduct/',
      search:productId
    });
  };
  console.log('filter ', filter)
  return (
    <ThemeProvider theme={LPtheme} >
      <CssBaseline />

      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Divider />
    <Container
      id="testimonials"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        minWidth:"100%",
        marginLeft:'auto',
        marginRight:'auto',
        height:"100%",
        backgroundColor:'#fbfeff',
        marginTop:'7em',
        marginBottom:'10em',
        overflowX:'hidden',
        backgroundColor:'#e7c68a'
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Products
        </Typography>
        <ButtonGroup>
          <Button variant='text' sx={{color:(showCA) ? 'white': 'black', backgroundColor:(showCA) ? '#522f29': 'lightgreen'}} onClick={() => {setCountry(true)}}>Show Canadian Products</Button>
          <Button variant='text' sx={{color:(!showCA) ? 'white': 'black', backgroundColor:(!showCA) ? '#522f29': 'lightgreen'}} onClick={() => {setCountry(false)}}>Show Indian Products</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{display:'flex', flexDirection:'row'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly-label"
          value={filter}
          label={filter}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'batterMix'}>Batter Mix</MenuItem>
          <MenuItem value={'veganMix'}>Vegan Mixes</MenuItem>
          <MenuItem value={'snacks'}>Snacks</MenuItem>
          <MenuItem value={'drinks'}>Drinks</MenuItem>

        </Select>
      </FormControl>
      </Box>
      {showCA === true ? <div containerStyle={{width:'100%'}}>
      <div>
      <Carousel hideArrow cols={3} rows={2} gap={10} loop containerStyle={{ width:'1000px',marginLeft:'auto',marginRight:'auto' }} showDots>
      {productList.map((product) => {
        if (product.type === filter || filter === 'all')
        return(
          <Carousel.Item containerStyle={{width:'10px'}}>
              <Card
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: "20em",
                  height: "21em",
              }}
              >
                  <CardContent>
                      <CardMedia component="picture" height="20" sx={{paddingTop:'1em'}}>
                      <Box sx={{borderStyle:'solid',borderColor:'#e5ebf5', backgroundColor:'white',height:'11em',width:'11em', marginLeft:'auto', marginRight:'auto'}}>
                            <img
                            src={product.src}
                            alt="logo"
                            height={"150em"}
                            width={"130em"}
                        />
                      </Box>
                      </CardMedia>
                      <button onClick={() => {handleClick(product.id)}}>View More</button>
                  </CardContent>
              </Card>
          </Carousel.Item>)
        })}
    </Carousel>
    </div>
    </div>:<div></div>}
    </Container>
    
    </ThemeProvider>

  );
}