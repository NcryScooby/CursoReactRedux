import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Fabrício" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Caren" {...props}/>
            <FamiliaMembro nome="Anderson" sobrenome="Teixeira"/>
        </div>
    )
}