"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function SeccionForm() {
    const [seccion, setSeccion] = useState({
        grado_id: "",
        nombre: "",
        aula_asignada_id: "",
        capacidad_max: "",
        profesor_encargado_id: "",
        ciclo_escolar_id: "",
        estado: "",
        horario_entrada: "",
        horario_salida: "",
    });

    const [grados, setGrados] = useState([]);
    const [aulas, setAulas] = useState([]);
    const [profesores, setProfesores] = useState([]);
    const [ciclos, setCiclos] = useState([]);

    const form = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resGrados, resAulas, resEmpleados, resCiclos] = await Promise.all([
                    axios.get("/api/grado"),
                    axios.get("/api/aula"),
                    axios.get("/api/empleado"),
                    axios.get("/api/ciclo_escolar"),
                ]);
                setGrados(resGrados.data);
                setAulas(resAulas.data);
                setProfesores(resEmpleados.data);
                setCiclos(resCiclos.data);
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeccion({ ...seccion, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/seccion", seccion);
            alert("Sección registrada exitosamente");
            form.current.reset();
            setSeccion({
                grado_id: "",
                nombre: "",
                aula_asignada_id: "",
                capacidad_max: "",
                profesor_encargado_id: "",
                ciclo_escolar_id: "",
                estado: "",
                horario_entrada: "",
                horario_salida: "",
            });
        } catch (error) {
            console.error("Error al registrar sección:", error);
            alert("Error al registrar sección");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Sección</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">Nombre de la sección:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={seccion.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Grado:</label>
                    <select
                        name="grado_id"
                        value={seccion.grado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un grado...</option>
                        {grados.map((grado) => (
                            <option key={grado.id_grado} value={grado.id_grado}>
                                {grado.nombre_grado}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Aula asignada:</label>
                    <select
                        name="aula_asignada_id"
                        value={seccion.aula_asignada_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un aula...</option>
                        {aulas.map((aula) => (
                            <option key={aula.aula_id} value={aula.aula_id}>
                                {aula.codigo} - Piso {aula.piso}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Capacidad máxima:</label>
                    <input
                        type="number"
                        name="capacidad_max"
                        value={seccion.capacidad_max}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Profesor encargado:</label>
                    <select
                        name="profesor_encargado_id"
                        value={seccion.profesor_encargado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un profesor...</option>
                        {profesores.map((emp) => (
                            <option key={emp.empleado_id} value={emp.empleado_id}>
                                {emp.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Ciclo escolar:</label>
                    <select
                        name="ciclo_escolar_id"
                        value={seccion.ciclo_escolar_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un ciclo...</option>
                        {ciclos.map((ciclo) => (
                            <option key={ciclo.ciclo_id} value={ciclo.ciclo_id}>
                                {ciclo.nombre} ({ciclo.anio})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={seccion.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Horario de entrada:</label>
                    <input
                        type="time"
                        name="horario_entrada"
                        value={seccion.horario_entrada}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Horario de salida:</label>
                    <input
                        type="time"
                        name="horario_salida"
                        value={seccion.horario_salida}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Sección
            </button>
        </form>
    );
}
