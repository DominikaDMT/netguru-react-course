import React from 'react';

import { Layout as AntLayout } from 'antd';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const { Header, Content, Footer: AntComponent } = AntLayout;

const Logo = styled.h2`
  color: #fff;
`;

const Inner = styled(Content)`
  min-height: 280px;
  padding: 24px;
  background: #fff;
`;

const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

const Footer = styled(AntComponent)`
  text-align: center;
`;

const Page = () => {
  return (
    // <Layout className='layout'>
    <Layout>
      <Header>
        <Logo>Wikipedia Map</Logo>
      </Header>
      <Inner>
        <GoogleMap />
      </Inner>
      <Footer>Netguru College React</Footer>
    </Layout>
  );
};

export default Page;
