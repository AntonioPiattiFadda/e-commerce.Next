import ProductList from '@containers/ProductList';
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-shop</title>
      </Head>
      <ProductList />
    </>
  );
}
