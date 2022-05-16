import React, {useState} from "react";
type PropsType={
    onChange:(on:boolean)=>void
    // on:boolean
}




function OnOff(props: PropsType){
    console.log('OnOff rendered');

    let[on,setOn]=useState(false)
    const onStyle={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding:"2px",
        backgroundColor:on?"green": "white"
    }
    const offStyle={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding:"2px",
        backgroundColor: on?"white": "red"
    }
    const allStyle={

        width:"15px",
        height:"15px",
        borderRadius:"10px",
        border:"1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on?"green": "red"
    }

const onClicks=()=>{
    setOn(true)
    props.onChange(true)
}
const offClicks = () => {
    setOn(false)
    props.onChange(false)

}

   return  <div>
        <div style={onStyle} onClick={onClicks} >ON</div>
        <div style={offStyle} onClick= {offClicks}>OFF</div>
        <div style={allStyle}></div>
    </div>
}




















export default OnOff;