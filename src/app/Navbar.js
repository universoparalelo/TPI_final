'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Login from './Login'
import { useAuth } from './AuthProvider' 

const navigation = [
  { name: 'Ver tarifas', href: '/tarifas/ver' },
  { name: 'Solicitar revision', href: '/tarifas/solicitar' },
  { name: 'Asignar tarifas', href: '/tarifas/asignar' },
]

export default function Navbar() {
  const { isLogged, user, login, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  const filteredNavigation = isLogged && (user === 'admin' || user === 'mecanico')
    ? navigation
    : navigation.filter((item) => item.name !== 'Asignar tarifas');

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5 flex flex-row gap-2 align-center">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <p className="text-lg font-semibold text-indigo-600">RTO</p>
          </a>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 items-center justify-center flex-1">
          {filteredNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
          <div className="ml-8">
          </div>
        </div>

        <div className="hidden lg:flex">
          <button
            type="button"
            onClick={isLogged ? logout : () => setLoginOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 z-30"
          >
            <span className="sr-only">Open main menu</span>
            {isLogged ? 'Cerrar sesión' : 'Iniciar sesión'}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-lg font-semibold text-gray-900"
        >
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>

        {mobileMenuOpen && (
          <Dialog open onClose={() => setMobileMenuOpen(false)} className="fixed inset-0 z-60">
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50" aria-hidden="true" />
            <DialogPanel className="absolute top-0 right-0 mt-4 mr-4 bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg h-screen">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-4 space-y-4 flex flex-col items-center justify-center">
                {filteredNavigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={isLogged ? logout : () => setLoginOpen(true)}
                  className="text-lg font-semibold text-gray-900"
                >
                  {isLogged ? "Cerrar sesion" : "Iniciar sesion"}
                </button>
              </div>
            </DialogPanel>
          </Dialog>
        )}

        {loginOpen && (
          <Login
            onClose={() => setLoginOpen(false)}
            onLoginSuccess={(user) => {
              login(user);
              setLoginOpen(false);
            }}
          />
        )}
      </nav>
    </header>
  )
}
