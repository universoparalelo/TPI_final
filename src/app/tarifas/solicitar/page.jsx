

const carBrands = {
    Toyota: ['Corolla', 'Camry', 'Prius'],
    Ford: ['Fiesta', 'Focus', 'Mustang'],
    Honda: ['Civic', 'Accord', 'CR-V'],
  };
  
  export default function Page() {
    return (
    <div className="relative isolate px-6 pt-14 lg:px-8">

      <div className="flex justify-center items-center min-h-screen py-12 px-6 lg:px-8">
        <form className="w-full max-w-lg">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg font-semibold text-gray-900">Complete el formulario</h2>
              <p className="mt-1 text-sm text-gray-600">Utilice un correo electrónico válido y actual.</p>
  
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Dirección de correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-3">
                  <label htmlFor="marca" className="block text-sm font-medium text-gray-900">
                    Marca
                  </label>
                  <div className="mt-2">
                    <select
                      id="marca"
                      name="marca"
                      autoComplete="marca-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm"
                    >
                      {Object.keys(carBrands).map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
  
                <div className="sm:col-span-3">
                  <label htmlFor="modelo" className="block text-sm font-medium text-gray-900">
                    Modelo
                  </label>
                  <div className="mt-2">
                    <select
                      id="modelo"
                      name="modelo"
                      autoComplete="modelo-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm"
                    >
                      {Object.values(carBrands).flat().map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
  
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="anio" className="block text-sm font-medium text-gray-900">
                    Año
                  </label>
                  <div className="mt-2">
                    <input
                      id="anio"
                      name="anio"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-lg font-semibold text-gray-900">Fecha y Hora de la Revisión Técnica</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Seleccione la fecha y hora en la que desea realizar la revisión técnica de su vehículo.
                </p>

                <div className="mt-10 space-y-10">
                    <fieldset>
                    <legend className="text-sm font-semibold text-gray-900">Seleccione la fecha y hora</legend>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                        <div className="flex flex-col">
                            <label htmlFor="fecha" className="block text-sm font-medium text-gray-900">
                            Fecha
                            </label>
                            <input
                            id="fecha"
                            name="fecha"
                            type="date"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="hora" className="block text-sm font-medium text-gray-900">
                            Hora
                            </label>
                            <input
                            id="hora"
                            name="hora"
                            type="time"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                        </div>
                    </div>
                    </fieldset>
                </div>
                </div>
  
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-lg font-semibold text-gray-900">Notificaciones</h2>
              <p className="mt-1 text-sm text-gray-600">
                Siempre le informaremos sobre cambios importantes, pero usted elige sobre qué más quiere recibir información.
              </p>
  
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold text-gray-900">Por correo electrónico</legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                          Comentarios
                        </label>
                        <p className="text-gray-500">Reciba una notificación cuando alguien publique un comentario.</p>
                      </div>
                    </div>
                    
                  </div>
                </fieldset>
              </div>
            </div>

            
          </div>
  
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold text-gray-900">
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>

    );
  }