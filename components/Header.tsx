import Image from "next/image"
import { Search } from "@/components/Search"

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex items-center px-4 h-14">
      <div className="flex w-full max-w-[1800px] mx-auto items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/youtube-logo.svg"
            alt="YouTube" 
            width={90} 
            height={20}
            className="cursor-pointer"
          />
        </div>

        <div className="flex-grow max-w-[728px] mx-4">
          <Search />
        </div>

        <div className="w-[225px] flex justify-end">
          {/* Add icons here later if needed */}
        </div>
      </div>
    </header>
  )
}

