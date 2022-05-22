import React, { FC, useEffect, useState } from 'react';

import './Step.css'
import StepItem from './StepItem';

interface Props {
    stepArray: string[];
    currenStep: number;
}

const StepNavigation: FC<Props> = (props) => {
    const [progressLen, setProgressLen] = useState(0);
    const { stepArray, currenStep } = props;

    useEffect(() => {
        if (currenStep == 0) {
            setProgressLen(0)
        } else if (currenStep == 1) {
            setProgressLen(35)
        } else if (currenStep == 2) {
            setProgressLen(65)
        } else if (currenStep == 3) {
            setProgressLen(100)
        }
    }, [currenStep])

    return (
        <div className='step__navigation'>
            <div className="step__progress" style={{ width: progressLen + '%' }}></div>
            {
                stepArray.map((item, index) => {
                    if (index <= currenStep) {
                        return <> 
                            <StepItem active key={index} index={index} label={item}> </StepItem>
                            
                        </>
                    }
                    else {
                        return <StepItem key={index} index={index} label={item}> </StepItem>
                    }
                })
            }
        </div>
    );
};

export default StepNavigation;