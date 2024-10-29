import { AppProps } from "next/app";
import React from "react";
import '../styles/global.css'; 
import '@fontsource/inter/600.css';

const digiProcApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default digiProcApp;