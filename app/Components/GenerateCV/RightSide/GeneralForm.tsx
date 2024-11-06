"use client"
import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import TextEditor from '../TextEditor/TextEditor'
/*This is a general form for formation and work experience. both fields use same pattern for the form */

const GeneralForm = () => {
    const [startDate, setStartDate] = React.useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = React.useState<Date | undefined>(new Date())
    const [showStartDate, setShowDate] = useState<boolean>(false);
    const [showEndDate, setShowEndDate] = useState<boolean>(false);


    {/*Function to handle calendar visibility. */ }
    const handleShowDate = (data: 'startDate' | 'endDate') => {
        switch (data) {
            case 'startDate':
                setShowDate(!showStartDate);
                setShowEndDate(false);
                break;
            case 'endDate':
                setShowEndDate(!showEndDate);
                setShowDate(false);
                break;
        }
    }





    {/*function for calendar */ }
    const handleShowCalender = (dataDate: string, handleShowDate: () => void) => {
        return (
            <div>
                <h2>{dataDate}</h2>
                <div className="mt-2">
                    <button
                        type='button'
                        onClick={handleShowDate}
                        className="px-3 py-2 border-2 border-black rounded-lg flex items-center gap-10">
                        {startDate ? startDate.toLocaleDateString() : <span>Pick a Date</span>}
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                                <path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z" />
                            </svg>
                        </div>

                    </button>

                    {(showStartDate && dataDate == "Start Date") && (
                        <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            className="rounded-md border"
                        />
                    )}

                    {(showEndDate && dataDate == "Start End") && (
                        <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={setEndDate}
                            className="rounded-md border"
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className='border-2   p-4 flex flex-col gap-5'>
            {/*To change formazione to a props. */}
            <div className='flex flex-col'>
                <label htmlFor='formazione'>Formazione</label>
                <input id='formazione' type="text" className="border border-gray-300 p-2 rounded-lg" />
            </div>

            {/*To change istituto e Citta to a props*/}
            <div className=' flex flex-row justify-between gap-5 '>
                <div className='flex flex-col flex-1'>
                    <label htmlFor='Institute'>Institute</label>
                    <input id="Institute" type="text" className="border border-gray-300 p-2 rounded-lg "></input>
                </div>
                <div className='flex flex-col flex-1'>
                    <label htmlFor='City'>City</label>
                    <input id="istiCitytuto" type="text" className="border border-gray-300 p-2 rounded-lg"></input>
                </div>
            </div>

            {/*Calendar */}
            <div className='flex flex-row justify-between '>

                {/*Start Date */}
                {handleShowCalender("Start Date", () => handleShowDate("startDate"))}


                {/*End Start */}
                {handleShowCalender("Start End", () => handleShowDate("endDate"))}
            </div>

            {/*Text Area */}
            <div className='flex flex-col '>
                <div>
                    <h2 className='font-medium '>Description</h2>
                </div>
                <div>

                    {/*Text Area */}
                    <TextEditor />
                </div>
            </div>

        </div>
    )
}

export default GeneralForm
