"use client";

import React, {useState} from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const turnos = [
    { id: 1, dia: '11-11-2024', hora: '08:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC123', estado:'SinMecanicoAsignado', cliente: 'Yoel Marain' },
    { id: 2, dia: '11-11-2024', hora: '08:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC124', estado:'SinMecanicoAsignado', cliente: 'Estefano Zappa' },
    { id: 3, dia: '11-11-2024', hora: '09:00', marcaVehiculo: 'Toyota', modeloVehiculo: 'Corolla', placaVehiculo: 'ABC125', estado:'SinMecanicoAsignado', cliente: 'Bruno Dominguez' },
    { id: 4, dia: '12-11-2024', hora: '09:30', marcaVehiculo: 'Honda', modeloVehiculo: 'Civic', placaVehiculo: 'ABC126', estado:'SinMecanicoAsignado', cliente: 'Luisa Perez' },
    { id: 5, dia: '12-11-2024', hora: '10:00', marcaVehiculo: 'Nissan', modeloVehiculo: 'Sentra', placaVehiculo: 'ABC127', estado:'SinMecanicoAsignado' , cliente: 'Maria Rodriguez'},
    { id: 6, dia: '12-11-2024', hora: '10:30', marcaVehiculo: 'Mazda', modeloVehiculo: '3', placaVehiculo: 'ABC128', estado:'SinMecanicoAsignado' , cliente: 'Carlos Perez'},
    { id: 7, dia: '12-11-2024', hora: '11:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC129', estado:'SinMecanicoAsignado', cliente: 'Franco Colapinto' },	
    { id: 8, dia: '12-11-2024', hora: '11:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC130', estado:'SinMecanicoAsignado' , cliente: 'Esteban Guerrieri'},
];	

function agruparTurnosPorDia(turnos) {
    return turnos.reduce((acc, turno) => {
        if (!acc[turno.dia]) {
            acc[turno.dia] = [];
        }
        acc[turno.dia].push(turno);
        return acc;
    }, {});
}

const mecanicos = [
    { id: 1, nombre: 'Juan Perez', especialidad: 'Mecanico', disponibilidad:[{ dia: '11-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}, 
                                                                        {dia: '12-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}]},
    { id: 2, nombre: 'Pedro Rodriguez', especialidad: 'Mecanico', disponibilidad:[{ dia: '11-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]},
                                                                            {dia: '12-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}]},
    { id: 3, nombre: 'Maria Gonzalez', especialidad: 'Mecanico', disponibilidad:[{ dia: '11-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]},
                                                                            {dia: '12-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}]},
    { id: 4, nombre: 'Jose Martinez', especialidad: 'Mecanico', disponibilidad:[{ dia: '11-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]},
                                                                            {dia: '12-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}]},
    { id: 5, nombre: 'Ana Lopez', especialidad: 'Mecanico', disponibilidad:[{ dia: '11-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]},
                                                                            {dia: '12-11-24' , horarios: [{hora: '08:00', estado: 'Ocupado'}, {hora: '09:00', estado: 'Libre'}]}]},
];




export default function Page(){
    const turnosPorDia = agruparTurnosPorDia(turnos);
    const [selecciones, setSelecciones] = useState({});

    const handleSeleccion = (turnoId, mecanicoId) => {
        setSelecciones((prevSelecciones) => ({
            ...prevSelecciones,
            [turnoId]: mecanicoId,
        }));
    };

    const handleGuardar = () => {
        // Guardar
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <h1 className="flex items-center justify-center mt-4 text-3xl font-semibold">Turnos sin mecanico asignado</h1>
            <div className="flex flex-col gap-2 mt-4">
                {Object.keys(turnosPorDia).map((dia) => (
                    <div key={dia} className="flex flex-col">
                        <h4 className="text-lg font-semibold mb-2">Día: {dia}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {turnosPorDia[dia].map((turno) => (
                                <div key={turno.id} className="p-6 bg-white rounded-md shadow-md border border-gray-300 w-full">
                                    <h4 className="text-lg font-semibold">{turno.marcaVehiculo} {turno.modeloVehiculo}</h4>
                                    <p><span className="font-semibold">Hora:</span> {turno.hora}</p>
                                    <p><span className="font-semibold">Cliente:</span> {turno.cliente}</p>
                                    <select
                                        value={selecciones[turno.id] || ''}
                                        onChange={(e) => handleSeleccion(turno.id, e.target.value)}
                                        className="mt-2 p-3 border rounded w-full"
                                    >
                                        <option value="">Seleccionar mecánico</option>
                                        {mecanicos.map((mecanico) => (
                                            <option key={mecanico.id} value={mecanico.id}>
                                                {mecanico.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                        <hr className="my-4 w-full" />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <button className="mx-4 flex items-center">
                    Ver más
                    <ChevronDownIcon className="ml-2 h-5 w-5" />
                </button>
                <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-end mt-4 mb-4">
                <button
                    onClick={handleGuardar}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Guardar cambios
                </button>
            </div>
        </div>
    )
}