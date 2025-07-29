import Header from '../layout/Header';
import Footer from './Footer';

import * as React from 'react';

export const pageWrapper = ele => {
  return (
    <>
      <Header />
      {ele}
      <Footer />
    </>
  );
}