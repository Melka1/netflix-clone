import styled from "styled-components/macro";
//Container, Button, Overlay, Inner, Close
export const Container = styled.div``;

export const Button = styled.button`
  background-color:#e50914;
  border-color:#ff0a10;
  width: 114px;
  height:45px;
  text-transform:uppercase;
  font-weight:bold;
  color:white;
  font-size:18px;
  cursor:pointer;
  // display:flex;
  align-items:center;
  padding-left:0;
  text-align:center;

  &:hover {
    transform: scale(1.05);
    background-color:#ffa016;
  }
`;

export const Close = styled.button`
  position: absolute;
  right:15px;
  top:15px;
  width:30px;
  height:30px;
  opcaity:0.3;
  background-color:transparent;
  border:0;
  cursor:pointer;
  border-radius:50%;

  &:hover {
    opacity:1;
  }
  
  &:after,&:before {
    position:absolute;
    left:10px;
    top:0;
    content:' ';
    height:22px;
    width:2px;
    background-color:white;
  }

  &:before {
    transform:rotate(45deg);
  }
  &:after {
    transform:rotate(-45deg);
  }
`;

export const Inner = styled.div`
  position:relative;
  width:100%;
  max-width:900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;

  }
`;

export const Overlay = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5)
  margin:0 20px;
`;