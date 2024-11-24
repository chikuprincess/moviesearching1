import React from "react"; // Import React for JSX
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg ${
          currentPage === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"
        }`}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-400"
        }`}
      >
        Next
      </button>
    </div>
  );
};

// Prop validation with PropTypes
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired, // currentPage must be a number
  totalPages: PropTypes.number.isRequired, // totalPages must be a number
  onPageChange: PropTypes.func.isRequired, // onPageChange must be a function
};

export default Pagination;
