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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const productList = Object.keys(productJson);

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
          sx={{bgcolor:'white'}}
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
        if ((productJson[product].type === filter || filter === 'all') && (productJson[product].region === 'CA'))
        return(
          <Carousel.Item containerStyle={{width:'10px'}}>
              <Card
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: "20em",
                  height: "21em",
                  backgroundColor:'#faf2e7',
              }}
              >
                  <CardContent>
                      <CardMedia component="picture" height="20" sx={{paddingTop:'1em'}}>
                      <Box sx={{borderStyle:'solid',borderColor:'#e5ebf5', backgroundColor:'white',height:'11em',width:'11em', marginLeft:'auto', marginRight:'auto'}}>
                            <img
                            src={productJson[product].src}
                            alt="logo"
                            height={"150em"}
                            width={"130em"}
                        />
                      </Box>
                      <Table>
                        <TableRow>
                          <TableCell sx={{margin:'auto', textAlign:'center', padding:'0'}}>
                          <Typography component="h2" variant="h4" color="text.primary" fontSize={'16px'} overflow={'auto'}>
                        {productJson[product].name}
                        </Typography>
                          </TableCell>
                        </TableRow>
                      <TableRow>
                        <TableCell sx={{margin:'auto', textAlign:'center'}}>
                        <Button variant="outlined" sx={{ backgroundColor:'#522f29', color:'white'}} onClick={() => {handleClick(product.id)}}>View More</Button>
                        </TableCell>
                      </TableRow>
                        
                      </Table>
                      </CardMedia>
                  </CardContent>
              </Card>
          </Carousel.Item>)
        })}
    </Carousel>
    </div>
    </div>:<div>
    <Carousel hideArrow cols={3} rows={2} gap={10} loop containerStyle={{ width:'1000px',marginLeft:'auto',marginRight:'auto' }} showDots>
      {productList.map((product) => {
        if ((productJson[product].type === filter || filter === 'all') && (productJson[product].region === 'IN'))
        return(
          <Carousel.Item containerStyle={{width:'10px'}}>
              <Card
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: "20em",
                  height: "21em",
                  backgroundColor:'#faf2e7',
              }}
              >
                  <CardContent>
                      <CardMedia component="picture" height="20" sx={{paddingTop:'1em'}}>
                      <Box sx={{borderStyle:'solid',borderColor:'#e5ebf5', backgroundColor:'white',height:'11em',width:'11em', marginLeft:'auto', marginRight:'auto'}}>
                            <img
                            src={productJson[product].src}
                            alt="logo"
                            height={"150em"}
                            width={"130em"}
                        />
                      </Box>
                      <Typography component="h2" variant="h5" color="text.primary" fontSize={'20px'}>
                        {productJson[product].name}
                      </Typography>
                      <Button variant="outlined" sx={{backgroundColor:'#522f29', color:'white', marginTop:'2em'}} onClick={() => {handleClick(product.id)}}>View More</Button>
                      </CardMedia>
                  </CardContent>
              </Card>
          </Carousel.Item>)
        })}
    </Carousel>
      </div>}
    </Container>
    
    </ThemeProvider>

  );
}