import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Sidebar() {
  return (
    <div className='p-2 md:p-10 py-6 overflow-y-auto'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <DocumentMagnifyingGlassIcon className='h-16 md:w-16' />
        <h1 className="hidden md:inline text-3xl mt-2">Web Scraper</h1>
        <h2 className="hidden md:inline text-xs mt-2">Scraping the unscrapable</h2>
      </div>
      <ul>
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
      </ul>
    </div>
  )
}

export default Sidebar
