"use client"
import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import TextEditor from '../../TextEditor/TextEditor'


{/********************* This is a form field for the formation and work experience.  both "Formation" and "Work 
                        Experience" forms share a similar structure ******************************************/ }



interface FormFields {
    dataField: string,
    company: string,
    city: string,
}

const GeneralForm = ({ dataField, company, city }: FormFields) => {
    {/*Date */ }
    const [startDate, setStartDate] = React.useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = React.useState<Date | undefined>(new Date())
    {/*Calendar */ }
    const [showStartCal, setShowStartCal] = useState<boolean>(false);
    const [showEndCal, setShowEndCal] = useState<boolean>(false);

    const handleShowDate = (data: 'startDate' | 'endDate') => {
        if (data === 'startDate') {
            setShowStartCal(!showStartCal);
            setShowEndCal(false);
        } else {
            setShowEndCal(!showEndCal);
            setShowStartCal(false);
        }
    };

    const handleShowCalendar = (dataDate: 'Start Date' | 'End Date', showDate: boolean, selectedDate: Date | undefined, onSelectDate: (date: Date | undefined) => void, toggleCalendar: () => void) => (
        <div>
            <h2>{dataDate}</h2>
            <div className="mt-2">
                <button
                    type='button'
                    onClick={toggleCalendar}
                    className="px-3 py-2 border-2 border-black rounded-lg flex items-center gap-10">
                    {selectedDate ? selectedDate.toLocaleDateString() : <span>Pick a Date</span>}
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                            <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                        </svg>
                    </div>
                </button>

                {showDate && (
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={onSelectDate}
                        className="rounded-md border"
                    />
                )}
            </div>
        </div>
    );

    return (
        <div className='border-2 p-4 flex flex-col gap-5'>
            <div className='flex flex-col'>
                <label htmlFor='formazione'>{dataField}</label>
                <input id='formazione' type="text" className="border border-gray-300 p-2 rounded-lg" />
            </div>

            <div className=' flex flex-row justify-between gap-5 '>
                <div className='flex flex-col flex-1'>
                    <label htmlFor='Institute'>{company}</label>
                    <input id="Institute" type="text" className="border border-gray-300 p-2 rounded-lg "></input>
                </div>
                <div className='flex flex-col flex-1'>
                    <label htmlFor='City'>{city}</label>
                    <input id="City" type="text" className="border border-gray-300 p-2 rounded-lg"></input>
                </div>
            </div>

            <div className='flex flex-row justify-between '>
                {handleShowCalendar("Start Date", showStartCal, startDate, setStartDate, () => handleShowDate("startDate"))}
                {handleShowCalendar("End Date", showEndCal, endDate, setEndDate, () => handleShowDate("endDate"))}
            </div>

            <div className='flex flex-col '>
                <div>
                    <h2 className='font-medium '>Description</h2>
                </div>
                <div>
                    <TextEditor />
                </div>
            </div>
        </div>
    )
}

export default GeneralForm
