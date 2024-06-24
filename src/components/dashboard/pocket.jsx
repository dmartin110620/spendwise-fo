import React from 'react';
import '/src/styles/dashboard/pocket.css';
import CountUp from "react-countup";

function Pocket({}) {

    const [value, setValue] = React.useState(185030);
    const [currency, setCurrency] = React.useState('₹');

    return (
        <div className={'pocket'}>
            <img className={'pocket-img'} src={'./src/assets/wp.jpg'} alt={''}/>
            <div className={'pocket-value'}>
                {currency}<CountUp end={value} duration={5} separator=","/>
            </div>
        </div>
    );
}

export default Pocket;