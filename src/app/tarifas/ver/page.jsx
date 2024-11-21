import React from 'react';

const tarifas = [
    { id: 'Toyota Corolla', Marca: 'Toyota', modelo: '2024', categoria: 'Sedán', frecuencia: 'Diario', precio: '$50' },
    { id: 'Honda Civic', Marca: 'Honda', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$55' },
    { id: 'Ford Mustang', Marca: 'Ford', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$120' },
    { id: 'Chevrolet Silverado', Marca: 'Chevrolet', modelo: '2024', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$80' },
    { id: 'Tesla Model 3', Marca: 'Tesla', modelo: '2023', categoria: 'Eléctrico', frecuencia: 'Diario', precio: '$100' },
    { id: 'BMW X5', Marca: 'BMW', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$150' },
    { id: 'Audi A4', Marca: 'Audi', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$90' },
    { id: 'Mercedes-Benz C-Class', Marca: 'Mercedes-Benz', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$130' },
    { id: 'Nissan Altima', Marca: 'Nissan', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$60' },
    { id: 'Hyundai Sonata', Marca: 'Hyundai', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$65' },
    { id: 'Jeep Grand Cherokee', Marca: 'Jeep', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$110' },
    { id: 'Lexus RX 350', Marca: 'Lexus', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$140' },
    { id: 'Chevrolet Equinox', Marca: 'Chevrolet', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { id: 'Toyota Tacoma', Marca: 'Toyota', modelo: '2024', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$95' },
    { id: 'Ford F-150', Marca: 'Ford', modelo: '2023', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$105' },
    { id: 'Ram 1500', Marca: 'Ram', modelo: '2023', categoria: 'Camioneta', frecuencia: 'Diario', precio: '$110' },
    { id: 'BMW M3', Marca: 'BMW', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$180' },
    { id: 'Chevrolet Camaro', Marca: 'Chevrolet', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$150' },
    { id: 'Porsche 911', Marca: 'Porsche', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$300' },
    { id: 'Tesla Model Y', Marca: 'Tesla', modelo: '2023', categoria: 'Eléctrico', frecuencia: 'Diario', precio: '$120' },
    { id: 'Ford Explorer', Marca: 'Ford', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$115' },
    { id: 'Honda CR-V', Marca: 'Honda', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { id: 'Toyota RAV4', Marca: 'Toyota', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$90' },
    { id: 'Kia Sorento', Marca: 'Kia', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$95' },
    { id: 'Mazda CX-5', Marca: 'Mazda', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$100' },
    { id: 'Nissan Rogue', Marca: 'Nissan', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$90' },
    { id: 'Hyundai Tucson', Marca: 'Hyundai', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$95' },
    { id: 'Subaru Outback', Marca: 'Subaru', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$85' },
    { id: 'BMW 7 Series', Marca: 'BMW', modelo: '2023', categoria: 'Sedán', frecuencia: 'Diario', precio: '$220' },
    { id: 'Jaguar F-Type', Marca: 'Jaguar', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$250' },
    { id: 'Land Rover Range Rover', Marca: 'Land Rover', modelo: '2023', categoria: 'SUV', frecuencia: 'Diario', precio: '$280' },
    { id: 'Ferrari 488', Marca: 'Ferrari', modelo: '2023', categoria: 'Deportivo', frecuencia: 'Diario', precio: '$400' }
];

// Se podria agregar para que muestre aprox 10-15 tarifas y que cambie a la siguiente pagina para ver las demas

export default function Page(){
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="bg-gray-50 p-6 my-10 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Tarifas</h2>
                        <p className="text-sm text-gray-500">Una lista de todas las tarifas.</p>
                    </div>
                    {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">Añadir tarifa</button> */}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100 text-gray-600 text-sm">
                        <tr>
                            <th className="text-left py-3 px-4 font-medium">#</th>
                            <th className="text-left py-3 px-4 font-medium">Marca</th>
                            <th className="text-left py-3 px-4 font-medium">Modelo</th>
                            <th className="text-left py-3 px-4 font-medium">Categoría</th>
                            <th className="text-left py-3 px-4 font-medium">Frecuencia</th>
                            <th className="text-left py-3 px-4 font-medium">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
                        {tarifas.map((tarifa, index) => (
                        <tr key={index}>
                            <td className="py-3 px-4">{tarifa.id}</td>
                            <td className="py-3 px-4">{tarifa.marca}</td>
                            <td className="py-3 px-4">{tarifa.modelo}</td>
                            <td className="py-3 px-4">{tarifa.categoria}</td>
                            <td className="py-3 px-4">{tarifa.frecuencia}</td>
                            <td className="py-3 px-4">{tarifa.precio}</td>
                            {/* <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">Edit</td> */}
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}