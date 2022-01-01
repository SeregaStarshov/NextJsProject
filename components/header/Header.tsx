import { FC } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { Menu } from '../../types';
import { styled, makeStyles } from '@material-ui/core/styles';
import Navigation from './Menu';
import Btn from '../button/Button';
import Select from '../Select';

const CustomAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '21px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '14px',
  lineHeight: '13px',
  flexWrap: 'wrap',
});

const Header: FC = () => {
  const navMenu: Menu[] = [
    {
      id: '1',
      title: 'ГЛАВНАЯ',
      path: '/',
    },
    {
      id: '2',
      title: 'РЕЙТИНГИ',
      path: '/ratings',
    },
    {
      id: '3',
      title: 'БЛОГ',
      path: '/blog',
    },
    {
      id: '4',
      title: 'PRO',
      path: '/pro',
    },
    {
      id: '5',
      title: 'ИНВЕСТОРУ',
      path: '/investor',
    },
  ];
  return (
    <CustomAppBar position='static'>
      <Container
        sx={{
          display: 'flex',
          maxWidth: '1278px',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={5} alignItems='center'>
          <Grid item>
            <Image src='/logo.png' alt='logo' width={46} height={58} />
          </Grid>
          <Grid item>
            <Toolbar
              sx={{
                flexGrow: 1,
                marginLeft: '60px',
              }}
            >
              <Navigation menu={navMenu} />
            </Toolbar>
          </Grid>
          <Grid item>
            <Select />
            <Btn
              backgroundColor='#101C2B'
              border='1px solid #C49BFF'
              borderRadius='5px'
              padding='15px 27px'
              marginLeft='20px'
              marginRight='20px'
              color='#AE8DE5'
            >
              Войти
            </Btn>
            <Btn
              backgroundColor='#5040B2'
              padding='15px 27px'
              color='#FFFFFF'
              boxShadow='0px 0px 20px rgba(188, 79, 255, 0.7)'
              borderRadius='5px'
            >
              Начать
            </Btn>
          </Grid>
        </Grid>
      </Container>
    </CustomAppBar>
  );
};

export default Header;
