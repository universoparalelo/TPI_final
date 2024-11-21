'use client';

import React, { useState } from 'react';
import Pagination from './Pagination';

const tarifas = [
    { vehiculo: 'Toyota Corolla', marca: 'Toyota', modelo: '2024', categoria: 'Sedán', frecuencia: 'Diario', precio: '$50' },
    { vehiculo: 'Honda Civic', marca: 'Honda', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$55' },
    { vehiculo: 'Ford Mustang', marca: 'Ford', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$120' },
    { vehiculo: 'Chevrolet Silverado', marca: 'Chevrolet', modelo: '2024', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$80' },
    { vehiculo: 'Tesla Model 3', marca: 'Tesla', modelo: '2023', categoria: 'Eléctrico', frecuencia: 'Diario', precio: '$100' },
    { vehiculo: 'BMW X5', marca: 'BMW', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$150' },
    { vehiculo: 'Audi A4', marca: 'Audi', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$90' },
    { vehiculo: 'Mercedes-Benz C-Class', marca: 'Mercedes-Benz', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$130' },
    { vehiculo: 'Nissan Altima', marca: 'Nissan', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$60' },
    { vehiculo: 'Hyundai Sonata', marca: 'Hyundai', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$65' },
    { vehiculo: 'Jeep Grand Cherokee', marca: 'Jeep', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$110' },
    { vehiculo: 'Lexus RX 350', marca: 'Lexus', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$140' },
    { vehiculo: 'Chevrolet Equinox', marca: 'Chevrolet', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { vehiculo: 'Toyota Tacoma', marca: 'Toyota', modelo: '2024', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$95' },
    { vehiculo: 'Ford F-150', marca: 'Ford', modelo: '2023', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$105' },
    { vehiculo: 'Ram 1500', marca: 'Ram', modelo: '2023', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$110' },
    { vehiculo: 'BMW M3', marca: 'BMW', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$180' },
    { vehiculo: 'Chevrolet Camaro', marca: 'Chevrolet', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$150' },
    { vehiculo: 'Porsche 911', marca: 'Porsche', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$300' },
    { vehiculo: 'Tesla Model Y', marca: 'Tesla', modelo: '2023', categoria: 'Eléctrico', frecuencia: 'Diario', precio: '$120' },
    { vehiculo: 'Ford Explorer', marca: 'Ford', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$115' },
    { vehiculo: 'Honda CR-V', marca: 'Honda', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { vehiculo: 'Toyota RAV4', marca: 'Toyota', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$90' },
    { vehiculo: 'Kia Sorento', marca: 'Kia', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$95' },
    { vehiculo: 'Mazda CX-5', marca: 'Mazda', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$100' },
    { vehiculo: 'Nissan Rogue', marca: 'Nissan', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$90' },
    { vehiculo: 'Hyundai Tucson', marca: 'Hyundai', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$95' },
    { vehiculo: 'Subaru Outback', marca: 'Subaru', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { vehiculo: 'BMW 7 Series', marca: 'BMW', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$220' },
    { vehiculo: 'Jaguar F-Type', marca: 'Jaguar', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$250' },
    { vehiculo: 'Land Rover Range Rover', marca: 'Land Rover', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$280' },
    { vehiculo: 'Ferrari 488', marca: 'Ferrari', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$400' }
];

export default function Page() {
    const [paginaActual, setPaginaActual] = useState(1);
    const tarifasPorPagina = 10;
    const totalPaginas = Math.ceil(tarifas.length / tarifasPorPagina);
    const tarifasMostradas = tarifas.slice((paginaActual - 1) * tarifasPorPagina, paginaActual * tarifasPorPagina);
    
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="bg-gray-50 p-6 my-10 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Tarifas</h2>
                        {/* Filtro */}
                    </div>
                    {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">Añadir tarifa</button> */}
                </div>

                <div className="overflow-x-auto min-h-[500px]">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100 text-gray-600 text-sm">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Vehículo</th>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Marca</th>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Modelo</th>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Categoría</th>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Frecuencia</th>
                                <th className="text-left py-3 px-4 font-medium w-1/5">Precio</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
                            {tarifasMostradas.map((tarifa, index) => (
                            <tr key={index}>
                                <td className="text-left py-3 px-4">{tarifa.vehiculo}</td>
                                <td className="text-left py-3 px-4">{tarifa.marca}</td>
                                <td className="text-left py-3 px-4">{tarifa.modelo}</td>
                                <td className="text-left py-3 px-4">{tarifa.categoria}</td>
                                <td className="text-left py-3 px-4">{tarifa.frecuencia}</td>
                                <td className="text-left py-3 px-4">{tarifa.precio}</td>
                                {/* <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">Edit</td> */}
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagination totalPaginas={totalPaginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual}></Pagination>
            </div>
        </div>
    )
}