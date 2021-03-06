import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Menu } from '../../types';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation: FC<{ menu: Menu[] }> = ({ menu }) => {
	const { pathname } = useRouter();

	return (
		<Grid container direction='row' columnSpacing={{ xl: 7, lg: 6, md: 3, sm: 1 }} alignItems='center'>
			{menu.map(({ id, title, path }) => (
				<Grid item key={id} md='auto'>
					<Link href={path} passHref>
						<Typography
							variant='h6'
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
				</Grid>
			))}
		</Grid>
	);
};

export default Navigation;

// display: 'flex',
//         //     justifyContent: 'space-between',
//         //     alignItems: 'center',
//         //     backgroundColor: 'inherit',
//         //     marginRight: '60px'
