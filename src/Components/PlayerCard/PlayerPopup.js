import React from 'react';
import Popup from './img/Popup.png';
import PlayerIcon from '../PlayerIcon/PlayerIcon.js';

function PlayerPopup(props) {
  let iconImg = props.cardProps[0]
  if (typeof iconImg != "number")
    iconImg = 0
  return (
    <div style={{position:"absolute"}}>
      <img src={Popup} />
      <div style={{position:"absolute",left:10,top:10}}> <PlayerIcon num={iconImg} /> </div>
      <p style={{position:"absolute",width:"100%",top:10,fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        Player Name: {props.cardProps[1]}
        <br />
        Total Monthly Income: ${props.cardProps[2]}
      </p>
      <p style={{position:"absolute",top:"50%",left:"5%",width:"16%",fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        {props.cardProps[3]}
        <br />
        more custom text can go here
        <br />
        idk how many lines u want
      </p>
      <p style={{position:"absolute",top:"50%",left:"23%",width:"16%",fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        {props.cardProps[4]}
        <br />
        more custom text can go here
      </p>
      <p style={{position:"absolute",top:"50%",left:"41%",width:"16%",fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        {props.cardProps[5]}
        <br />
        more custom text can go here
      </p>
      <p style={{position:"absolute",top:"50%",left:"59.5%",width:"16%",fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        {props.cardProps[6]}
        <br />
        more custom text can go here
      </p>
      <p style={{position:"absolute",top:"50%",left:"78%",width:"16%",fontSize:20,fontWeight:"bold",textAlign:"center"}}>
        {props.cardProps[7]}
        <br />
        more custom text can go here
      </p>
      <p style={{position:"absolute",margin:0,top:0,right:10,color:"white",fontWeight:"bold",cursor:"pointer",fontSize:40}}>X</p>
    </div>
  );
}

export default PlayerPopup;
