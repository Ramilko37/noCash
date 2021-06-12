import React from "react";
import TipButton from "./tip-button/TipButton";
import TipInput from "./tip-input/TipInput";

const amountList = [5, 10, 15, 20]

const Tip: React.FC<{}> = () => {
    let [amount, setAmount] = React.useState(5)
    return (
        <div className="lg:h-full lg:w-3/4 md:h-3/4 md:w-full sm:h-3/4 sm:w-full">
            {amountList.map(e => <TipButton amount={e}/>)}
            <TipInput amount={5}/>
        </div>
    )
}


export default Tip

