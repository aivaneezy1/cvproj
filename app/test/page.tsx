import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const page = () => {
    return (
        <div className='mt-20 flex justify-center items-center flex-col'>
            <form className='flex flex-col gap-10'>
                <input type="email" placeholder='email' className='px-4 py-2 rounded border-2 border-black' />
                <input type="password" placeholder='password' className='px-4 py-2 rounded border-2 border-black' />
                <input type="password" placeholder='Confirm password' className='px-4 py-2 rounded border-2 border-black' />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default page
