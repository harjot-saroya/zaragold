import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, CssBaseline } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate} from "react-router-dom";
import { useTheme } from '@mui/system';
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
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
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
    {showCA === true ? <div><Container
      id="testimonials"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
        minWidth:"100%",
        height:"100%",
        backgroundColor:'#fbfeff',
        marginTop:'7em',
        marginBottom:'10em'
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
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Carousel hideArrow cols={3} rows={2} gap={10} loop containerStyle={{ width:"80%",marginLeft:'auto',marginRight:'auto' }} showDots>
      {productList.map((product) => ( 
        <Carousel.Item sx={{
          width: "15em",
          height: "21em",
      }}>
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
                    <img
                    src={product.src}
                    alt="logo"
                    height={"150em"}
                    width={"130em"}
                />
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
    </Container></div>:<div></div>}
    
    </ThemeProvider>

  );
}