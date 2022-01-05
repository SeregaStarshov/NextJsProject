import React, { Children, FC } from 'react';
import styled from 'styled-components';

interface PropsBtn {
	padding?: string;
	color?: string;
	backgroundColor?: string;
	boxShadow?: string | null;
	borderRadius?: string;
	border?: string | null;
	marginLeft?: string;
	marginRight?: string;
	matches?: boolean;
}
const CustomBtn = styled.button`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 13px;
	text-transform: uppercase;
	padding: ${(props: PropsBtn) => props.padding};
	border-radius: 5px;
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#101C2B')};
	color: ${(props) => (props.color ? props.color : '#FFFFFF')};
	border: ${(props) => (props.border ? props.border : 'none')};
	box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : null)};
	margin-left: ${(props) => (props.marginLeft ? props.marginLeft : null)};
	margin-right: ${(props) => props.marginRight};
	cursor: pointer;
	display: ${(props) => (props.matches ? 'none' : 'inline-block')};
`;

const Btn: FC<PropsBtn> = (props) => {
	return <CustomBtn {...props} onClick={() => console.log(`Click ${props.children}`)} />;
};

export default Btn;
