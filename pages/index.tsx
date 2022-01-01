import { Box, Container } from '@mui/material';
import Head from 'next/head';
import Paginations from '../components/main/slider/Pagination';
import Slider from '../components/main/slider/Slider';
import { Card } from '../types';
import { useState } from 'react';

export default function Home() {
  const dataCards: Card[] = [
    {
      id: '1',
      title: 'Поделитесь своими результатами',
      subtitle: 'И получите доверие большого количества инвесторов',
    },
    {
      id: '2',
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      subtitle: 'It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
      id: '3',
      title: 'It is a long established fact that a reader will be distracted by.',
      subtitle:
        'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
  ];
  const numPage: number = 1;
  const [page, setNextPage] = useState(numPage);
  const currentPage = dataCards.find((item) => item.id === page.toString());
  return (
    <>
      <Head>
        <title>Next Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        sx={{
          width: '100%',
          flex: '1 1 auto',
          justifyContent: 'center',
        }}
      >
        <Container
          sx={{
            maxWidth: '1278px',
          }}
        >
          <Slider currentPage={currentPage} />
          <Paginations cards={dataCards} click={setNextPage} page={page} />
        </Container>
      </Box>
    </>
  );
}
