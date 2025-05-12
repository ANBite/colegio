"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function DocumentacionEstudianteForm() {
    const [documentacion, setDocumentacion] = useState({
        tipo_de_documento_id: "",
        estado: "",
        fecha_de_subida: "",
        observaciones: "",
        ruta_de_archivo: "",
    });

    const [tiposDeDocumento, setTiposDeDocumento] = useState([]);

    const form = useRef(null);

    useEffect(() => {
        // Cargar los tipos de documento disponibles desde la API
        const fetchTiposDeDocumento = async () => {
            try {
                const res = await axios.get("/api/tipo-de-documento-estudiante");
                setTiposDeDocumento(res.data); // Suponiendo que la respuesta es un array de tipos de documento
            } catch (error) {
                console.error("Error al cargar los tipos de documento:", error);
            }
        };

        fetchTiposDeDocumento();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocumentacion({
            ...documentacion,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/documentacion-estudiante", documentacion);
            alert("Documentación registrada exitosamente");
            form.current.reset();
            setDocumentacion({
                tipo_de_documento_id: "",
                estado: "",
                fecha_de_subida: "",
                observaciones: "",
                ruta_de_archivo: "",
            });
        } catch (error) {
            console.error("Error al registrar documentación:", error);
            alert("Error al registrar documentación");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Documentación de Estudiante</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Tipo de Documento:</label>
                    <select
                        name="tipo_de_documento_id"
                        value={documentacion.tipo_de_documento_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione un tipo de documento...</option>
                        {tiposDeDocumento.map((tipo) => (
                            <option key={tipo.tipo_de_documento_id} value={tipo.tipo_de_documento_id}>
                                {tipo.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <select
                        name="estado"
                        value={documentacion.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione estado...</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha de Subida:</label>
                    <input
                        type="date"
                        name="fecha_de_subida"
                        value={documentacion.fecha_de_subida}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Observaciones:</label>
                    <textarea
                        name="observaciones"
                        value={documentacion.observaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Observaciones sobre el documento"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Ruta del Archivo:</label>
                    <input
                        type="text"
                        name="ruta_de_archivo"
                        value={documentacion.ruta_de_archivo}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Ruta del archivo"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Documentación
            </button>
        </form>
    );
}
