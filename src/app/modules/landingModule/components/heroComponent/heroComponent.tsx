import React from 'react'

export default function HeroComponent() {
  return (
    
    <div className="flex relative z-20 items-center overflow-hidden h-screen">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
                <h1 className="text-[9rem] my-6 dark:text-white uppercase tracking-widest whitespace-pre-line leading-[1]">
                basic Project
                </h1>
                <p className="max-w-3xl text-xl md:text-xl font-bold dark:text-white text-gray-800 text-center py-2">
                    A guide demo to start you your modular project 
                </p>
            </div>
        </div>
    </div>
  )
}
