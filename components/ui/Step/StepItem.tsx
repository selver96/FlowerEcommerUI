import React, { FC, useEffect } from 'react';

interface Props{
    label: string;
    index: number;
    active?: boolean;
}

const StepItem: FC<Props> = (props) => {
    const { label, index, active } = props;

    useEffect(() => {

    },[])

    return (
        <div className='step__block'>
            <div className={"circle__wrapper"} >
                <div className={ active ? "circle active__circle": "circle"} >{index + 1}</div>
            </div>
            <p>{label}</p>
        </div>
    );
};

export default StepItem;