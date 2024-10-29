// CvPicture.js
import React from 'react'
import Image from 'next/image'


const handlePersonalData = (icon: React.ReactNode, details: string, details2: string | null) => {
    return (
        <div className='flex flex-row  items-center gap-1 text-center mt-1'>
            {icon}
            <p className='whitespace-nowrap'>{details}</p>
            <p>{details2}</p>
        </div>
    )
}

const CvPicture = () => {
    return (
        <div className='flex flex-row otemgap-5 md:gap-10 p-5 bg-white rounded-lg shadow-md'>

            {/* Personal Data */}
            <div className='border-r-2 pb-4 pr-4 flex flex-col items-center md:items-start text-xs'>
                <div className='ml-5'>
                    <Image
                        src="/test.png"
                        alt="cv profile"
                        width={100}
                        height={100}
                        className='ml-5'
                    />
                    <h1 className='text-lg md:text-xl font-semibold text-gray-700 mb-4 whitespace-nowrap'>Personal Data</h1>
                </div>
                <div>
                    <div>
                        {/*First Name and Last Name */}
                        {handlePersonalData(<svg
                            className='w-2 h-2'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512">
                            <path fill="#74C0FC" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>, "George Boy", null)}

                        {/*Email Address */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>, "Email@address.com", null)}


                        {/*Phone Number */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>, "561-555-7689", null)}

                        {/*Address */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#74C0FC" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>, "Lake Otis Pkwy", null)}
                        {handlePersonalData("", "", "99507 test")}

                        {/*Country */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#74C0FC" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>, "United States", null)}

                        {/*Gender */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#74C0FC" d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 176c0 86.3-62.1 158.1-144 173.1l0 34.9 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-34.9C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0L616 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z" /></svg>, "Male", null)}

                        {/*Nationality */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#74C0FC" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" /></svg>, "American", null)}

                        {/*Status */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#74C0FC" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>, "Student", null)}

                        {/*License */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>, "license", null)}

                        {/*Persnonal Website */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>, "personalwebsite.com", null)}

                        {/*Linkedin */}
                        {handlePersonalData(<svg className='w-2 h-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#74C0FC" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>, " linkedin.com/in/alex-morgan-fake", null)}
                    </div>
                </div>
            </div>

            {/* Right side of the CV */}
            <div className='flex flex-col gap-5 text-center md:text-left pl-5 md:pl-0 whitespace-pre-line text-xs '>

                {/* Profile */}
                <div>
                    <h2 className='text-lg md:text-xl font-semibold text-gray-700'>Profile</h2>
                    <p className='text-gray-600 mt-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum nemo blanditiis qui error, hic doloribus quis cumque quod nulla illo debitis rem accusamus unde voluptates sed fugiat, exercitationem commodi.
                    </p>
                </div>

                {/* Education */}
                <div className='space-y-4'>
                    <div>
                        <h2 className='font-semibold text-gray-700'>Laurea Magistrale in Informatica</h2>
                        <span className='text-gray-500'>2023 Gen - 2021 Nov</span>
                        <p className='text-gray-600 mt-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius. Mollitia quibusdam recusandae, praesentium, soluta perferendis voluptates necessitatibus dolor temporibus, sunt delectus magni earum vitae laboriosam adipisci blanditiis eius quaerat!
                        </p>
                    </div>

                    <div>
                        <h2 className='font-semibold text-gray-700'>Laurea Magistrale in Economia</h2>
                        <span className='text-gray-500'>2023 Gen - 2021 Nov</span>
                        <p className='text-gray-600 mt-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius. Mollitia quibusdam recusandae, praesentium, soluta perferendis voluptates necessitatibus dolor temporibus, sunt delectus magni earum vitae laboriosam adipisci blanditiis eius quaerat!
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h2 className='font-semibold text-gray-700'>Senior IT Consultant</h2>
                    <span className='text-gray-500'>2023 Gen - 2021 Nov</span>
                    <p className='text-gray-600 mt-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius. Mollitia quibusdam recusandae, praesentium, soluta perferendis voluptates necessitatibus dolor temporibus, sunt delectus magni earum vitae laboriosam adipisci blanditiis eius quaerat!
                    </p>
                </div>
            </div>
        </div >

    )
}

export default CvPicture
