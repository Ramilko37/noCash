import React from "react";
import './radiobuttons.css';
import RadioButton from "./RadioButton";

const radioArray = [
    {
        id: 'radio1',
        content: 'Service',
    },
    {
        id: 'radio2',
        content: 'Food',
    },
    {
        id: 'radio3',
        content: 'Cleanness',
    },
    {
        id: 'radio4',
        content: 'Interior',
    },
    {
        id: 'radio5',
        content: 'Music',
    },
    {
        id: 'radio6',
        content: 'Atmosphere',
    },
    // {
    //     id: 'radio7',
    //     content: 'I want to cover transaction costs (5% of the tip amount) so that the employee receives the full amount',
    // }
]

const RadioButtons: React.FC<{}> = () =>
    <div className="flex-col w-56 sm:w-96 justify-center mx-auto text-white">
        <h3 className="text-center mb-6">What can we do better?</h3>
   <div className="grid grid-cols-2 sm:grid-cols-3 justify-between">
       {
           radioArray.map(e =>
           <RadioButton id={e.id} content={e.content}/>
       )
       }
   </div>
    </div>






export default RadioButtons;
