import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { Card } from '../../../types';

interface PropsCards {
	cards: Card[];
	click: Dispatch<SetStateAction<number>>;
	page: number;
}

const CustomPagination = styled.div`
	max-width: 95px;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
`;

const Paginations: FC<PropsCards> = (props) => {
	const cards: Card[] = props.cards;
	return (
		<CustomPagination>
			{cards.map((item, index) => (
				<Box
					key={index}
					sx={
						item.id === props.page.toString()
							? {
									backgroundColor: '#C49BFF',
									transform: 'rotate(45deg)',
									boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
									border: '1px solid #C49BFF',
									width: '13px',
									height: '13px',
									cursor: 'pointer',
							  }
							: {
									backgroundColor: '#101C2B',
									transform: 'rotate(45deg)',
									boxShadow: '0px 0px 20px rgba(188, 79, 255, 0.7)',
									border: '1px solid #C49BFF',
									width: '13px',
									height: '13px',
									cursor: 'pointer',
							  }
					}
					onClick={() => {
						props.click(Number(item.id));
					}}
				/>
			))}
		</CustomPagination>
	);
};

export default Paginations;
