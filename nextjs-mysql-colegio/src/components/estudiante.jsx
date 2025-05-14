"use client";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function EstudianteForm() {
    const [estudiante, setEstudiante] = useState({
        cod_personal: "",
        nombre: "",
        CUI: undefined,
        fecha_nacimiento: undefined,
        constancia: undefined,
        genero: undefined,
        fecha_ingreso: undefined,
        fecha_egreso: undefined,
        motivo_de_egreso: undefined,
        tipo_sangre: undefined,
        religion: undefined,
        etnia: undefined,
        idioma_materno: undefined,
        necesita_apoyo_educativo: false,
        beca_id: undefined
    });

    const [becas, setBecas] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        // Cargar becas disponibles
        const fetchBecas = async () => {
            try {
                const res = await axios.get("/api/beca");
                setBecas(res.data);
            } catch (error) {
                console.error("Error al cargar becas:", error);
            }
        };
        fetchBecas();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEstudiante({
            ...estudiante,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/estudiante", estudiante);
            alert("Estudiante registrado exitosamente");
            form.current.reset();
            setEstudiante({
                cod_personal: "",
                nombre: "",
                CUI: undefined,
                fecha_nacimiento: undefined,
                constancia: undefined,
                genero: undefined,
                fecha_ingreso: undefined,
                fecha_egreso: undefined,
                motivo_de_egreso: undefined,
                tipo_sangre: undefined,
                religion: undefined,
                etnia: undefined,
                idioma_materno: undefined,
                necesita_apoyo_educativo: false,
                beca_id: undefined
            });
        } catch (error) {
            console.error("Error al registrar estudiante:", error);
            alert("Error al registrar estudiante");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Estudiante</h2>
            
            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Código Personal:</label>
                    <input
                        type="text"
                        name="cod_personal"
                        value={estudiante.cod_personal}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Nombre Completo:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={estudiante.nombre}
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
                        value={estudiante.CUI}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Nacimiento:</label>
                    <input
                        type="date"
                        name="fecha_nacimiento"
                        value={estudiante.fecha_nacimiento}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Constancia:</label>
                    <input
                        type="text"
                        name="constancia"
                        value={estudiante.constancia}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Género:</label>
                    <select
                        name="genero"
                        value={estudiante.genero}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Ingreso:</label>
                    <input
                        type="date"
                        name="fecha_ingreso"
                        value={estudiante.fecha_ingreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Egreso:</label>
                    <input
                        type="date"
                        name="fecha_egreso"
                        value={estudiante.fecha_egreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Motivo Egreso:</label>
                    <textarea
                        name="motivo_de_egreso"
                        value={estudiante.motivo_de_egreso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Sangre:</label>
                    <select
                        name="tipo_sangre"
                        value={estudiante.tipo_sangre}
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
                    <label className="block text-gray-700">Religión:</label>
                    <input
                        type="text"
                        name="religion"
                        value={estudiante.religion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Etnia:</label>
                    <input
                        type="text"
                        name="etnia"
                        value={estudiante.etnia}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Idioma Materno:</label>
                    <input
                        type="text"
                        name="idioma_materno"
                        value={estudiante.idioma_materno}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="necesita_apoyo_educativo"
                        checked={estudiante.necesita_apoyo_educativo}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label className="text-gray-700">Necesita apoyo educativo</label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Beca:</label>
                    <input
                        name="beca_id"
                        value={estudiante.beca_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Beca ID"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Estudiante
            </button>
        </form>
    );
}