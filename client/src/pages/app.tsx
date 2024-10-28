import { AppProps } from "next/app";
import React from "react";

const digiProcApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};

export default digiProcApp;