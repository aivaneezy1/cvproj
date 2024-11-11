import React, { useState } from 'react'
import GeneralForm from '../GeneralForm'
import { Button } from '@/components/ui/button';
const FormationComponent = () => {
    const [showFormation, setShowFormation] = useState<boolean>(false);

    const handleShowFormation = () => {
        setShowFormation(!showFormation);
    }
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={`font-bold text-2xl ${showFormation ? 'text-black' : 'text-gray-400'}`}>

                    Formation
                </h1>
                <Button className="ml-auto" type="button" onClick={handleShowFormation}>{showFormation ? "^" : "+"}</Button>
            </div>
            <hr className='border-t-2 border-gray-600 my-2' />

            {showFormation && (
                <GeneralForm
                    dataField='Formation'
                    company='Institute'
                    city='City'
                />
            )}
        </div>
    )
}

export default FormationComponent
