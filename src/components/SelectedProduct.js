import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CssBaseline } from '@mui/material';
import AppAppBar from './AppAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { productJson } from '../photos/photos';

import getLPTheme from '../getLPTheme';

export default function SelectedProduct() {
    const [mode, setMode] = React.useState('light');
    const productName = window.location.search.slice(1);
    const LPtheme = createTheme(getLPTheme(mode));
    const [currWidth, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
       // subscribe to window resize event "onComponentDidMount"
       window.addEventListener("resize", handleResizeWindow);
       return () => {
         // unsubscribe "onComponentDestroy"
         window.removeEventListener("resize", handleResizeWindow);
       };
     }, []);
    let params = {width:'55vw'};
    if (currWidth < 1000){
      params = {objectFit:'contain',width:'20em',height:'30em'}
    }

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
            <CardMedia component="picture" height="140" width="100vw">
                <img
                    src={productJson[productName].src2}
                    alt="logo"
                    height={"550em"}
                    width={'100vw'}
                    style={params}
                />
            </CardMedia>
            <Typography variant="body2" color="text.secondary">
                <h1>{productJson[productName].name}</h1>
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
            </Box>
        </Card>
    </Container>
    </div>
</Box>
</ThemeProvider>
  )};
