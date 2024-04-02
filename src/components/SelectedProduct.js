import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import { allProducts } from '../AllProducts';
import { CssBaseline } from '@mui/material';
import AppAppBar from './AppAppBar';
import ToggleColorMode from './ToggleColorMode';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Mode } from '@mui/icons-material';
import getLPTheme from '../getLPTheme';
const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function SelectedProduct() {
    const [mode, setMode] = React.useState('light');
    const LPtheme = createTheme(getLPTheme(mode));

  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
    <Box sx={{ bgcolor: '#e8c68b' }}>
        <div style={{'display':'flex','flex-direction':'row'}}>
        <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
        <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            p: 1,
            }}
        >
            <CardContent>
            <CardMedia component="picture" height="140">
                <source srcset="https://mui.com/static/images/cards/contemplative-reptile.jpg, https://mui.com/static/images/cards/contemplative-reptile.jpg 1.5x" />
                <img
                    src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="logo"
                />
            </CardMedia>
            <Typography variant="body2" color="text.secondary">
                <h1>{allProducts.name}</h1>
                <p>{allProducts.price}</p>
                {allProducts.description}
            </Typography>
            </CardContent>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                pr: 2,
            }}
            >
            {/* <img
                src={logos[index]}
                alt={`Logo ${index + 1}`}
                style={logoStyle}
            /> */}
            </Box>
        </Card>
    </Container>
    </div>
</Box>
</ThemeProvider>
  )};
