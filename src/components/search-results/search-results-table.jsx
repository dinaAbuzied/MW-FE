import { useSelector } from 'react-redux';
import { FaFilter } from 'react-icons/fa';
import Pagination from '../shared/pagination';
import FilterTable from './filter-table';
import useToggle from '../../hooks/useToggle';
import MovieTable from '../shared/movie-table';
import { useToggleListMutation } from '../../service/movie-list';

function SearchResultsTable({ isFetching, isUninitialized, data, query, changePage }) {

    const [isfiltersshown, toggleisfiltersshown] = useToggle(false);

    const [toggleList, { isLoading: toggleLoading, error: toggleError, isSuccess: toggleSuccess }] = useToggleListMutation();

    const authenticated = useSelector((state) => state.user.authenticated);
    const btnClicked = (e, movieID, list) => {
        e.preventDefault();
        if (authenticated) {
            toggleList({ list, movieID, query })
        }
    }

    if (isFetching) return (<></>);
    return (
        <div className="flex-1 bg-main-dark p-4">
            <div className="flex justify-between">
                <label className="text-white">Results for "{query.query}"</label>
                <button className="text-white lg:hidden" onClick={toggleisfiltersshown}><FaFilter /></button>
            </div>
            <div className={isfiltersshown ? 'block' : 'hidden'}>
                <FilterTable inline="true" />
            </div>
            <MovieTable movies={data.results} toggleList={btnClicked} actionsDisabled={!authenticated} />
            <Pagination currentPage={data.page} pageSize={data.pageSize} totalResults={data.total_results} changePage={changePage} totalPages={data.total_pages} />
        </div>
    )
}

export default SearchResultsTable;