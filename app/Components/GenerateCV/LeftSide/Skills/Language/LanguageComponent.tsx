import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import SkillsForm from '../SkillsForm';
const LanguageComponent = () => {
    const [showLang, setShowLang] = useState<boolean>(false);

    const handleShowLang = () => {
        setShowLang(!showLang);
    }
    return (
        <div>
            <hr className='border-t-2 border-gray-600 my-2' />
            <div className='flex flex-row items-center gap-2'>
                <h1 className={`font-bold text-2xl ${showLang ? 'text-black' : 'text-gray-400'}`}>

                    Langauge
                </h1>
                <Button className="ml-auto" type="button" onClick={handleShowLang}>{showLang ? "^" : "+"}</Button>

            </div>
            <hr className='border-t-2 border-gray-600 my-2' />
            {showLang && (
                <SkillsForm
                    dataField='Language' />
            )}
        </div>
    )
}

export default LanguageComponent
