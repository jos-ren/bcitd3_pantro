import React from 'react';
import styled from 'styled-components';

import restaurant from '../icons/restaurant.svg';
import sort from '../icons/settings.svg';


const Button = styled.div`
  width: 323px;
  height: 57px;
  position:absolute;
  bottom:52px;
  background-color:#23b3f2;  
  color: white;
  font-family: Pier Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  border-radius:16px;
  display:flex;
  justify-content:center;
  align-items:center;
  & > img {
    width: 18px;
    height: 18px;
  }
`;


const AddButton = ({text}) => {

  return <Button>
    <img src={sort} />
    &nbsp;{text}
     </Button>

}

AddButton.defaultProps = {
  text:"Add Item",
  image:null,
}

export default AddButton;
