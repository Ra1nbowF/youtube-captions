'use client'

export function Search() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex w-full">
      <div className="flex flex-grow max-w-[728px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
        />
        <button type="submit" className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
          >
            <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
          </svg>
        </button>
      </div>
    </form>
  )
} 