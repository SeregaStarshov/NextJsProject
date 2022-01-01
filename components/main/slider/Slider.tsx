import { Typography, Box } from '@mui/material';
import { FC } from 'react';
import Btn from '../../button/Button';
import { Card } from '../../../types';

interface CurrentPage {
  currentPage: Card | undefined;
}

const Slider: FC<CurrentPage> = ({ currentPage }) => {
  return (
    <Box
      sx={{
        paddingBottom: '80px',
      }}
    >
      <Box
        sx={{
          maxWidth: '674px',
          paddingBottom: '46px',
          paddingTop: '83px',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            color: 'white',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '50px',
            lineHeight: '60px',
            letterSpacing: '0.03em',

            marginBottom: '44px',
          }}
        >
          {currentPage ? currentPage.title : null}
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '35px',
            lineHeight: '50px',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            color: '#AE8DE5',
          }}
        >
          {currentPage ? currentPage.subtitle : null}
        </Typography>
      </Box>
      <Box>
        <Btn
          backgroundColor='#5040B2'
          boxShadow='0px 0px 20px rgba(188, 79, 255, 0.7)'
          marginRight='29px'
          padding='19px 62px'
        >
          начать
        </Btn>
        <Btn
          padding='19px 62px'
          color='#C49BFF'
          boxShadow='0px 0px 20px rgba(188, 79, 255, 0.7)'
          border='1px solid #C49BFF'
        >
          я трейдер
        </Btn>
      </Box>
    </Box>
  );
};

export default Slider;
