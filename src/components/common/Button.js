import React from 'react';

function Button({value, clicked,icon, className}) {
    return(
        <button type="submit" value= {value} onClick={clicked} className={className}>{icon}{value}</button>
    );
}

export default Button;