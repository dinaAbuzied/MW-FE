import { useState } from 'react';
import { useParams } from "react-router-dom";
import SearchResultsTable from './search-results-table';
import FilterTable from './filter-table';
import Header from '../shared/header/header';
// import MovieDetails from './movie-details';
import { useGetLongMovieListQuery } from '../../service/search';

function SearchResults() {
    const [currentPage, setCurrentPage] = useState(1);
    const params = useParams();
    const {isFetching, error, data = [], isUninitialized} = useGetLongMovieListQuery({query: params.phrase, page: currentPage}, {
        skip: !params.phrase
    });

    const changePage = (page) => {
        console.log(page);
        setCurrentPage(page);
    }

    return (
        <>
        <Header/>
        <main className="p-4 flex">
            <SearchResultsTable isFetching={isFetching} isUninitialized={isUninitialized} data={data} phrase={params.phrase} changePage={changePage} />
            {
                isFetching ? (<></>) : (
                    <div className="xl:w-4/12 w-3/12 max-w-md hidden lg:block pl-4">
                        <FilterTable/>
                    </div>
                )
            }
        </main>
        {/* <MovieDetails /> */}
        </>
    );
}


export default SearchResults;