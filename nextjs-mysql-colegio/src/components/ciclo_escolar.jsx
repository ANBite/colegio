"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function CicloEscolarForm() {
    const [ciclo, setCiclo] = useState({
        año: "",
        fecha_inicio: "",
        fecha_fin: "",
        estado: "",
        fecha_cierre_calificaciones: "",
        fecha_cierre_de_actas: "",
        director: "",
        cordinador_academico: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setCiclo({
            ...ciclo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/ciclo-escolar", ciclo);
            alert("Ciclo escolar registrado exitosamente");
            form.current.reset();
            setCiclo({
                año: "",
                fecha_inicio: "",
                fecha_fin: "",
                estado: "",
                fecha_cierre_calificaciones: "",
                fecha_cierre_de_actas: "",
                director: "",
                cordinador_academico: ""
            });
        } catch (error) {
            console.error("Error al registrar ciclo escolar:", error);
            alert("Error al registrar ciclo escolar");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Ciclo Escolar</h2>
            
            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Año:</label>
                    <input
                        type="number"
                        name="año"
                        value={ciclo.año}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Inicio:</label>
                    <input
                        type="date"
                        name="fecha_inicio"
                        value={ciclo.fecha_inicio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Fin:</label>
                    <input
                        type="date"
                        name="fecha_fin"
                        value={ciclo.fecha_fin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <select
                        name="estado"
                        value={ciclo.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        <option value="Planificado">Planificado</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Cierre Calificaciones:</label>
                    <input
                        type="date"
                        name="fecha_cierre_calificaciones"
                        value={ciclo.fecha_cierre_calificaciones}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Cierre Actas:</label>
                    <input
                        type="date"
                        name="fecha_cierre_de_actas"
                        value={ciclo.fecha_cierre_de_actas}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Director:</label>
                    <input
                        type="text"
                        name="director"
                        value={ciclo.director}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Coordinador Académico:</label>
                    <input
                        type="text"
                        name="cordinador_academico"
                        value={ciclo.cordinador_academico}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Ciclo Escolar
            </button>
        </form>
    );
}