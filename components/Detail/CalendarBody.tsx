import React, { FC } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

interface Props {
    subMonth(): void;
    addMonth(): void;
    currentDay: any;
    year: any;
    daysArray: any[];
    getDays(item: any): void;
}

const CalendarBody: FC<Props> = (props) => {
    const { subMonth, addMonth, currentDay, year, daysArray, getDays } = props;
    return (
        <div className="calendar-body">
            <div className="header-month">
                <p className="table-header-left" onClick={subMonth}><FiChevronsLeft /></p>
                <p className="table-header-month">{currentDay.format("MMMM")} {year}</p>
                <p className="table-header-right" onClick={addMonth}><FiChevronsRight /></p>
            </div>

            <div className="calendar-context">
                <div className="calendar-header">
                    <div className="calendar-header-week"><p>Pzt</p></div>
                    <div className="calendar-header-week"><p>Sa</p></div>
                    <div className="calendar-header-week"><p>Çr</p></div>
                    <div className="calendar-header-week"><p>Pr</p></div>
                    <div className="calendar-header-week"><p>Cu</p></div>
                    <div className="calendar-header-week"><p>Ct</p></div>
                    <div className="calendar-header-week"><p>Pz</p></div>
                </div>
                <div className="calendar-days">
                    {
                        daysArray.map((week: any) => {
                            return <div className="week-container">
                                {
                                    week.map((item: any, index: number) => {
                                        if(item == ''){
                                            return <div key={index} className="calendar-day-item"><p></p></div>
                                        }else{
                                            return <div key={index} className="calendar-day-item"><p onClick={() => getDays(item)}>{item.format('D')}</p></div>
                                        }
                                        
                                    })
                                }
                            </div>


                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CalendarBody;