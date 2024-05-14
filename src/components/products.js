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

const productList = [productJson.batterMixClassic,productJson.batterMixHerb,productJson.batterMixHot,productJson.batterMixThai,
  productJson.beetRoot,productJson.crunchyMasala]

const productList2 = [productJson.batterMixThai,productJson.beetRoot,productJson.crunchyMasala]

export default function Products() {
  const theme = useTheme();

  return (
    <div style={{'display':'flex','flex-direction':'row', maxWidth:'96%', marginLeft:'auto',marginRight:'auto'}}>
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
        width:'50%',
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
      <Grid container spacing={3}>
        {productList.map((product, index) => (
          <Grid item xs={2} md={4} key={index} sx={{ display: 'flex', width:'100%', display:'flex', justifyContent:'center'}}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor:'#e7c68b',
                border:'none',
                width:'15em',
                height:'25em',
              }}
            >
              <CardContent>
              <CardMedia component="picture" sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}>
                    <img
                    src={product.src}
                    alt="logo"
                    height={"150em"}
                    width={"130em"}
                />
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
    <Container
      id="testimonials2"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'30%',
        marginRight:'5em'
      }}
    >
      <Box
        sx={{
          width: { sm: '50%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
          marginBottom:'1em'
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary" fontSize={'2em'}>
          Best sellers
        </Typography>
        <Typography variant="body1" color="text.secondary">
        </Typography>
      </Box>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{
        width: "100%",

      }} >
        {productList2.map((product, index) => (
          <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            width:'15em',
            height:'25em',
            marginBottom:'1em',
            backgroundColor:'#e7c68b',
            border:'0',
          }}
        >
          <CardContent>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <CardMedia component="picture" sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}>
                    <img
                    src={product.src}
                    alt="logo"
                    height={"150em"}
                    width={"130em"}
                />
                </CardMedia>
            </div>
            <Typography variant="body2" color="text.secondary">
                <h1>Test Name</h1>
                <p>20$</p>
            </Typography>
          </CardContent>
        </Card>
        ))}
      </Grid>
    </Container>
    </div>
  );
}