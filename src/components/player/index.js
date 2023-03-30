import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom";

import {Container, Button, Overlay, Inner, Close} from './styles/player';

export const PlayerContext = createContext();

export default function Player({children, ...restProps}) {
  const [showPlayer, setShowPlayer] = useState();

  return (
    <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({src, children, ...restProps}){
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return showPlayer?ReactDOM.createPortal(
    <Overlay onClick={()=>setShowPlayer(false)}>
      <Inner>
        <video id="netfix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close/>
      </Inner>
    </Overlay>,
    document.body
  ):null;
}

Player.Button = function PLayerButton({children, ...restProps}) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return (
    <Button onClick={()=>setShowPlayer(prev=>!prev)} >
      Play
    </Button>
  )
}