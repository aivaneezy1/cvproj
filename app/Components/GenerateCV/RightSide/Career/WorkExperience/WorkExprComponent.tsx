"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import GeneralForm from '../GeneralForm';
const WorkExprComponent = () => {
    const [showWorkExpr, setShowWorkExpr] = useState<boolean>(false);
    const handleShowWorkExpr = () => {
        setShowWorkExpr(!showWorkExpr);
    }
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={`font-bold text-2xl ${showWorkExpr ? 'text-black' : 'text-gray-400'}`}>

                    Work Experience
                </h1>
                <Button className="ml-auto" type="button" onClick={handleShowWorkExpr}>{showWorkExpr ? "^" : "+"}</Button>
            </div>
            <hr className='border-t-2 border-gray-600 my-2' />
            {showWorkExpr && (
                <GeneralForm
                    dataField='Position'
                    company='Company'
                    city='city' />
            )}
        </div>
    )
}

export default WorkExprComponent
