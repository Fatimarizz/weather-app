import React, { useState } from 'react';
import { Switch } from '@headlessui/react'

export default function Header({enable,setEnable}) {
   

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className={enable ? 'bg-gradient-to-r from-gray-800 to-purple-900  py-3 border-b border-b-gray-600' : 'bg-gradient-to-r from-blue-200 to-purple-100 py-3 border-b border-b-gray-300'}>
            <div className='flex justify-center items-center '>
            <div className='flex-grow'></div> 
                <h3 className={classNames(enable ? 'text-white ' : 'text-black', "text-center font-bold text-xl")}>
                    Code Ivy - Weather App
                </h3>

                <div className='flex-grow'></div> 
                <div className='flex justify-end px-9 mt-2'>
                    <Switch
                        checked={enable}
                        onChange={setEnable}
                        className={classNames(
                            enable ? 'bg-indigo-600' : 'bg-gray-300',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out dark:bg-red-300 '
                        )}
                    >
                        <span className='sr-only'>toggle </span>
                        <span
                            aria-hidden='true'
                            className={classNames(
                                enable ? 'translate-x-5 bg-gray-200' : 'translate-x-0 bg-gray-400',
                                'pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow ring-0 transition duration-200 ease-in-out'
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
