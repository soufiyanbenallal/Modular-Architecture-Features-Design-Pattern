import React from 'react'

export default function HeroComponent() {
  return (
    
    <div className="flex relative z-20 items-center overflow-hidden h-screen">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
                <p className="text-3xl my-6 text-center dark:text-white">
                🫡Hi, I&#x27;m soufiyan 🎱
                </p>
                <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                    This is demo a website provide modular architecture using blog as example 
                </h2>
                <div className="flex items-center justify-center mt-4">
                    <a href="https://www.buymeacoffee.com/soufiyan" target="_blank" rel="noreferrer" className=' ' >
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className='h-14 mt-6 relative' alt="Buy Me A Coffee" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
