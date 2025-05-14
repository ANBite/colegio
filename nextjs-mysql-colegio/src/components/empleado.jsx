"use client";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function EmpleadoForm() {
    const [empleado, setEmpleado] = useState({
        cod_empleado: "",
        nombre: "",
        CUI: undefined,
        fecha_nacimiento: "",
        genero: "",
        direccion: undefined,
        telefono: "",
        estado_civil: undefined,
        fecha_contratacion: undefined,
        fecha_egreso: undefined,
        motivo_de_egreso: undefined,
        tipo_sangre: undefined,
        puesto_id: "",
        tipo_de_empleado_id: "",
        especialidad: undefined,
        titulo: "",
        no_colegiado: "",
        nivel_educativo: undefined,
        estado: "Activo"
    });

    const [puestos, setPuestos] = useState([]);
    const [tiposEmpleado, setTiposEmpleado] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        // Cargar puestos y tipos de empleado
        const fetchData = async () => {
            try {
                const resPuestos = await axios.get("/api/puestos");
                const resTipos = await axios.get("/api/tipos-empleado");
                setPuestos(resPuestos.data);
                setTiposEmpleado(resTipos.data);
            } catch (error) {
                console.error("Error al cargar datos:", error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/empleado", empleado);
            alert("Empleado registrado exitosamente");
            form.current.reset();
            setEmpleado({
                ...empleado,
                cod_empleado: "",
                nombre: "",
                CUI: undefined,
                fecha_nacimiento: "",
                genero: "",
                direccion: undefined,
                telefono: "",
                estado_civil: undefined,
                fecha_contratacion: undefined,
                fecha_egreso: undefined,
                motivo_de_egreso: undefined,
                tipo_sangre: undefined,
                puesto_id: "",
                tipo_de_empleado_id: "",
                especialidad: undefined,
                titulo: "",
                no_colegiado: "",
                nivel_educativo: undefined,
                estado: "Activo"
            });
        } catch (error) {
            console.error("Error al registrar empleado:", error);
            alert("Error al registrar empleado");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Empleado</h2>
            
            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Código Empleado:</label>
                    <input
                        type="text"
                        name="cod_empleado"
                        value={empleado.cod_empleado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Nombre Completo:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={empleado.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">CUI:</label>
                    <input
                        type="text"
                        name="CUI"
                        value={empleado.CUI}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Nacimiento:</label>
                    <input
                        type="date"
                        name="fecha_nacimiento"
                        value={empleado.fecha_nacimiento}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Género:</label>
                    <select
                        name="genero"
                        value={empleado.genero}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Dirección:</label>
                    <input
                        type="text"
                        name="direccion"
                        value={empleado.direccion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Teléfono:</label>
                    <input
                        type="text"
                        name="telefono"
                        value={empleado.telefono}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado Civil:</label>
                    <select
                        name="estado_civil"
                        value={empleado.estado_civil}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Soltero/a">Soltero/a</option>
                        <option value="Casado/a">Casado/a</option>
                        <option value="Divorciado/a">Divorciado/a</option>
                        <option value="Viudo/a">Viudo/a</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Contratación:</label>
                    <input
                        type="date"
                        name="fecha_contratacion"
                        value={empleado.fecha_contratacion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Egreso:</label>
                    <input
                        type="date"
                        name="fecha_egreso"
                        value={empleado.fecha_egreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Motivo Egreso:</label>
                    <textarea
                        name="motivo_de_egreso"
                        value={empleado.motivo_de_egreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Sangre:</label>
                    <select
                        name="tipo_sangre"
                        value={empleado.tipo_sangre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Puesto:</label>
                    <input
                        name="puesto_id"
                        value={empleado.puesto_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                                                placeholder="ID puesto"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Empleado:</label>
                    <input
                        name="tipo_de_empleado_id"
                        value={empleado.tipo_de_empleado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                                            placeholder="Tipo empleado ID"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Especialidad:</label>
                    <input
                        type="text"
                        name="especialidad"
                        value={empleado.especialidad}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={empleado.titulo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">No. Colegiado:</label>
                    <input
                        type="text"
                        name="no_colegiado"
                        value={empleado.no_colegiado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Nivel Educativo:</label>
                    <select
                        name="nivel_educativo"
                        value={empleado.nivel_educativo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Primaria">Primaria</option>
                        <option value="Básicos">Básicos</option>
                        <option value="Diversificado">Diversificado</option>
                        <option value="Técnico">Técnico</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Maestría">Maestría</option>
                        <option value="Doctorado">Doctorado</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <select
                        name="estado"
                        value={empleado.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        <option value="Suspendido">Suspendido</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Empleado
            </button>
        </form>
    );
}