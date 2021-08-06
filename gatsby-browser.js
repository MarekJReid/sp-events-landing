import * as React from 'react'
import GlobalStyles from './src/styles/GlobalStyles.css';
import { Typography } from './src/styles/Typography';

const App = ({element}) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {element}
        </>
    )
}

export const wrapRootElement = ({ element }) => {
    return <App element={element} />
}