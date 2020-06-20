import React from 'react';
import styled from '@emotion/styled';
import {DiGithubAlt} from 'react-icons/di'
import {FaTwitter} from 'react-icons/fa'

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div>
        <span>
          benhunt.io &#9400; 2020
        </span>
      </div>
      <a href="https://github.com/BenHunt-io?tab=repositories">
        <DiGithubAlt css={{width: 25, height: 25}}/>
      </a>
      <FaTwitter css={{width: 25, height: 25}}> </FaTwitter>
    </Text>
  </Wrapper>
);
export default Footer;
