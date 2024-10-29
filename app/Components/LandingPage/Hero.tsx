// HeroComponent.js
import React from 'react'
import { Button } from '@/components/ui/button'
import CvPicture from './CvPicture/CvPicture'

const HeroComponent = () => {
    return (
        <div className='flex justify-center items-center mt-10 p-5'>
            <div className='flex flex-col lg:flex-row w-full  sm:w-10/12 bg-gray-100 rounded-lg shadow-lg p-5 md:p-10'>

                {/* Left side of the hero */}
                <div className='flex-1 flex flex-col space-y-5 p-5 text-center md:text-left'>
                    <h2 className='font-bold text-3xl md:text-5xl text-gray-800'>Free Online CV Maker</h2>
                    <p className='text-base md:text-lg text-gray-600'>Create your professional CV online with ease.</p>
                    <Button className='bg-purple-600 text-white rounded-lg px-6 py-3 max-w-xs mx-auto md:mx-0'>
                        Create a CV
                    </Button>
                </div>

                {/* Right side of the hero */}
                <div className='flex-1 mt-10 md:mt-0 '>
                    <CvPicture />
                </div>
            </div>
        </div>
    )
}

export default HeroComponent
