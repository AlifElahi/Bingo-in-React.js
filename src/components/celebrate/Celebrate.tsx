import React from "react";
import Confetti from 'react-confetti'


const Celebrate: React.FC<{show: boolean}> = ({ show }) => {

    return show ? <Confetti gravity={0.2} numberOfPieces={500} /> : <></>
};

export default Celebrate;
