import React, {useState} from "react";
type PropsType={
    on:boolean
    onChange:(value:boolean)=>void
}




function OnOff(props: PropsType){
    console.log('OnOff rendered');


    const onStyle={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        backgroundColor:props.on?"green": "white"
    }
    const offStyle={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding:"2px",
        backgroundColor: props.on?"white": "red"
    }
    const allStyle={

        width:"15px",
        height:"15px",
        borderRadius:"10px",
        border:"1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on?"green": "red"
    }



   return  <div>
        <div style={onStyle} onClick={()=>{props.onChange(true)}} >ON</div>
        <div style={offStyle} onClick= {()=>{props.onChange(false)}}>OFF</div>
        <div style={allStyle}></div>
    </div>
}




















export default OnOff;