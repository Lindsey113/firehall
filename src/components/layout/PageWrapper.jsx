import Header from '../layout/Header';

import * as React from 'react';

export const pageWrapper = ele => {
  return (
    <>
      <Header />
      {ele}
    </>
  );
}