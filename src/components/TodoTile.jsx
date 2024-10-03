import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const TodoTile = ({ title, status, handleTodoComplete, handleTodoDelete }) => {
  return (
    <div className="flex w-full items-center justify-between bg-white shadow-lg p-4 rounded-md mb-4 transition transform hover:scale-105 hover:shadow-xl">
      <input
        type="checkbox"
        onChange={handleTodoComplete}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <div className="flex-1 ml-4">
        <p className="font-semibold text-lg text-gray-800">{title}</p>
        <p className={`text-sm ${status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
          {status}
        </p>
      </div>
      <button
        onClick={handleTodoDelete}
        className="text-red-600 hover:text-red-800 transition-colors"
      >
        <MdDelete className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoTile;
