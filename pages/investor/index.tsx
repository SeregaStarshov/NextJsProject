import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';

const Investor: FC = () => {
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
          ИНВЕСТОРУ
        </Typography>
      </Container>
    </Box>
  );
};

export default Investor;
