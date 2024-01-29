import React, { useState } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/LoginAdmin', { username, password });
      console.log(response.data);
      // Aquí redirige a otra página si el inicio de sesión es exitoso
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('Credenciales incorrectas');
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div id='LoginAdmin' className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-800 bg-opacity-50 z-50">
          <div className="w-full max-w-md p-6 bg-amber-800 rounded shadow-lg">
            <button className="absolute top-2 right-2" onClick={handleClose}>
              <FaTimes size={30} className="text-amber-800" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-amber-400 text-[15px]">Usuario:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-amber-400 text-[15px]">Contraseña:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline text-black"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-900 hover:bg-red-900 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
              {error && <p className="text-white">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginAdmin;
