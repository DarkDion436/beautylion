interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-outline disabled:opacity-40"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded transition ${
              currentPage === page
                ? "bg-brand text-white"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn-outline disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}