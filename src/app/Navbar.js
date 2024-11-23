'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Login from './Login'

const navigation = [
  { name: 'Ver tarifas', href: '/tarifas/ver' },
  { name: 'Solicitar revision', href: '/tarifas/solicitar' },
  { name: 'Asignar tarifas', href: '/tarifas/asignar' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [userType, setUserType] = useState(null)

  const handleLoginSuccess = (type) => {
    setIsLogged(true)
    setUserType(type)
  }

  const filteredNavigation = navigation.filter((item) => item.name !== 'Asignar tarifas')
  // console.log(filteredNavigation)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {filteredNavigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLogged ? (
            <button
              type="button"
              onClick={() => {
                setIsLogged(false)
                setUserType(null)
                localStorage.removeItem('user')
              }}
              className="text-sm font-semibold text-gray-900"
            >
              Log out
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="text-sm/6 font-semibold text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
        {loginOpen && (
          <Login
            onClose={() => setLoginOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </nav>
    </header>
  )
}
