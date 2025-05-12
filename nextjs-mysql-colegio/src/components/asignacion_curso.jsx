"use client";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function AsignacionCursoForm() {
    const [asignacion, setAsignacion] = useState({
        id_curso: "",
        id_seccion: "",
        id_docente: "",
        ciclo_escolar_id: ""
    });

    const [cursos, setCursos] = useState([]);
    const [secciones, setSecciones] = useState([]);
    const [docentes, setDocentes] = useState([]);
    const [ciclos, setCiclos] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        // Cargar datos necesarios
        const fetchData = async () => {
            try {
                const [resCursos, resSecciones, resDocentes, resCiclos] = await Promise.all([
                    axios.get("/api/cursos"),
                    axios.get("/api/secciones"),
                    axios.get("/api/docentes"),
                    axios.get("/api/ciclos-escolares")
                ]);
                setCursos(resCursos.data);
                setSecciones(resSecciones.data);
                setDocentes(resDocentes.data);
                setCiclos(resCiclos.data);
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setAsignacion({
            ...asignacion,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/asignacion-cursos", asignacion);
            alert("Asignación de curso registrada exitosamente");
            form.current.reset();
            setAsignacion({
                id_curso: "",
                id_seccion: "",
                id_docente: "",
                ciclo_escolar_id: ""
            });
        } catch (error) {
            console.error("Error al registrar asignación:", error);
            alert("Error al registrar asignación");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Asignación de Curso</h2>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Curso:</label>
                    <select
                        name="id_curso"
                        value={asignacion.id_curso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un curso</option>
                        {cursos.map(curso => (
                            <option key={curso.id_curso} value={curso.id_curso}>
                                {curso.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Sección:</label>
                    <select
                        name="id_seccion"
                        value={asignacion.id_seccion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione una sección</option>
                        {secciones.map(seccion => (
                            <option key={seccion.seccion_id} value={seccion.seccion_id}>
                                {seccion.nombre} (Grado: {seccion.grado_id})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Docente:</label>
                    <select
                        name="id_docente"
                        value={asignacion.id_docente}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un docente</option>
                        {docentes.map(docente => (
                            <option key={docente.empleado_id} value={docente.empleado_id}>
                                {docente.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Ciclo Escolar:</label>
                    <select
                        name="ciclo_escolar_id"
                        value={asignacion.ciclo_escolar_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    >
                        <option value="">Seleccione un ciclo</option>
                        {ciclos.map(ciclo => (
                            <option key={ciclo.ciclo_id} value={ciclo.ciclo_id}>
                                {ciclo.año} ({ciclo.estado})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Asignar Curso
            </button>
        </form>
    );
}