'use client';

import React from 'react';

export default function ChatInterface() {
  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4 space-y-4 flex flex-col">
        <div className="mb-4">
          <img src="/logo_softbotic.png" alt="SB Logo" className="w-[98px] h-[98px] object-contain" />
        </div>
        <button className="w-full flex items-center gap-2 bg-transparent text-green-500 py-2 px-3 rounded hover:bg-gray-700">
          <span className="text-xl">📁</span> New Chat
        </button>
        <button className="w-full flex items-center gap-2 bg-transparent text-green-500 py-2 px-3 rounded hover:bg-gray-700">
          <span className="text-xl">🔍</span> Search chats
        </button>
        <h2 className="mt-4 text-gray-400 uppercase text-sm">Chats</h2>
        <div className="text-gray-500 italic mt-2">No chats yet</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-20 px-8">
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold mb-20">
          Welcome <span className="text-green-500">User</span>
        </h1>

        {/* Input Field */}
        <div className="w-full max-w-xl flex items-center bg-gray-700 rounded-lg px-4 py-3">
          <button
            onClick={handleUploadClick}
            className="text-green-500 text-xl font-bold mr-2 hover:text-green-400 focus:outline-none"
          >
            +
          </button>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            multiple
          />
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full bg-transparent placeholder-gray-400 text-gray-100 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
