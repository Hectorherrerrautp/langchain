'use client';

import React, { useState, useEffect } from 'react';

export default function ChatInterface() {
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  const [message, setMessage] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  // Mensajes aleatorios de bienvenida
  const welcomeMessages = [
    'Welcome',
    'Hello again',
    'Let’s get started',
    'Good to see you',
    'Ready to chat?',
    'How can I help?',
    'Ask me anything',
  ];

  // Selección aleatoria al cargar
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    setWelcomeMessage(welcomeMessages[randomIndex]);
  }, []);

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleSend = () => {
    if (message.trim() === '') return;
    console.log('Mensaje enviado:', message, 'Modelo:', selectedModel);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen text-gray-100" style={{ backgroundColor: '#2B2B2B' }}>
      
      {/* Sidebar (oculto si showSidebar es false) */}
      {showSidebar && (
        <aside className="relative w-64 p-4 space-y-4 flex flex-col" style={{ backgroundColor: '#151515' }}>
          <div className="mb-4">
            <img src="/logo_softbotic.png" alt="SB Logo" className="w-[98px] h-[98px] object-contain" />
          </div>

          {/* Botón de nuevo chat */}
          <button className="w-full flex items-center gap-2 bg-transparent py-2 px-3 rounded hover:bg-gray-700"
            style={{ color: '#8ACE00' }}>
            <img src="/new.png" alt="New Chat" className="w-5 h-5" />
            New Chat
          </button>

          {/* Botón de búsqueda */}
          <button
            className="w-full flex items-center gap-2 bg-transparent py-2 px-3 rounded hover:bg-gray-700"
            style={{ color: '#8ACE00' }}
            onClick={() => setShowSearchBox(!showSearchBox)}
          >
            <img src="/search.png" alt="Search" className="w-5 h-5" />
            Search chats
          </button>

          {/* Cuadro desplegable de búsqueda */}
          {showSearchBox && (
            <div className="absolute left-4 right-4 top-44 bg-gray-800 border border-gray-600 rounded p-2 z-10 shadow-lg">
              <input
                type="text"
                placeholder="Buscar chats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}

          <h2 className="mt-4 text-gray-400 uppercase text-sm">Chats</h2>
          <div className="text-gray-500 italic mt-2">No chats yet</div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-6 px-8 relative">
        
        {/* Botón toggle sidebar */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute left-4 top-4 p-2 rounded hover:bg-gray-700 transition"
          style={{ backgroundColor: '#2B2B2B' }}
          title={showSidebar ? 'Ocultar menú' : 'Mostrar menú'}
        >
          <img src="/side_bar.png" alt="Toggle Menu" className="w-6 h-6" />
        </button>

        {/* Mensaje de bienvenida aleatorio */}
        <h1 className="text-4xl font-bold mb-20 mt-12">
          {welcomeMessage} <span style={{ color: '#8ACE00' }}></span>
        </h1>

        {/* Input y selector de modelo */}
        <div className="w-full max-w-xl flex flex-col gap-2">
          
          {/* Input Field */}
          <div className="flex items-center rounded-lg px-4 py-3" style={{ backgroundColor: '#565656' }}>
            <button
              onClick={handleUploadClick}
              className="mr-2 p-2 rounded hover:bg-gray-600 transition"
              title="Subir archivo"
            >
              <img src="/add.png" alt="Subir" className="w-5 h-5" />
            </button>

            <input type="file" id="fileInput" className="hidden" multiple />

            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent placeholder-gray-400 text-gray-100 focus:outline-none"
            />

            <button
              onClick={handleSend}
              className="ml-3 hover:opacity-80 focus:outline-none"
              title="Enviar"
            >
              <img src="/send_g.png" alt="Enviar" className="w-5 h-5" />
            </button>
          </div>

          {/* Selector de modelo */}
          <div className="flex items-center text-sm text-gray-300 mt-1">
            <label htmlFor="modelSelect" className="mr-2">Modelo:</label>
            <select
              id="modelSelect"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              style={{
                backgroundColor: '#2B2B2B',
                color: '#8ACE00',
                border: '1px solid #8ACE00',
              }}
              className="px-3 py-1 rounded focus:outline-none focus:ring-2"
            >
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-3.5">GPT-3.5</option>
              <option value="claude">Claude</option>
              <option value="mistral">Mistral</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
