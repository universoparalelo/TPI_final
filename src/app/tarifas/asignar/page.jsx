
const turnos = [
    { id: 1, dia: '11-11-2024', hora: '08:00', marcaVehiculo: 'Chevrolet', modeloVehiculo: 'Spark', placaVehiculo: 'ABC123', estado:'SinMecanicoAsignado' },
    { id: 2, dia: '11-11-2024', hora: '08:30', marcaVehiculo: 'Ford', modeloVehiculo: 'Ranger', placaVehiculo: 'ABC124', estado:'SinMecanicoAsignado' },
    { id: 3, dia: '11-11-2024', hora: '09:00', marcaVehiculo: 'Toyota', modeloVehiculo: 'Corolla', placaVehiculo: 'ABC125', estado:'SinMecanicoAsignado' },
    { id: 4, dia: '11-11-2024', hora: '09:30', marcaVehiculo: 'Honda', modeloVehiculo: 'Civic', placaVehiculo: 'ABC126', estado:'SinMecanicoAsignado' },
    { id: 5, dia: '11-11-2024', hora: '10:00', marcaVehiculo: 'Nissan', modeloVehiculo: 'Sentra', placaVehiculo: 'ABC127', estado:'SinMecanicoAsignado' },	
];	

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
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <h3>Asignar Vehiculo a mecanico</h3>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {turnos.map((turno) => (
                    <div key={turno.id} className="p-4 bg-white rounded-md shadow-md">
                        <h4 className="text-lg font-semibold">Turno</h4>
                        <p><span className="font-semibold">Dia:</span> {turno.dia}</p>
                        <p><span className="font-semibold">Hora:</span> {turno.hora}</p>
                        <p><span className="font-semibold">Marca Vehiculo:</span> {turno.marcaVehiculo}</p>
                        <p><span className="font-semibold">Modelo Vehiculo:</span> {turno.modeloVehiculo}</p>
                        <p><span className="font-semibold">Placa Vehiculo:</span> {turno.placaVehiculo}</p>
                        <p><span className="font-semibold">Estado:</span> {turno.estado}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}