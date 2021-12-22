import { FC } from "react";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
// import {Link} from "@mui/material";
import {Menu} from '../../types';
import Link from "next/link";


const Navigation: FC<{menu: Menu[]}> = ({menu}) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'inherit',
            width: ''
        }}>
            {menu.map((item) => (
                <Link href={`/${item.link}`} key={item.id} passHref>
                    <Typography variant="h6" component="a" sx={{
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '13px',
                        color: '#FFFFFF',
                    }}>
                    {item.link}
                    </Typography>
                </Link>
            ))}
        </Box>
    );
}

export default Navigation;
