"use client"
import React, { useState } from 'react';
import PersonalDataComponent from './RightSide/PersonalData/PersonalData';
import ProfileComponent from './RightSide/Profile/Profile';
const GenerateCvComponent = () => {

    return (
        <div className="grid grid-cols-2 h-screen">
            {/* Left side - User input form */}
            <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
                <form className="space-y-4">
                    <PersonalDataComponent />
                    <ProfileComponent />
                </form>
            </div>

            {/* Right side - CV Preview */}
            <div className="bg-blue-100 p-4">
                <h2 className="text-xl font-semibold mb-4">CV Preview</h2>
                <div className="space-y-2">
                    {/* <p><strong>Name:</strong> {personalData.name || 'Your Name'}</p>
                    <p><strong>Email:</strong> {personalData.email || 'Your Email'}</p>
                    <p><strong>Phone:</strong> {personalData.phone || 'Your Phone Number'}</p> */}
                </div>
            </div>
        </div>
    );
};

export default GenerateCvComponent;
