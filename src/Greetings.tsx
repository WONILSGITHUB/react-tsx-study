import React, {useState} from "react";

interface GreetingsProps {
    name: string;
    mask: string;
    optional?: string;
    onClick: (name: string) => void;
};

function Greetings(props: GreetingsProps) {
    const {name, mask, optional, onClick} = props;
    const handleClick = function () {
        return onClick(name);
    }
    return(
    <div>Hello, {name} {mask}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    </div>
    );
}

Greetings.defaultProps = {
    mask: '!!'
};

export default Greetings;