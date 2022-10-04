import React from 'react'

export default function LatestNewsComponent() {
  return (
    <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
  <div className="mb-12 text-left md:text-center">
    <h2 className="mb-2 text-3xl font-extrabold leading-tight text-secondary-1">Skcript Blog</h2>
    <p className="text-lg text-gray-500">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p>
  </div>
  <div className="flex flex-col space-y-12 divide-y divide-gray-200">
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">Process Documents Using Artificial Intelligence For RPA Bots</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">
        Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
        Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
      </p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">Implement Dark Mode in Your Android App</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">
        Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
        Dark Mode.
      </p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">Why is Mental Health one of the Important Issues to Address?</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">
        Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the
        work sector but also in daily living.
      </p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">Pattern Matching In Elixir</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">
        Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your
        code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!
      </p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">3 things you should change during your focus group interview</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-yellow-200 md:text-3xl">
        <a href="#" className="text-secondary-1 hover:text-purple-700">Using Webpack with React Typescript</a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-300">
        Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript
        module that you can easily use in any other project.
      </p>
      <a href="#" className="text-yellow-200">Continue Reading</a>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
  </div>
</section>

  )
}
