import React from "react";

const UserCard = ({user}) => {
  const { email, username, number, name } = user;
  return (
    <div className="w-fit flex flex-col font-sans justify-around bg-slate-300 border border-black rounded-md">
      <h1 className="text-3xl font-bold border-b px-10 py-6  border-black">
        {name}
      </h1>
      <div className="details flex flex-col px-10 py-3 gap-1">
        <h2 className="text-lg">{username}</h2>
        <h2 className="text-lg">{email}</h2>
        <h2 className="text-lg">{number}</h2>
      </div>
      <div className="btns flex gap-4 items-center px-10 pt-3 pb-6 ">
        <button className="px-7 py-2 bg-green-500 font-semibold text-lg">
          Edit
        </button>
        <button className="px-7 py-2 bg-red-500 font-semibold text-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
