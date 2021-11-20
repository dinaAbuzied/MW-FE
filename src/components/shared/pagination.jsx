/* This example requires Tailwind CSS v2.0+ */
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsChevronBarLeft, BsChevronBarRight} from 'react-icons/bs';

export default function Pagination({currentPage, pageSize, totalResults, totalPages, changePage}) {
  const startIndex = ((currentPage - 1) * pageSize) + 1;
  const endIndex = currentPage * pageSize > totalResults ? totalResults : currentPage * pageSize;

  return (
    <div className="px-0 py-3 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={()=>{changePage(currentPage - 1)}}
          disabled={currentPage <= 1}
          className="relative inline-flex items-center px-3 py-1 text-sm font-medium rounded-md text-white disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
        >
          Previous
        </button>
        <button
          onClick={()=>{changePage(currentPage + 1)}}
          disabled={currentPage >= totalPages}
          href="www.imdb.com"
          className="ml-3 relative inline-flex items-center px-3 py-1 text-sm font-medium rounded-md text-white disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">{startIndex}</span> to <span className="font-medium">{endIndex}</span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm items-center" aria-label="Pagination">
            <p className="text-sm text-white mr-3">
              Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
            </p>
            <button
              onClick={()=>{changePage(1)}}
              disabled={currentPage <= 1}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-main disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
            >
              <span className="sr-only">First</span>
              <BsChevronBarLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={()=>{changePage(currentPage - 1)}}
              disabled={currentPage <= 1}
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-main disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
            >
              <span className="sr-only">Previous</span>
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={()=>{changePage(currentPage + 1)}}
              disabled={currentPage >= totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-white hover:bg-main disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
            >
              <span className="sr-only">Next</span>
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={()=>{changePage(totalPages)}}
              disabled={currentPage >= totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-md text-sm font-medium text-white hover:bg-main disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-transparent"
            >
              <span className="sr-only">Last</span>
              <BsChevronBarRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
