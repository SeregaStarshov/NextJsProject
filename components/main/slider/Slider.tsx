import { Typography, Box } from '@mui/material';
import { FC } from 'react';
import Btn from '../../button/Button';
import { Card } from '../../../types';
import { useTheme } from '@mui/material';
import { Theme, useMediaQuery } from '@material-ui/core';

interface CurrentPage {
	currentPage: Card | undefined;
}

const Slider: FC<CurrentPage> = ({ currentPage }) => {
	const theme = useTheme<Theme>();
	const mobileVariant = useMediaQuery<unknown>(theme.breakpoints.up('sm'));
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
					sx={
						!mobileVariant
							? {
									textAlign: 'center',
									fontStyle: 'normal',
									fontWeight: 'bold',
									fontSize: '30px',
									lineHeight: '40px',
									letterSpacing: '0.03em',
									color: '#FFFFFF',
							  }
							: {
									color: 'white',
									fontStyle: 'normal',
									fontWeight: 'bold',
									fontSize: '50px',
									lineHeight: '60px',
									letterSpacing: '0.03em',

									marginBottom: '44px',
							  }
					}
				>
					{currentPage ? currentPage.title : null}
				</Typography>
				<Typography
					variant='subtitle1'
					sx={
						!mobileVariant
							? {
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: '20px',
									lineHeight: '30px',
									textAlign: 'center',
									letterSpacing: '0.03em',
									textTransform: 'uppercase',
									color: '#AE8DE5',
							  }
							: {
									fontStyle: 'normal',
									fontWeight: '300',
									fontSize: '35px',
									lineHeight: '50px',
									letterSpacing: '0.03em',
									textTransform: 'uppercase',
									color: '#AE8DE5',
							  }
					}
				>
					{currentPage ? currentPage.subtitle : null}
				</Typography>
			</Box>
			<Box
				sx={
					!mobileVariant
						? {
								textAlign: 'center',
						  }
						: null
				}
			>
				<Btn
					backgroundColor='#5040B2'
					boxShadow='0px 0px 20px rgba(188, 79, 255, 0.7)'
					marginRight='29px'
					padding={!mobileVariant ? '19px 32px' : '19px 62px'}
				>
					начать
				</Btn>
				<Btn
					padding={!mobileVariant ? '19px 19px' : '19px 62px'}
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
