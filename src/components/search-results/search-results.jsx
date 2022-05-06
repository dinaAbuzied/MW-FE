import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import SearchResultsTable from './search-results-table';
import FilterTable from './filter-table';
import Header from '../shared/header/header';
import { useGetLongMovieListQuery } from '../../service/search';
import { gotoPage, newSearch } from '../../service/query';

function SearchResults() {
    const params = useParams();
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);

    const { isFetching, error, data = { results: [] }, isUninitialized } = useGetLongMovieListQuery(query, {
        skip: query.query === '',
    });

    if (query.query === '' && params.phrase) {
        console.log('new search')
        dispatch(newSearch(params.phrase));
    }

    return (
        <>
            <Header />
            {
                //TODO: add empty search message
                isUninitialized ? (<></>) : (
                    <main className="p-4 flex">
                        <SearchResultsTable isFetching={isFetching} isUninitialized={isUninitialized} data={data} query={query} changePage={(page) => dispatch(gotoPage(page))} />
                        {
                            isFetching || isUninitialized ? (<></>) : (
                                <div className="xl:w-4/12 w-3/12 max-w-md hidden lg:block pl-4">
                                    <FilterTable />
                                </div>
                            )
                        }
                    </main>
                )
            }
        </>
    );
}


export default SearchResults;