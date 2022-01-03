import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Menu } from '../../types';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

const Navigation: FC<{ menu: Menu[] }> = ({ menu }) => {
	return (
		<Grid>
			{menu.map((item) => (
				<Link href={`/${item.link}`} key={item.id} passHref>
					<Typography
						variant='h6'
						component='a'
						sx={{
							fontStyle: 'normal',
							fontWeight: 'normal',
							fontSize: '14px',
							lineHeight: '13px',
							color: '#FFFFFF',
							// '&:not(:last-child)': {
							//     marginRight: '36px',
							// }
						}}
					>
						{item.link}
					</Typography>
				</Link>
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
