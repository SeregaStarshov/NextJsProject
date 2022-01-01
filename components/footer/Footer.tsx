import { FC } from 'react';
import { Grid, Box } from '@mui/material';
import { Gallery } from '../../types';
import Image from 'next/image';
import styled from 'styled-components';

const CustomFooter = styled.footer`
  padding-bottom: 150px;
  background-color: transparent;
  padding-top: 60px;
`;

const Footer: FC = () => {
  const gallery: Gallery[] = [
    {
      id: '1',
      title: 'Binance',
      img: '/Binance.png',
      width: '190px',
      height: '79px',
    },
    {
      id: '2',
      title: 'bybit',
      img: '/bybit.png',
      width: '141px',
      height: '52px',
    },
    {
      id: '3',
      title: 'okex',
      img: '/okex.png',
      width: '174px',
      height: '47px',
    },
    {
      id: '4',
      title: 'ftx',
      img: '/ftx.png',
      width: '136px',
      height: '49px',
    },
    {
      id: '5',
      title: 'bitmex',
      img: '/bitmex.png',
      width: '163px',
      height: '27px',
    },
    {
      id: '6',
      title: 'hitbtc',
      img: '/hitbtc.png',
      width: '141px',
      height: '60px',
    },
  ];
  return (
    <CustomFooter>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={4}
        sx={{ backgroundColor: 'transparent' }}
      >
        {gallery.map(({ id, title, img, width, height }) => (
          <Grid item key={id}>
            <Image src={img} alt={title} width={width} height={height} />
          </Grid>
        ))}
      </Grid>
    </CustomFooter>
  );
};

export default Footer;
