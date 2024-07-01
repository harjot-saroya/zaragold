import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import { useNavigate} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { productJson } from '../photos/photos';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';


const productList = Object.keys(productJson).slice(0,6);

export default function Products() {
  let navigate = useNavigate();

  const handleClick = (productId) => {
    navigate({
      pathname:'/selectedProduct/',
      search:productId
    });
  };
  return (
    <Box sx={{display:'flex',flexDirection:'row', maxWidth:'100%', marginLeft:'auto', marginRight:'auto'}}>
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '100%' },
          textAlign: { sm: 'left', md: 'center' },
          marginBottom:'1em'
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary" fontSize={'2em'}>
          Featured Products
        </Typography>
      </Box>
      <Grid container spacing={4} width={"100%"} sx={{marginLeft:'auto', marginRight:'auto'}}>
        {productList.map((product, index) => (
          <Grid item xs={8} md={4} key={index} sx={{ display: 'flex', width:'100%', justifyContent:'center', '@media (min-width: 390px)': {
            marginLeft:'auto', marginRight:'auto'
          }}}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor:'white',
                borderStyle:'solid',
                width: "25em",
                height: "21em",
                backgroundColor:'#faf2e7'
              }}
            >
              <CardContent>
              <CardMedia component="picture" sx={{ padding: "1em 1em 0 1em", '@media (min-width: 390px)': {
            pl: '0px'
          } }}>
                  <Box sx={{borderStyle:'solid',borderColor:'#e5ebf5', backgroundColor:'white',height:'11em',width:'11em', marginLeft:'auto', marginRight:'auto'}}>
                    <img
                      src={productJson[product].src}
                      alt="logo"
                      height={"100%"}
                      width={"100%"}
                  />
                  </Box>
                </CardMedia>
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
                        <Button variant="outlined" sx={{ backgroundColor:'#522f29', color:'white'}} onClick={() => {handleClick(productJson[product].id)}}>View More</Button>
                        </TableCell>
                      </TableRow>
                        
                      </Table>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}