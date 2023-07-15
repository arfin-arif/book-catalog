/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book-details/${book._id}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={book?.image} alt="Book Image" className="w-full mb-4" />
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-2">{book.author}</p>
        <p className="text-gray-700 mb-2">{book.genre}</p>
        <p className="text-gray-700">{book.publicationDate}</p>
      </div>
    </Link>
  );
};

const TopTen = () => {
  interface IBooks {
    _id: number;
    image: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  }

  const { data } = useGetBooksQuery("");
  console.log("the data", data);

  return (
    <div className="mx-5">
      <h1 className="uppercase text-xl font-semibold"> top 10 recent books</h1>
      <div className="grid grid-cols-1 gap-8 my-5   xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {data?.data?.map(
          (book: IBooks, index: React.Key | null | undefined) => (
            <BookCard key={index} book={book} />
          )
        )}
      </div>
    </div>
  );
};
export default TopTen;
