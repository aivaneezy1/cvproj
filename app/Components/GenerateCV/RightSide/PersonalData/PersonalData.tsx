"use client"
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

enum FIELDNAME {
    DATEBIRTH = 0,
    PLACEBIRTH = 1,
    GENDER = 2,
    NATIONALITY = 3,
    CIVIL = 4,
    LICENSE = 5,

}
const PersonalDataComponent = () => {
    const [showPersonalData, setShowPersonalData] = useState<boolean>(false);

    {/*Optional state */ }
    const [showDateOfBirth, setShowDateBirth] = useState<boolean>(false);
    const [showPlaceOfBirth, setShowPlaceBirth] = useState<boolean>(false);
    const [showGender, setShowGender] = useState<boolean>(false);
    const [showNationality, setShowNationality] = useState<boolean>(false);
    const [showCivil, setShowCivil] = useState<boolean>(false);
    const [showLicense, setShowLicense] = useState<boolean>(false);

    {/*Optionals hide button */ }
    const [dateOfBirthHideButton, setDateOfBirthHideButton] = useState<boolean>(false);
    const [placeOfBirthHideButton, setPlaceOfBirthHideButton] = useState<boolean>(false);
    const [genderHideButton, setGenderHideButton] = useState<boolean>(false);
    const [nationalityHideButton, setNationalityHideButton] = useState<boolean>(false);
    const [civilHideButton, setCivilHideButton] = useState<boolean>(false);
    const [licenseHideButton, setLicenseHideButton] = useState<boolean>(false);

    {/*Reference to close the element if click anywhere in the webpage */ }
    const buttonContainerRef = useRef<HTMLDivElement>(null);




    {/*Show Personal Data */ }
    const handlePersonalData = () => {
        setShowPersonalData(!showPersonalData)
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

    {/*3 dots button  */ }
    const handleRenderOptional = (fieldName: FIELDNAME) => {

        const isVisible =
            (fieldName === FIELDNAME.DATEBIRTH && dateOfBirthHideButton) ||
            (fieldName === FIELDNAME.PLACEBIRTH && placeOfBirthHideButton) ||
            (fieldName === FIELDNAME.GENDER && genderHideButton) ||
            (fieldName === FIELDNAME.NATIONALITY && nationalityHideButton) ||
            (fieldName === FIELDNAME.CIVIL && civilHideButton) ||
            (fieldName === FIELDNAME.LICENSE && licenseHideButton)

        return (
            <div ref={buttonContainerRef}>
                <button type="button" onClick={() => handleHideOptionalsField(fieldName)}>
                    <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 512">
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" /></svg>

                </button>
                {isVisible && (
                    <div className='  absolute top-8 -right-24 bg-gray-100 shadow-lg px-10 py-2 rounded-lg cursor-pointer hover:bg-gray-200'>
                        <div className=''>
                            <button
                                onClick={() => handleRemoveOptionalField(fieldName)}
                                className='flex flex-row gap-2 justify-between'>
                                <svg
                                    className="w-5 h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    {/*Show remove button if 3 dots is clicked */ }
    const handleHideOptionalsField = (fieldName: FIELDNAME) => {
        setDateOfBirthHideButton(false);
        setPlaceOfBirthHideButton(false);
        setGenderHideButton(false);
        setNationalityHideButton(false);
        setCivilHideButton(false);
        setLicenseHideButton(false);
        switch (fieldName) {
            case FIELDNAME.DATEBIRTH:
                setDateOfBirthHideButton(true);
                break;
            case FIELDNAME.PLACEBIRTH:
                setPlaceOfBirthHideButton(true);
                break;
            case FIELDNAME.GENDER:
                setGenderHideButton(true);
                break;
            case FIELDNAME.NATIONALITY:
                setNationalityHideButton(true);
                break;
            case FIELDNAME.CIVIL:
                setCivilHideButton(true);
                break;
            case FIELDNAME.LICENSE:
                setLicenseHideButton(true);
                break;
        }
    }

    {/*Hide the field if the button is clicked */ }
    const handleRemoveOptionalField = (fieldName: FIELDNAME) => {
        switch (fieldName) {
            case FIELDNAME.DATEBIRTH:
                setShowDateBirth(!showDateOfBirth);
                setDateOfBirthHideButton(false);
                break;
            case FIELDNAME.PLACEBIRTH:
                setShowPlaceBirth(!showPlaceOfBirth);
                setPlaceOfBirthHideButton(false)
                break;

            case FIELDNAME.GENDER:
                setShowGender(!showGender)
                setGenderHideButton(false)
                break;
            case FIELDNAME.NATIONALITY:
                setShowNationality(!showNationality);
                setNationalityHideButton(false);
                break;
            case FIELDNAME.CIVIL:
                setShowCivil(!showCivil);
                setCivilHideButton(false);
                break;
            case FIELDNAME.LICENSE:
                setShowLicense(!showLicense);
                setLicenseHideButton(false);
                break;
        }
    }


    {/*Event listener for mousedown */ }
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonContainerRef.current && !buttonContainerRef.current.contains(event.target as Node)) {
                setDateOfBirthHideButton(false);
                setPlaceOfBirthHideButton(false);
                setGenderHideButton(false);
                setNationalityHideButton(false);
                setCivilHideButton(false);
                setLicenseHideButton(false);
            }

        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

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
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="Dateofbirth" className="mb-1 font-medium">Date of birth</label>

                                {/*Remove field button */}
                                {handleRenderOptional(0)}

                            </div>
                            <input id="Dateofbirth" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}

                    {showPlaceOfBirth && (
                        <div className="flex flex-col">
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="Placeofbirth" className="mb-1 font-medium">Place of birth</label>

                                {/*Remove field button */}
                                {handleRenderOptional(1)}

                            </div>
                            <input id="Placeofbirth" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}

                    {showGender && (
                        <div className="flex flex-col">
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="Gender" className="mb-1 font-medium">Gender</label>

                                {/*Remove field button */}
                                {handleRenderOptional(2)}

                            </div>
                            <input id="Gender" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}


                    {showNationality && (
                        <div className="flex flex-col">
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="Nationality" className="mb-1 font-medium">Nationality</label>

                                {/*Remove field button */}
                                {handleRenderOptional(3)}

                            </div>
                            <input id="Nationality" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}

                    {showCivil && (
                        <div className="flex flex-col">
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="Civil" className="mb-1 font-medium">Civil Status</label>

                                {/*Remove field button */}
                                {handleRenderOptional(4)}

                            </div>
                            <input id="Civil" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}

                    {showLicense && (
                        <div className="flex flex-col">
                            <div className='flex justify-between relative mt-5'>
                                <label htmlFor="License" className="mb-1 font-medium">License</label>

                                {/*Remove field button */}
                                {handleRenderOptional(5)}

                            </div>
                            <input id="License" type="text" className="border border-gray-300 p-2" />
                        </div>
                    )}









                    {/*Optionals Field*/}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                        {handleOptionalsData("Date of Birth", setShowDateBirth)}
                        {handleOptionalsData("Place of Birth", setShowPlaceBirth)}
                        {handleOptionalsData("Gender", setShowGender)}
                        {handleOptionalsData("Nationality", setShowNationality)}
                        {handleOptionalsData("Civil Status", setShowCivil)}
                        {handleOptionalsData("License", setShowLicense)}
                    </div>

                </div>
            )}


        </div>

    );
};

export default PersonalDataComponent;
