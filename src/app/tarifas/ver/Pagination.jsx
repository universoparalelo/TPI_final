'use client';

import React, { useState, useEffect } from 'react';



export default function Pagination({ totalPaginas, paginaActual, setPaginaActual }) {  
    // Funciones para manejar los botones de paginación
    const handlePrevious = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    const handleNext = () => {
        if (paginaActual < totalPaginas) {
            setPaginaActual(paginaActual + 1);
        }
    };

    return (
        <div className="flex justify-between items-center mt-4">
            <button onClick={handlePrevious} disabled={paginaActual === 1} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-50">Anterior</button>

            <span className="text-gray-600">Página {paginaActual} de {totalPaginas}</span>
            
            <button onClick={handleNext} disabled={paginaActual === totalPaginas} className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-400 disabled:opacity-50">Siguiente</button>
        </div>
    )
}
