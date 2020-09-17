import React from 'react';

import Head from 'next/head';

import RocketseatLogo from '../assets/rocketseat.svg';
import { Container } from '../styles/pages/home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
    </Head>

    <RocketseatLogo />
    <h1>ReactJS Structure</h1>
    <p>A ReactJS + Next.js structure made by Rocketseat</p>
  </Container>
);

export default Home;
