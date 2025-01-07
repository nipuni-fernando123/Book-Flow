import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import cover from "./Images/cover.jpg"; // Placeholder for book cover

function ViewBook() {
  const [book, setBook] = useState(null); // State to store book details
  const [error, setError] = useState(null); // State for error handling
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();

  // Fetch book details on component mount
  useEffect(() => {
    axios
      .get(`http://localhost:8082/select/${id}`)
      .then((res) => {
        if (res.data.length > 0) {
          setBook(res.data[0]); // Assuming the response contains an array
          console.log(book);
        } else {
          setError("Book not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch book data");
      });
  }, [id]);

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
        <div className="text-red-500 text-xl font-bold">{error}</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
        <div className="text-blue-500 text-xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-screen bg-gray-200 h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-white border border-gray-200 rounded-xl h-fit shadow-md w-full mx-[600px] px-[45px]">
        <div className="text-blue-950 text-center text-2xl font-bold mb-4 mt-4">
          {book.title || "No title available"}
        </div>

        <div className="text-md text-black text-justify mb-4">
          {book.description || "No description available"}
        </div>

        <div className="flex justify-between">
          <div className="mt-4 mb-4">
            
            
          <img
  src={book.book_cover ? `http://localhost:8082/uploads/${book.book_cover}` : cover}
  alt="Book Cover"
  className="h-[300px] w-56 object-cover"
/>


          </div>
          <div className="mt-4 mb-4 px-4 w-[450px]">
            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">ISBN</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.isbn || "N/A"}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">Author</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.author || "N/A"}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">Category</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.category || "N/A"}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">Edition</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.edition || "N/A"}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">Publisher</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.publisher || "N/A"}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">
                Publication Date
              </div>
              <div className="text-gray-500 text-lg font-semibold">
                {(book.publication_date && book.publication_date !== "0000-00-00"  ? new Date(book.publication_date).toISOString().split('T')[0]: '') || 'N/A'}
              </div>
            </div>

            <div className="mb-2 flex justify-between">
              <div className="text-lg text-black font-bold">Price</div>
              <div className="text-gray-500 text-lg font-semibold">
                {book.price ? `$ ${book.price}` : "N/A"}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8 mb-4">
        <Link to="/" className="w-32">
  <button className="w-full bg-green-800 p-1 rounded-md hover:bg-slate-600">
    <div className="text-decoration-none font-semibold text-white text-md">
      Back
    </div>
  </button>
</Link>

          <button
            className="w-32 bg-blue-950 p-1 rounded-md hover:bg-slate-600 mr-4"
            onClick={() => navigate(`/update/${id}`)}
          >
            <div className="text-white font-semibold text-md">Edit</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
