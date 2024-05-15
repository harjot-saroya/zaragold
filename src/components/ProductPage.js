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
import Divider from '@mui/material/Divider';

const productList = [productJson.batterMixClassic,productJson.batterMixHerb,productJson.batterMixHot,productJson.batterMixThai, productJson.beetRoot,
productJson.chai,productJson.chai,productJson.chai,productJson.chickenLollipop,productJson.crunchyMasala,productJson.hotChocolate,productJson.regularSalted,
productJson.sourCream, productJson.tangoTomato,productJson.turmericLatte]

export default function ProductPage() {
  const [mode, setMode] = React.useState('light');
  const [showCA, setCountry] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

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

  return (
    <ThemeProvider theme={LPtheme}>
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
      {showCA === true ? <div containerStyle={{width:'100%'}}>
      <Carousel hideArrow cols={3} rows={2} gap={10} loop containerStyle={{ width:"35%",marginLeft:'auto',marginRight:'auto' }} showDots>
      {productList.map((product) => ( 
        <Carousel.Item>
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
                    <Typography variant="body2" color="text.secondary" sx={{paddingTop:'1em'}}>
                        <h1>{product.name}</h1>
                        <p>description here</p>
                    </Typography>
                    <button onClick={() => {handleClick(product.id)}}>Info</button>
                </CardContent>
            </Card>
        </Carousel.Item>
        ))}
    </Carousel>
    </div>:<div></div>}
    </Container>
    
    </ThemeProvider>

  );
}