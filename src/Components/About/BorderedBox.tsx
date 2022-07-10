import React, { ReactNode } from 'react';
import Box from "@mui/material/Box";

type RedColouredBoxProps = {
children: ReactNode,
color: string
}
// undeer this component we can pass children prop as a component
function RedColouredBox(props: RedColouredBoxProps) {
    return (
        <Box sx={{
            border: `1px solid ${props.color}`,
            borderRadius: 3
        }} >
          {props.children}
        </Box>
    );
}

export default RedColouredBox;
