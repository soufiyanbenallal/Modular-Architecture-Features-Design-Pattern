import React from 'react'

export default function HeroComponent() {
  return (
    
    <div className="flex relative z-20 items-center overflow-hidden h-screen"
    style={{
        background:'url(/bg-hero.jpg)'
    }}
    >
        <div className="container mx-auto px-6 flex flex-col  relative py-4">
            <div className="flex flex-col">
                <h1 className="text-[9rem] my-6 max-w-lg dark:text-white font-mono font-bold uppercase tracking-widest whitespace-pre-line leading-[1]">
                basic Project
                </h1>
                <p className="text-xl md:text-xl  text-transparent bg-clip-text bg-gradient-to-r from-secondary-3 via-secondary-2 to-secondary-1 py-2">
                    A guide demo to start you your modular project 
                </p>
            </div>
        </div>
    </div>
  )
}
