"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import TextEditor from './TextEditor';
const ProfileComponent = () => {
    const [showProfileData, setShowProfileData] = useState<boolean>(false);

    const handleProfileData = () => {
        setShowProfileData(!showProfileData);
    }
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={showProfileData ? 'text-black' : 'text-gray-500'}>
                    Profile
                </h1>
                <Button className="ml-auto" type="button" onClick={handleProfileData}>{showProfileData ? "^" : "+"}</Button>
            </div>
            <hr className='border-t-2 border-gray-600 my-2' />

            {showProfileData && (
                <TextEditor />
            )}

        </div>
    )
}

export default ProfileComponent
