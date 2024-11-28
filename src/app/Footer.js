import React from 'react';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-evenly md:justify-start mb-2">
              {/* Reducido el margen inferior */}
              <span className="text-blue-600 text-2xl font-bold">🌊</span>
            </div>
            <p className="text-gray-500 text-sm">
              Mejoramos el rendimiento de tu empresa con soluciones para talleres mecánicos.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              {/* Reducido el margen superior */}
              <Link href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook"></i></Link>
              <Link href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-instagram"></i></Link>
              <Link href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-x"></i></Link>
              <Link href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-github"></i></Link>
              <Link href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Servicios</h4>
              <ul className="mt-2 space-y-1">
                <li><Link href="#" className="hover:text-gray-800">Reparación de vehículos</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Mantenimiento preventivo</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Revisión técnica</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Soporte</h4>
              <ul className="mt-2 space-y-1">
                <li><Link href="#" className="hover:text-gray-800">Solicitar ayuda</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Documentación</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Guías prácticas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Empresa</h4>
              <ul className="mt-2 space-y-1">
                <li><Link href="#" className="hover:text-gray-800">Quiénes somos</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Blog</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Trabaja con nosotros</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Legal</h4>
              <ul className="mt-2 space-y-1">
                <li><Link href="#" className="hover:text-gray-800">Términos del servicio</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Política de privacidad</Link></li>
                <li><Link href="#" className="hover:text-gray-800">Licencias</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
