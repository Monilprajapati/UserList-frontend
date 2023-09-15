import React from "react";
import { useState } from "react";
import { addUser } from "../service/api";

const AddUser = () => {
  const [user, setUser] = useState({});

  const userdetails = {
    name: "",
    username: "",
    email: "",
    number: "",
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = () => {
    addUser(user);
  };
  return (
    <div className="flex justify-center mt-20">
      <section className="bg-blue-300 w-96">
        <div className="pt-4 lg:py-10 px-10">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Add User
          </h2>
          <form action="#" className="space-y-3 flex flex-col">
            <div>
              <label
                for="Name"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                id="text"
                name="Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Ajay Raj"
                required
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div>
              <label
                for="username"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                @username
              </label>
              <input
                type="text"
                name="username"
                id="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="@ajayraj01"
                required
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="aj@gmail.com"
                required
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div>
              <label
                for="number"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="text"
                name="number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="+91 1234567890"
                required
                onChange={(e) => onValueChange(e)}
              />
            </div>

            <button
              type="submit"
              className="py-3 px-10 w-full mx-auto text-md font-medium bg-white text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              onClick={() => addUserDetails()}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
