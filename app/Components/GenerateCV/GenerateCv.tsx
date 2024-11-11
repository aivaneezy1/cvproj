"use client"
import React, { useState } from 'react';
import PersonalDataComponent from './LeftSide/PersonalData/PersonalData';
import ProfileComponent from './LeftSide/Profile/Profile';
import FormationComponent from './LeftSide/Career/Formation/FormationComponent';
import WorkExprComponent from './LeftSide/Career/WorkExperience/WorkExprComponent';
import CompetenceComponent from './LeftSide/Skills/Competence/CompetenceComponent';
import LanguageComponent from './LeftSide/Skills/Language/LanguageComponent';
import RightSideComponent from './RightSide/RightSide';
const GenerateCvComponent = () => {

    return (
        <div className="grid grid-cols-2 h-screen">
            {/* Left side - User input form */}
            <div className="bg-gray-100 p-4">
                <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
                <form className="space-y-4">
                    <PersonalDataComponent />
                    <ProfileComponent />
                    <FormationComponent />
                    <WorkExprComponent />
                    <CompetenceComponent />
                    <LanguageComponent />
                </form>
            </div>

            {/* Right side - CV Preview */}
            <div className="bg-blue-100 p-4 ">
                <h2 className="text-xl font-semibold mb-4">CV Preview</h2>
                <div className="space-y-2">
                    <RightSideComponent />
                </div>
            </div>
        </div>
    );
};

export default GenerateCvComponent;
