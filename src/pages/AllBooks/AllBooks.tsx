/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { setBookData } from "../../redux/features/books/bookSlice";

interface IBooks {
  _id: number;
  image: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BookCardProps {
  book: IBooks;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/book-details/${book._id}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={book?.image} alt="Book Image" className="w-full h-28 mb-4" />
        <h2 className="text-xl font-bold mb-2">Title: {book.title}</h2>
        <p className="text-gray-700 mb-2">Author: {book.author}</p>
        <p className="text-gray-700 mb-2">Genre: {book.genre}</p>
        <p className="text-gray-700">
          Publication Date: {book.publicationDate}
        </p>
      </div>
    </Link>
  );
};

const AllBooks = () => {
  const year = new Date().getFullYear();
  const { searchTerm } = useAppSelector((state) => state.book);
  const dispatch = useDispatch();
  const handleSearch = (value: string) => {
    dispatch(setBookData(value));
  };
  const handleGenreChange = (e: string) => {
    dispatch(setBookData(e));
  };

  const handlePublicationYearChange = (e: string) => {
    dispatch(setBookData(e));
  };

  const { data, isLoading, error } = useGetBooksQuery(
    {
      searchTerm: `${searchTerm}`,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className="mx-5">
      <h1 className="uppercase text-xl font-semibold"> All the books</h1>

      <div className="flex justify-between items-center">
        <div>
          {" "}
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            name=""
            id=""
            className="border-2 rounded p-2"
            placeholder="search books"
          />
        </div>

        <div className="flex">
          <div>
            <label htmlFor="genre" className="block font-medium mb-1">
              Genre:
            </label>
            <select
              id="genre"
              onChange={(e) => handleGenreChange(e.target.value)}
              className="border-gray-300 border p-2 rounded-md"
            >
              <option value="">All</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="comic">Comic</option>
            </select>
          </div>

          <div className="ml-4">
            <label htmlFor="publicationYear" className="block font-medium mb-1">
              Year :
            </label>
            <select
              id="publicationYear"
              onChange={(e) => handlePublicationYearChange(e.target.value)}
              className="border-gray-300 border p-2 rounded-md"
            >
              <option value={year}>{year}</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
      </div>
      {data?.data?.length ? (
        <div className="grid grid-cols-1 gap-8 my-5   xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {data?.data?.map((book: IBooks, index: React.Key) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xs mt-20">No books found !</div>
      )}
    </div>
  );
};
export default AllBooks;
