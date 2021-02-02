import React from 'react';
import styled from 'styled-components';

import rarrow from '../icons/rarrow.svg';


const Button = styled.div`
  position: absolute;
  width:24px;
  height:24px;
  cursor: pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 24px;
    height: 20.58px;
  }
  .iconpath path{
    stroke: #FF7750;
  }
`;


function br(e) {
  e.preventDefault();
  alert('The link was clicked.');
}

const BrBut = () => {

  return <Button onClick={br}>
    <img src={rarrow} />
  </Button>


}




export default BrBut;
