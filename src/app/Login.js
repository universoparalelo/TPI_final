'use client'

import { useState } from 'react'

const users = [
  { name: 'admin', password: 'admin', type: 'admin' },
  { name: 'user', password: 'user', type: 'user' },
  { name: 'mecanico', password: 'mecanico', type: 'mecanico' },
]

export default function Login({ onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function checkLogin(e) {
    e.preventDefault()
    const user = users.find(
      (user) => user.name === username && user.password === password
    )
    if (user) {
      console.log('Valid username')
      localStorage.setItem('user', JSON.stringify(user))
      onLoginSuccess(user.type)
      onClose()
    } else {
      console.log('Invalid username or password')
    }
  }

  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg">
          <Link href="/" className="-m-1.5 p-1.5 flex flex-column justify-center gap-2 align-center">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <p className="text-lg font-semibold text-indigo-600">RTO</p>
          </Link>
        <h2 className="text-lg font-semibold mb-4 flex justify-center mt-2">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between mt-10 items-center ">
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={checkLogin}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Acceder
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
