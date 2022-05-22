import '../styles/global.css'
import React, {FC} from 'react';
import {AppProps} from 'next/app';
import { wrapper } from '../redux';

const FlowerStoreApp: FC<AppProps> = ({Component, pageProps}) => <Component {...pageProps} />;

export default wrapper.withRedux(FlowerStoreApp);