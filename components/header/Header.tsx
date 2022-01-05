import { FC, useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { Menu } from '../../types';
import { styled } from '@material-ui/core/styles';
import Navigation from './Menu';
import Btn from '../button/Button';
import Select from '../Select';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@mui/material';
import { Theme, useMediaQuery } from '@material-ui/core';
import MobileMenu from '../MobileMenu';

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
	const theme = useTheme<Theme>();
	const matches = useMediaQuery<unknown>(theme.breakpoints.up('md'));
	const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
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
				<Grid
					container
					rowSpacing={2}
					columnSpacing={{ xl: 2, lg: 1 }}
					alignItems='center'
					justifyContent='space-between'
				>
					<Grid item>
						<Image src='/logo.png' alt='logo' width={46} height={58} />
					</Grid>
					{!matches && (
						<Grid item sx={{ flexGrow: 1 }}>
							<Typography
								variant='h1'
								sx={{
									marginLeft: '19px',
									fontStyle: 'normal',
									fontWeight: 'normal',
									fontSize: '20px',
									lineHeight: '19px',
									textTransform: 'uppercase',
									color: '#FFFFFF',
								}}
							>
								EQUITE.IO
							</Typography>
						</Grid>
					)}
					<Grid item>
						<Toolbar
							sx={
								!matches
									? { display: 'none' }
									: {
											flexGrow: 1,
											// marginLeft: '60px',
									  }
							}
						>
							<Navigation menu={navMenu} />
						</Toolbar>
					</Grid>
					<Grid item md='auto'>
						<Select />
						<IconButton
							size='large'
							aria-label='menu'
							sx={
								matches
									? { display: 'none' }
									: {
											color: '#C49BFF',
											marginLeft: '21px',
											backgroundColor: '#101C2B',
											border: '1px solid #C49BFF',
											borderRadius: '5px',
									  }
							}
							onClick={() => setOpenMobileMenu(true)}
						>
							<MenuIcon />
						</IconButton>
						<Btn
							backgroundColor='#101C2B'
							border='1px solid #C49BFF'
							borderRadius='5px'
							padding='15px 27px'
							marginLeft='20px'
							marginRight='20px'
							color='#AE8DE5'
							matches={!matches}
						>
							Войти
						</Btn>
						<Btn
							backgroundColor='#5040B2'
							padding='15px 27px'
							color='#FFFFFF'
							boxShadow='0px 0px 20px rgba(188, 79, 255, 0.7)'
							borderRadius='5px'
							matches={!matches}
						>
							Начать
						</Btn>
					</Grid>
				</Grid>
			</Container>
			<MobileMenu open={openMobileMenu} close={() => setOpenMobileMenu(false)} menu={navMenu} />
		</CustomAppBar>
	);
};

export default Header;
