"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const data = [...Array(100).keys()]; // Example data (100 items)

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Create an array with page numbers
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Render the current page's items */}

      <ProjectCard />

      {/* Pagination controls */}
      <div className="bg-dark-navy shadow-prt-shadow p-[40px] flex justify-center items-center">
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {/* Render page number buttons */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`page-number ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Styling for the pagination */}
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          //   margin-top: 20px;
        }
        .page-number {
          margin: 0 5px;

          height: 30px;
          width: 30px;
          border: 1px solid #70ba65;
          background-color: #111;
          cursor: pointer;
          border-radius: 50%;
          font-size: 11px;
        }
        .page-number.active {
          background-color: #70ba65;
          color: white;
        }
        .page-number:hover:not(.active) {
          background-color: #70ba65;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
