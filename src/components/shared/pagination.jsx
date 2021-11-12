/* This example requires Tailwind CSS v2.0+ */
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Pagination() {
  return (
    <div className="px-0 py-3 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="www.imdb.com"
          className="relative inline-flex items-center px-3 py-1 text-sm font-medium rounded-md text-white"
        >
          Previous
        </a>
        <a
          href="www.imdb.com"
          className="ml-3 relative inline-flex items-center px-3 py-1 text-sm font-medium rounded-md text-white"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="www.imdb.com"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-main"
            >
              <span className="sr-only">Previous</span>
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-success border-success text-white", Default: "text-white  hover:bg-main" */}
            <a
              href="www.imdb.com"
              aria-current="page"
              className="z-10 bg-success border-success text-white font-bold rounded-md relative inline-flex items-center px-3 py-1 mx-0.5 border text-sm"
            >
              1
            </a>
            <a
              href="www.imdb.com"
              className="text-white hover:bg-main rounded-md relative inline-flex items-center px-3 py-1 text-sm font-medium mx-0.5"
            >
              2
            </a>
            <a
              href="www.imdb.com"
              className="text-white hover:bg-main rounded-md relative inline-flex items-center px-3 py-1 text-sm font-medium mx-0.5"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-3 py-1 text-sm font-medium text-main-light rounded-md mx-0.5">
              ...
            </span>
            <a
              href="www.imdb.com"
              className="text-white hover:bg-main rounded-md relative inline-flex items-center px-3 py-1 text-sm font-medium mx-0.5"
            >
              8
            </a>
            <a
              href="www.imdb.com"
              className="text-white hover:bg-main rounded-md relative inline-flex items-center px-3 py-1 text-sm font-medium mx-0.5"
            >
              9
            </a>
            <a
              href="www.imdb.com"
              className="text-white hover:bg-main rounded-md relative inline-flex items-center px-3 py-1 text-sm font-medium mx-0.5"
            >
              10
            </a>
            <a
              href="www.imdb.com"
              className="relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-white hover:bg-main"
            >
              <span className="sr-only">Next</span>
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
