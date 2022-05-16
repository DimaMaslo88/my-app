import React from "react";
import {GlobalValueType} from "../Rating";

type AccordionPropsType = {
    title: string
    valueAcc:boolean
    onClick:()=>void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        < AccordionTitle title={props.title} onClick={props.onClick}/>{
        !props.valueAcc && <AccordionBody/>

    }


    </div>


    }
    type AccordionTitlePropsType = {
        title: string
        onClick:()=>void

    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return <h3 onClick={props.onClick}> {props.title} </h3>
    }

    function AccordionBody() {
        console.log("AccordionBody rendering")
        return <ul>
            <li>1</li>
            <li>2</li>
        </ul>

    }

    export default Accordion;