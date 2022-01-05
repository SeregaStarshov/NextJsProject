import { FC } from 'react';
import { Drawer } from '@material-ui/core';
import { Menu } from '../types';
import { List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core';

interface PropsMobileMenu {
	open: boolean;
	close: () => void;
	menu: Menu[];
}

const useStyles = makeStyles<Theme>((theme) => ({
	drawerPaper: {
		backgroundColor: '#101C2B',
	},
}));

const MobileMenu: FC<PropsMobileMenu> = (props) => {
	const classes = useStyles();
	const { pathname } = useRouter();
	return (
		<>
			<Drawer anchor='left' classes={{ paper: classes.drawerPaper }} open={props.open} onClose={props.close}>
				<List>
					{props.menu.map(({ id, title, path }) => (
						<ListItem key={id}>
							<Link href={path} passHref>
								<Typography
									variant='h5'
									component='a'
									sx={
										pathname === path
											? {
													color: '#FFFFFF',
													border: '1px solid #FFFFFF',
													display: 'inline-block',
													padding: '15px 49px',
													backgroundColor: '#101C2B',
													borderRadius: '5px',
													fontStyle: 'normal',
													fontWeight: 'normal',
													fontSize: '14px',
													lineHeight: '13px',
											  }
											: {
													fontStyle: 'normal',
													fontWeight: 'normal',
													fontSize: '14px',
													lineHeight: '13px',
													color: '#FFFFFF',
											  }
									}
								>
									{title}
								</Typography>
							</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default MobileMenu;
