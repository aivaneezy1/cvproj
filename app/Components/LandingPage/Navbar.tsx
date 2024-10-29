import React from 'react'

const NavbarComponent = () => {
    return (
        <div className='flex  items-center text-white bg-gray-500 p-4 '>
            <div>
                Logo
            </div>
            <div className='flex flex-row ml-auto gap-5 '>
                <div>Github</div>
                <div>Login</div>
            </div>
        </div>
    )
}

export default NavbarComponent
