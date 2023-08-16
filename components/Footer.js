import React from 'react';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Footer({ enable }) {

  return (
    <div className={classNames('border-t ', enable ? 'text-white bg-gradient-to-r from-gray-800 to-purple-900  border-t-gray-600' : 'text-black bg-gradient-to-r from-blue-200 to-purple-100  border-t-gray-300')}>
      <div className="p-5 space-y-3">
        <p className="text-center text-md leading-5">
          Take Home Test for Code Ivy - Built By Fatima Rizvi.
        </p>
        <p className="text-center text-sm leading-5">
          &copy; 2023 All rights reserved
        </p>
        
      </div>
    </div>
  )
}
