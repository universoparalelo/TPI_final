'use client';

import React, { useState, useEffect } from 'react';
import Table from './Table';
import Pagination from './Pagination';
import Searcher from './Searcher.jsx';

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
    const [query, setQuery] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);

    // Filtrar tarifas por nombre
    const tarifasFiltradas = tarifas.filter((tarifa) =>
        tarifa.vehiculo.toLowerCase().includes(query.toLowerCase())
    );

    // Configurar la paginación
    const tarifasPorPagina = 10;
    const totalPaginas = Math.ceil(tarifas.length / tarifasPorPagina);
    const tarifasMostradas = tarifasFiltradas.slice((paginaActual - 1) * tarifasPorPagina, paginaActual * tarifasPorPagina);

    useEffect(() => {
        setPaginaActual(1);
    }, [query]);
    
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="bg-gray-50 p-6 my-10 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Tarifas</h2>
                    <Searcher query={query} setQuery={setQuery}></Searcher>
                    {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">Añadir tarifa</button> */}
                </div>

                <Table tarifasMostradas={tarifasMostradas}></Table>

                <Pagination totalPaginas={totalPaginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual}></Pagination>
            </div>
        </div>
    )
}