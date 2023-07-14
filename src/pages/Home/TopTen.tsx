/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={book?.image} alt="Book Image" className="w-full mb-4" />
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-2">{book.author}</p>
      <p className="text-gray-700 mb-2">{book.genre}</p>
      <p className="text-gray-700">{book.publicationDate}</p>
    </div>
  );
};

const TopTen = () => {
  interface IBooks {
    image: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
  }

  const books: IBooks[] = [
    {
      image: "book1.jpg",
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
      publicationDate: "2022-01-01",
    },
    {
      image: "book2.jpg",
      title: "Book 2",
      author: "Author 2",
      genre: "Mystery",
      publicationDate: "2022-02-01",
    },
    {
      image: "book2.jpg",
      title: "Book 2",
      author: "Author 2",
      genre: "Mystery",
      publicationDate: "2022-02-01",
    },
    {
      image: "book2.jpg",
      title: "Book 2",
      author: "Author 2",
      genre: "Mystery",
      publicationDate: "2022-02-01",
    },
  ];

  return (
    <div className="mx-5">
      <h1 className="uppercase text-xl font-semibold"> top 10 recent books</h1>
      <div className="grid grid-cols-1 gap-8 my-5   xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};
export default TopTen;
