import { Box, Typography, Container } from '@mui/material';
import { FC } from 'react';

const Ratings: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <Container
        sx={{
          maxWidth: '1278px',
        }}
      >
        <Typography
          component='h2'
          sx={{
            color: '#FFFFFF',
            padding: '15px 49px',
            backgroundColor: 'transparent',
          }}
        >
          РЕЙТИНГИ
        </Typography>
      </Container>
    </Box>
  );
};

export default Ratings;
