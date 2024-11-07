"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import SkillsForm from '../SkillsForm';
const CompetenceComponent = () => {
    const [showCompetence, setShowCompetence] = useState<boolean>(false);

    const handleShowCompetence = () => {
        setShowCompetence(!showCompetence);
    }
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={`font-bold text-2xl ${showCompetence ? 'text-black' : 'text-gray-400'}`}>

                    Competence
                </h1>
                <Button className="ml-auto" type="button" onClick={handleShowCompetence}>{showCompetence ? "^" : "+"}</Button>

            </div>
            <hr className='border-t-2 border-gray-600 my-2' />
            {showCompetence && (
                <SkillsForm
                    dataField='Competence' />
            )}
        </div>
    )
}

export default CompetenceComponent
