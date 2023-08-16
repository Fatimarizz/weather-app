import { XCircleIcon } from '@heroicons/react/20/solid';
import React, { useState, useEffect } from 'react';

export default function Alert({ text }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="rounded-md bg-red-50 p-4 shadow-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
