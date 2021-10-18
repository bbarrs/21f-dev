import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  width: 100%;
  minimum-height: 600px;
  padding: 3rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
flex: 1;
  padding: 5rem 1rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quote>
            <h3>
              Developed by <br />  Ben Barris (2021)
            </h3>
          </Quote>
          <FooterInfo>
          <h4>Pages</h4>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/other'>Secondary Section</Link>
            <Link to='/api'>API Experiment</Link>
          </FooterInfo>
        </FooterTop>
      </Container>
    </Section>
  );
};

export default Footer;