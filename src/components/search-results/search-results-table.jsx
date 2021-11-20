import { FaFilter} from 'react-icons/fa';
import Pagination from '../shared/pagination';
import FilterTable from './filter-table';
import useToggle from '../../hooks/useToggle';
import MovieTable from '../shared/movie-table';

function SearchResultsTable({isFetching, isUninitialized, data, phrase, changePage}) {

    const [isfiltersshown, toggleisfiltersshown] = useToggle(false);
    
    const toggleList = (movieIndex, list) => {
        // const movies = [...searchResult];
        // movies[movieIndex][list] = !movies[movieIndex][list];
        // setsearchResult(movies);
    }

    if(isFetching) return (<></>);
    return (
        <div className="flex-1 bg-main-dark p-4">
            <div className="flex justify-between">
                <label className="text-white">Results for "{phrase}"</label>
                <button className="text-white lg:hidden" onClick={toggleisfiltersshown}><FaFilter/></button>
            </div>
            <div className={isfiltersshown ? 'block': 'hidden'}>
                <FilterTable inline="true" />
            </div>
            <MovieTable movies={data.results} toggleList={toggleList} />
            <Pagination currentPage={data.page} pageSize={data.pageSize} totalResults={data.total_results} changePage={changePage} totalPages={data.total_pages} />
        </div>
    )
}

export default SearchResultsTable;