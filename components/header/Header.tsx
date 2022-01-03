import { FC } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { Menu } from '../../types';
import { styled } from '@material-ui/core/styles';
import logo from '../../public/logo.png';
import Navigation from './Menu';
import { Grid } from '@mui/material';

const CustomAppBar = styled(AppBar)({
	backgroundColor: 'inherit',
	height: '60px',
	padding: '10px',
});

const Header: FC = () => {
	const navMenu: Menu[] = [
		{
			id: '1',
			link: 'ГЛАВНАЯ',
		},
		{
			id: '2',
			link: 'РЕЙТИНГИ',
		},
		{
			id: '3',
			link: 'БЛОГ',
		},
		{
			id: '4',
			link: 'PRO',
		},
		{
			id: '5',
			link: 'ИНВЕСТОРУ',
		},
	];
	return (
		<CustomAppBar position='static'>
			<Toolbar
				variant='regular'
				sx={{
					maxWidth: '1278px',
					justifyContent: 'space-between',
				}}
			>
				<Image src={logo} alt='logo' />
				<Navigation menu={navMenu} />
				<Button color='inherit'>RU</Button>
				<Button color='inherit'>Войти</Button>
				<Button color='inherit'>Начать</Button>
			</Toolbar>
		</CustomAppBar>
	);
};

export default Header;
