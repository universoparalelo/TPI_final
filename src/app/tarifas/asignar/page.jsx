"use client";

import React, {useState} from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const turnos = [
    { id: 1, dia: '11-11-2024', hora: '08:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC123', estado:'SinMecanicoAsignado', cliente: 'Yoel Marain' },
    { id: 2, dia: '11-11-2024', hora: '08:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC124', estado:'SinMecanicoAsignado', cliente: 'Estefano Zappa' },
    { id: 3, dia: '11-11-2024', hora: '09:00', marcaVehiculo: 'Toyota', modeloVehiculo: 'Corolla', placaVehiculo: 'ABC125', estado:'SinMecanicoAsignado', cliente: 'Bruno Dominguez' },
    { id: 4, dia: '12-11-2024', hora: '09:30', marcaVehiculo: 'Honda', modeloVehiculo: 'Civic', placaVehiculo: 'ABC126', estado:'SinMecanicoAsignado', cliente: 'Luisa Perez' },
    { id: 5, dia: '12-11-2024', hora: '10:00', marcaVehiculo: 'Nissan', modeloVehiculo: 'Sentra', placaVehiculo: 'ABC127', estado:'SinMecanicoAsignado' , cliente: 'Maria Rodriguez'},
    { id: 6, dia: '12-11-2024', hora: '10:30', marcaVehiculo: 'Mazda', modeloVehiculo: '3', placaVehiculo: 'ABC128', estado:'SinMecanicoAsignado' , cliente: 'Carlos Perez'},
    { id: 7, dia: '12-11-2024', hora: '11:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC129', estado:'SinMecanicoAsignado', cliente: 'Franco Colapinto' },	
    { id: 8, dia: '12-11-2024', hora: '11:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC130', estado:'SinMecanicoAsignado' , cliente: 'Esteban Guerrieri'},
    { id: 9, dia: '12-11-2024', hora: '12:00', marcaVehiculo: 'Toyota', modeloVehiculo: 'Corolla', placaVehiculo: 'ABC131', estado:'SinMecanicoAsignado' , cliente: 'Jose Maria Lopez'},
    { id: 10, dia: '13-11-2024', hora: '12:30', marcaVehiculo: 'Honda', modeloVehiculo: 'Civic', placaVehiculo: 'ABC132', estado:'SinMecanicoAsignado', cliente: 'Luisa Perez' },
    { id: 11, dia: '13-11-2024', hora: '13:00', marcaVehiculo: 'Nissan', modeloVehiculo: 'Sentra', placaVehiculo: 'ABC133', estado:'SinMecanicoAsignado' , cliente: 'Maria Rodriguez'},
    { id: 12, dia: '13-11-2024', hora: '13:30', marcaVehiculo: 'Mazda', modeloVehiculo: '3', placaVehiculo: 'ABC134', estado:'SinMecanicoAsignado' , cliente: 'Carlos Perez'},
    { id: 13, dia: '13-11-2024', hora: '14:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC135', estado:'SinMecanicoAsignado', cliente: 'Franco Colapinto' },	
    { id: 14, dia: '13-11-2024', hora: '14:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC136', estado:'SinMecanicoAsignado' , cliente: 'Esteban Guerrieri'},
    { id: 15, dia: '13-11-2024', hora: '15:00', marcaVehiculo: 'Toyota', modeloVehiculo: 'Corolla', placaVehiculo: 'ABC137', estado:'SinMecanicoAsignado' , cliente: 'Jose Maria Lopez'},
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
    const [mostrarDia13, setMostrarDia13] = useState(false);

    const handleSeleccion = (turnoId, mecanicoId) => {
        setSelecciones((prevSelecciones) => ({
            ...prevSelecciones,
            [turnoId]: mecanicoId,
        }));
    };

    const handleVerMas = () => {
        setMostrarDia13(true);
    };

    const handleVerMenos = () => {
        setMostrarDia13(false);
    };

    const handleGuardar = () => {
        window.location.href = '/tarifas/asignar/exito';
    };

    const handleCancelar = () => {
        window.location.href = '/';
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <h1 className="flex items-center justify-center mt-4 text-2xl font-semibold">Turnos sin mecanico asignado</h1>
            <div className="flex flex-col gap-2 mt-4">
                {Object.keys(turnosPorDia).map((dia) => (
                     (dia === '11-11-2024' || dia === '12-11-2024' || (dia === '13-11-2024' && mostrarDia13)) && (
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
                     )
                ))}
            </div>
            {!mostrarDia13 && (
                <div className="flex items-center justify-center my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <button className="mx-4 text-indigo-600 flex items-center" onClick={handleVerMas}>
                        Ver más
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                    </button>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
            )}
            {mostrarDia13 && (
                <div className="flex items-center justify-center my-4">
                    <hr className="flex-grow border-t border-gray-300" />
                    <button className="mx-4 text-indigo-600 flex items-center" onClick={handleVerMenos}>
                        Ver menos
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                    </button>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
            )}
            <div className="flex justify-end mt-4 mb-4 gap-4">
                <button type="button" 
                className="text-sm font-semibold text-gray-900 hover:text-gray-400 focus-visible:outline-indigo-600"
                onClick={handleCancelar}>
                    Cancelar
                </button>
                <button
                type="submit"
                onClick={handleGuardar}
                disabled={Object.keys(selecciones).length === 0}
                className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${Object.keys(selecciones).length === 0 ? 'bg-indigo-300 text-white cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'}`}
                >
                    Guardar cambios
                </button>
            </div>
        </div>
    )
}