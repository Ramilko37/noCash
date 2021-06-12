import React from "react";

const TipInput: React.FC<{amount:number}> = ({amount}) =>
    <div>
        <input  id="amount" value={amount}
               className="w-32 p-3"/>
    </div>

export default TipInput
