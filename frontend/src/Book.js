import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import books from "./Images/books.jpg";
import cover from "./Images/cover.jpg";
import { FaTableList } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import logo from "./Images/logo.png";
import bgImg from "./Images/bgImg.jpg";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function Book() {
  const [test, setTest] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8082/")
      .then((res) => setTest(res.data))
      .catch((err) => console.log(err));
    console.log(test);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8082/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-white  min-h-screen overflow-auto ">
      <div className="flex justify-end pt-2 pr-8">
        <div className="relative">
          <IoPersonCircleSharp size={50} onClick={() => setOpen(!open)} />
          {open && (
            <div className="bg-white p-2 w-52 shadow-lg absolute -left-32 top-14">
              <ul className="p-0 m-0 list-none">
              <li
                  onClick={() => setOpen(false)}
                  className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                >
                  <Link
                    to="/register"
                    className="text-decoration-none text-black font-semibold"
                  >
                    Register
                  </Link>
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                >
                  <Link
                    to="/login"
                    className="text-decoration-none text-black font-semibold"
                  >
                    Login
                  </Link>
                </li>
                
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-0 mb-2">
        <img src={logo} className="h-[125px] w-[125px] pb-[10px]" />
        <div className="pl-2 p-1 text-center ">
          <div className="flex text-[70px] text-left font-bold">
            <div className="text-[#95ccd1]">Book</div>
            <div className="text-[#c11c35]">Flow</div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Background Image */}
        <img src={bgImg} className="w-full h-full object-cover" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center  bg-black/10">
          <div className="">
            <div className="text-[42px] font-bold text-white pb-10">
              Welcome to BookFlow – Your Ultimate Solution for Book Management
            </div>
            <h1 className=" text-2xl md:text-4xl font-semibold">
              Streamline book management with intuitive tools
              <br />
              For efficient organization and editing.
            </h1>
            <button className="w-56 mt-16 px-6 py-3 bg-white text-[#c11c35] text-2xl font-bold rounded-3xl hover:bg-[#c11c35] hover:text-white">
              <Link to="/register" className="no-underline text-[#c11c35]">
                Register Now
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" flex justify-end ml-[700px] mr-8 pt-8">
        <div className="flex items-center">
          <div>
            <FaTableList size={30} />
          </div>
          <div className="text-xl font-semibold pl-4">
            <button onClick={() => setShowTable(!showTable)}>See all</button>
          </div>
        </div>
      </div>

      {showTable && (
        <div className=" bg-white border-2 shadow-md rounded p-4 mb-8 mt-8 mx-[200px]">
          <table className="table">
            <thead>
              <tr>
                <th className="text-lg">Title</th>
                <th className="text-lg">Author</th>
                <th className="text-lg">Category</th>
                <th className="text-lg">Edition</th>
                <th className="text-lg">Language</th>
                <th className="text-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {test.map((data, i) => (
                <tr key={i}>
                  <td>{data.title || "N/A"}</td>
                  <td>{data.author || "N/A"}</td>
                  <td>{data.category || "N/A"}</td>
                  <td>{data.edition || "N/A"}</td>
                  <td>{data.language || "N/A"}</td>
                  <td>
                    <button className="w-20 bg-yellow-700 p-1 rounded-md hover:bg-yellow-900 mr-2 text-white font-semibold text-md">
                      <Link
                        to={`view/${data.id}`}
                        className="no-underline text-white"
                      >
                        View
                      </Link>
                    </button>

                    <button className="w-20 bg-green-800 p-1 rounded-md hover:bg-green-900 mr-2 text-white font-semibold text-md">
                      <Link
                        to={`update/${data.id}`}
                        className="no-underline text-white"
                      >
                        Update
                      </Link>
                    </button>

                    <button
                      className="w-20 bg-red-800 p-1 rounded-md hover:bg-red-900 text-white font-semibold text-md"
                      onClick={(e) => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-center">
        <div className="mt-0 mb-20 mx-[200px]">
          {/* Wrapper for grid layout */}
          <div className="grid grid-cols-4 gap-5">
            {/* Static "+" card for adding books */}
            <div className="bg-gray-300 shadow-md p-2 h-[420px] w-[250px] flex justify-center items-center cursor-pointer">
              <Link to="/create" className="no-underline">
                <div className="text-6xl text-gray-700 font-bold">+</div>
              </Link>
            </div>

            {/* Display the first two books from the test array */}
            {test &&
              test.slice(0, 3).map((data, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md p-2 h-[420px] w-[250px]"
                >
                  <img
                    src={
                      data.book_cover
                        ? `http://localhost:8082/uploads/${data.book_cover}`
                        : cover
                    }
                    alt={data.title || "Book Cover"}
                    onError={(e) => (e.target.src = cover)} // Fallback if image fails to load
                    className="h-[340px] w-full p-1 object-cover mb-2"
                  />
                  <div className="text-md font-semibold">
                    {data.title || "No title"}
                  </div>
                  <div className="text-md font-semibold text-gray-500">
                    {data.author || "No author"}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="p-2 bottom-0 left-0 w-full bg-[#95ccd1] text-white text-lg">
        Copyright © 2024 Bookflow. All rights reserved.
      </div>
    </div>
  );
}
