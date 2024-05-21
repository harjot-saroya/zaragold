import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { productJson } from '../photos/photos';

const productList = [productJson.batterMixClassic,productJson.batterMixHerb,productJson.batterMixHotSpicy,productJson.batterMixThaiGreen,
  productJson.beetrootLatte,productJson.crunchyMasala]


export default function Products() {
  const theme = useTheme();

  return (
    <div style={{'display':'flex','flex-direction':'row', 'maxWidth':'100%', 'marginLeft':'auto','marginRight':'auto'}}>
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        marginLeft:'10em',
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
      <Grid container spacing={4} width={"1000px"} marginLeft={'auto'} marginRight={'auto'}>
        {productList.map((product, index) => (
          <Grid item xs={2} md={4} key={index} sx={{ display: 'flex', width:'100%', display:'flex', justifyContent:'center'}}>
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
              <CardMedia component="picture" sx={{ padding: "1em 1em 0 1em" }}>
                  <Box sx={{borderStyle:'solid',borderColor:'#e5ebf5', backgroundColor:'white',height:'11em',width:'11em', marginLeft:'auto', marginRight:'auto'}}>
                    <img
                      src={product.src}
                      alt="logo"
                      height={"100%"}
                      width={"100%"}
                  />
                  </Box>
                </CardMedia>
                <Typography variant="body2" color="text.secondary">
                <Typography component="h2" variant="h4" color="text.primary" fontSize={'25px'}>
                  {product.name}
                </Typography>
                  Description
                </Typography>
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
    </div>
  );
}