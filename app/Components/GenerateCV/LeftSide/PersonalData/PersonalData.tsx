"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import OptionalFields from './OptionalData';
import { useContext } from 'react';
import { DataContext } from '@/app/Components/Context/Data';

const PersonalDataComponent = () => {
    const [showPersonalData, setShowPersonalData] = useState<boolean>(false);
    const { firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        postalCode,
        setPostalCode,
        city,
        setCity } = useContext(DataContext);

    {/*Show Personal Data */ }
    const handlePersonalData = () => {
        setShowPersonalData(!showPersonalData)
    }



    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={`font-bold text-2xl ${showPersonalData ? 'text-black' : 'text-gray-400'}`}>

                    Personal Data
                </h1>
                <Button className="ml-auto" type="button" onClick={handlePersonalData}>{showPersonalData ? "^" : "+"}</Button>
            </div>
            <hr className='border-t-2 border-gray-600 my-2' />
            {showPersonalData && (
                <div>
                    <div className='flex flex-row gap-5'>
                        <div className="flex flex-col">

                            {/*Picture */}
                            <label htmlFor="picture" className="mb-1 font-medium">Picture</label>
                            <input
                                id="picture"
                                type="file"
                                className="border border-gray-300 p-2"
                            />
                        </div>

                        {/*First Name */}
                        <div className="flex flex-col">
                            <label htmlFor="FirstName" className="mb-1 font-medium">First Name</label>
                            <input
                                id="FirstName"
                                type="text"
                                className="border border-gray-300 p-2"
                                value={firstName}
                                onChange={(ev) => setFirstName(ev.target.value)} />
                        </div>
                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="LastName" className="mb-1 font-medium">Last Name</label>
                            <input
                                id="LastName"
                                type="text"
                                className="border border-gray-300 p-2"
                                value={lastName}
                                onChange={(ev) => setLastName(ev.target.value)} />
                        </div>
                    </div>

                    <div className='flex flex-row gap-5'>
                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="mb-1 font-medium">Email</label>
                            <input
                                id="Email"
                                type="email"
                                className="border border-gray-300 p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {/* Telephone */}
                        <div className="flex flex-col">
                            <label htmlFor="Telephone" className="mb-1 font-medium">Telephone</label>
                            <input
                                id="Telephone"
                                type="text"
                                className="border border-gray-300 p-2"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="Address" className="mb-1 font-medium">Address</label>
                        <input
                            id="Address"
                            type="text"
                            className="border border-gray-300 p-2"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className='flex flex-row gap-5'>
                        {/* Codice Postale */}
                        <div className="flex flex-col">
                            <label htmlFor="Codice Postale" className="mb-1 font-medium">Codice Postale</label>
                            <input
                                id="Codice Postale"
                                type="text"
                                className="border border-gray-300 p-2"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)} />
                        </div>
                        {/* City */}
                        <div className="flex flex-col">
                            <label htmlFor="City" className="mb-1 font-medium">City</label>
                            <input
                                id="City"
                                type="text"
                                className="border border-gray-300 p-2"
                                value={city}
                                onChange={(e) => setCity(e.target.value)} />
                        </div>
                    </div>

                    {/*Optional Fields */}
                    <OptionalFields />
                </div>
            )}


        </div>

    );
};

export default PersonalDataComponent;
