'use client'
import React from 'react';

const ExitoPage = () => {

    const handleBackToHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="min-h-[70vh] flex flex-col justify-center items-center pb-10">
            <div className="w-4/5 text-center mt-20 mx-auto">
                <h1 className="text-4xl font-bold mb-4">¡Éxito!</h1>
                <p className="text-lg mb-6">Vehiculos asignados con éxito.</p>
                <button onClick={handleBackToHome} className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700">
                    Volver al inicio
                </button>
            </div>
        </div>
    );
};

export default ExitoPage;