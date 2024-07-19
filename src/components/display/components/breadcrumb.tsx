import React, { useContext } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';

import ThemeContext from '../../../contexts/ThemeContext';

interface BreadcrumbProps {
    path: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{color: (theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)'}} />}
            aria-label="breadcrumb"
            sx={{
                top: 0,
                padding: '0 0 0 1rem',
                margin: 0,
                backgroundColor: (theme == 'dark') ? 'var(--secondary-bg-color)' : 'var(--main-bg-color-light)',
            }}>
            {path.map((item, index) => {
                return (
                    <Typography key={index} color={(theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)'} fontSize={14}>
                        {item}
                    </Typography>
                );
            })}
        </Breadcrumbs>
    );
}

export default Breadcrumb;