import React, { useState, useEffect, useCallback } from "react"; // React import for JSX
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Use useCallback to memoize the function
  const searchMovies = useCallback(async () => {
    if (!query.trim()) return;
    const data = await fetchMovies(query, currentPage);
    setMovies(data.Search || []);
    setTotalPages(Math.ceil(data.totalResults / 10));
  }, [query, currentPage]); // Dependencies for searchMovies

  useEffect(() => {
    searchMovies();
  }, [searchMovies]); // Correctly include the memoized function in the dependencies

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Movie Searching App</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />
      <div className="grid grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
