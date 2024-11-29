export default function Table({ tarifasMostradas }) {
    return (
        <div className="overflow-x-auto min-h-[500px]">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100 text-gray-600 text-sm">
                    <tr>
                        <th className="text-left py-3 px-5 font-medium w-1/5">Vehículo</th>
                        {/* <th className="text-left py-3 px-5 font-medium w-1/5">Marca</th> */}
                        <th className="text-left py-3 px-5 font-medium w-1/5">Modelo</th>
                        <th className="text-left py-3 px-5 font-medium w-1/5">Categoría</th>
                        <th className="text-left py-3 px-5 font-medium w-1/5">Frecuencia</th>
                        <th className="text-left py-3 px-5 font-medium w-1/5">Precio</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
                    {tarifasMostradas.map((tarifa, index) => (
                    <tr key={index}>
                        <td className="text-left py-3 px-5  w-1/5">{tarifa.vehiculo}</td>
                        {/* <td className="text-left py-3 px-5">{tarifa.marca}</td> */}
                        <td className="text-left py-3 px-5  w-1/5">{tarifa.modelo}</td>
                        <td className="text-left py-3 px-5  w-1/5">{tarifa.categoria}</td>
                        <td className="text-left py-3 px-5  w-1/5">{tarifa.frecuencia}</td>
                        <td className="text-left py-3 px-5 w-1/5">{tarifa.precio},00</td>
                        {/* <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">Edit</td> */}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}