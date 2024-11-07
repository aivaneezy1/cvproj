import React, { useState } from 'react'
import SliderSizes from './Slider'
import { Button } from '@/components/ui/button';

const levelLabels = [
    "Base",
    "Elementary",
    "Intermediate",
    "Advanced",
    "Excellent"
];
interface SkilsFormProp {
    dataField: string
}

const SkillsForm = ({ dataField }: SkilsFormProp) => {
    const [sliderValue, setSliderValue] = useState<number>(0);


    const handleSliderChange = (value: number) => {
        setSliderValue(value);
    };


    return (
        <div className='flex flex-col border-2 rounded-lg p-4 '>
            {/*to change to a prop */}
            <div className='flex flex-col ml-2'>
                <label htmlFor='competence'>{dataField}</label>
                <input id="competence" className="border border-gray-300 p-2 rounded-md " />

                {/*Slider    */}
                <div className='mt-5'>
                    <label>Level</label>
                    <div className='flex flex-row  items-center gap-3 '>
                        <SliderSizes
                            levelLabels={levelLabels}
                            handleSliderChange={handleSliderChange}
                            sliderValue={sliderValue}

                        />
                        <h2>{levelLabels[(sliderValue / 25)]}</h2>
                    </div>
                </div>
            </div>

            {/*Button */}
            <div className='flex flex-row ml-auto gap-3'>
                <Button>Delete</Button>
                <Button>Add</Button>
            </div>
        </div>
    )
}

export default SkillsForm
