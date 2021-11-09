import react from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Fabrício" idade={20} nerd={true}></DiretaFilho>

            <DiretaFilho nome="José" idade={16} nerd={false}></DiretaFilho>
        </div>
    )
}