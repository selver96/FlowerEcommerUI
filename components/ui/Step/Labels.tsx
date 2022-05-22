import React, { FC } from 'react';


interface Props{
    label: string;
    index: number;
}

const Labels: FC<Props> = (props) => {
    const { label, index } = props;


    return (
        <div className='labels'>
            
        </div>
    );
};

export default Labels;