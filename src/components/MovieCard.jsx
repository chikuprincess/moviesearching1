import React from "react"; // Ensure React is imported for JSX
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"} // Ensure placeholder is accessible
        alt={movie.Title}
        className="h-48 w-full object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold">{movie.Title}</h2>
      <p className="text-sm text-gray-500">Year: {movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-blue-500 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

// Prop validation using PropTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired, // Poster should be a string
    Title: PropTypes.string.isRequired, // Title should be a string
    Year: PropTypes.string.isRequired, // Year should be a string
    imdbID: PropTypes.string.isRequired, // imdbID should be a string
  }).isRequired,
};

export default MovieCard;
