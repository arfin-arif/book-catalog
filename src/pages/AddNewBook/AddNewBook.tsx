import { useState } from "react";
import { usePostBookMutation } from "../../redux/features/books/bookApi";

const AddNewBook = () => {
  const [book, setBook] = useState({
    image: "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  console.log(book);
  const [postBook, { isLoading }] = usePostBookMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      data: book,
    };
    postBook(options);
    setBook({
      image: "",
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
    });
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={book.image}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={book.title}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block font-medium mb-1">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block font-medium mb-1">
              Genre:
            </label>

            <select
              id="genre"
              name="genre"
              value={book.genre}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="comic">Comic</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="publicationDate" className="block font-medium mb-1">
              Publication Date:
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              value={book.publicationDate}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
