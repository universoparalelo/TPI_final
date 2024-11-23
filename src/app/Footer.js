import React from 'react';

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
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-x"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-github"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800">Servicios</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Reparación de vehículos</a></li>
                <li><a href="#" className="hover:text-gray-800">Mantenimiento preventivo</a></li>
                <li><a href="#" className="hover:text-gray-800">Revisión técnica</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Soporte</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Solicitar ayuda</a></li>
                <li><a href="#" className="hover:text-gray-800">Documentación</a></li>
                <li><a href="#" className="hover:text-gray-800">Guías prácticas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Empresa</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-gray-800">Trabaja con nosotros</a></li>
                <li><a href="#" className="hover:text-gray-800">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Legal</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="hover:text-gray-800">Términos del servicio</a></li>
                <li><a href="#" className="hover:text-gray-800">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-gray-800">Licencias</a></li>
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
