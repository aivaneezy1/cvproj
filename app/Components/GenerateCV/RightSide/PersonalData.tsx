"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import { useState } from 'react';

const PersonalDataComponent = () => {
    const [showPersonalData, setShowPersonalData] = useState<boolean>(false)

    const [showDateOfBirth, setShowDateBirth] = useState<boolean>(false)
    const [showPlaceOfBirth, setShowPlaceBirth] = useState<boolean>(false)
    {/*Show Personal Data */ }
    const handlePersonalData = () => {
        setShowPersonalData(!showPersonalData)
    }

    const handle = () => {
        setShowDateBirth(!showDateOfBirth)
    }


    {/*Show optionals Personal Data */ }
    const handleOptionalsData = (data: string, setShowField: React.Dispatch<React.SetStateAction<boolean>>) => {
        return (
            <div className='flex flex-row border-2 border-gray-500 max-w-[150px] rounded-lg p-2 gap-2 cursor-pointer hover:bg-blue-100 mt-10'>
                <button type="button" onClick={() => setShowField(prev => !prev)} className='flex flex-row gap-2'>
                    + <h2 className='whitespace-nowrap'>{data}</h2>
                </button>

            </div>
        )
    }


    console.log("Date of Birth visible:", showDateOfBirth);
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={showPersonalData ? 'text-black' : 'text-gray-500'}>
                    Personal Data
                </h1>
                <Button className="ml-auto" type="button" onClick={handlePersonalData}>{showPersonalData ? "^" : "+"}</Button>
            </div>
            <hr className='border-t-2 border-gray-600 my-2' />
            {showPersonalData && (
                <div>
                    <div className='flex flex-row gap-5'>
                        <div className="flex flex-col">
                            <label htmlFor="picture" className="mb-1 font-medium">Picture</label>
                            <input id="picture" type="file" className="border border-gray-300 p-2" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="FirstName" className="mb-1 font-medium">First Name</label>
                            <input id="FirstName" type="text" className="border border-gray-300 p-2" />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="LastName" className="mb-1 font-medium">Last Name</label>
                            <input id="LastName" type="text" className="border border-gray-300 p-2" />
                        </div>
                    </div>

                    <div className='flex flex-row gap-5'>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="mb-1 font-medium">Email</label>
                            <input id="Email" type="email" className="border border-gray-300 p-2" />
                        </div>
                        {/* Telephone */}
                        <div className="flex flex-col">
                            <label htmlFor="Telephone" className="mb-1 font-medium">Telephone</label>
                            <input id="Telephone" type="text" className="border border-gray-300 p-2" />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="Address" className="mb-1 font-medium">Address</label>
                        <input id="Address" type="text" className="border border-gray-300 p-2" />
                    </div>

                    <div className='flex flex-row gap-5'>
                        {/* Codice Postale */}
                        <div className="flex flex-col">
                            <label htmlFor="Codice Postale" className="mb-1 font-medium">Codice Postale</label>
                            <input id="Codice Postale" type="text" className="border border-gray-300 p-2" />
                        </div>
                        {/* City */}
                        <div className="flex flex-col">
                            <label htmlFor="City" className="mb-1 font-medium">City</label>
                            <input id="City" type="text" className="border border-gray-300 p-2" />
                        </div>
                    </div>

                    {/*Optionals field */}
                    {showDateOfBirth && (
                        <div className="flex flex-col">
                            <label htmlFor="Dateofbirth" className="mb-1 font-medium">Date of birth</label>
                            <input id="Dateofbirth" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}





                    {/*Optionals to show*/}
                    <div className='flex flex-row gap-5'>
                        {handleOptionalsData("Date of Birth", setShowDateBirth)}

                    </div>

                </div>
            )}


        </div>

    );
};

export default PersonalDataComponent;
