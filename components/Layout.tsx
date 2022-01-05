import { FC } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 995,
			lg: 1200,
			xl: 1536,
		},
	},
});

const Layout: FC = ({ children }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default Layout;
