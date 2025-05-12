"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function BecaForm() {
    const [beca, setBeca] = useState({
        nombre_beca: "",
        descripcion: "",
        requisitos: "",
        porcentaje: "",
        fecha_inicio: "",
        fecha_fin: "",
        estado: "",
        convenio: "",
        presupuesto: ""
    });

    const form = useRef(null);

    const handleChange = (e) => {
        setBeca({
            ...beca,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/beca", beca);
            alert("Beca registrada exitosamente");
            form.current.reset();
            setBeca({
                nombre_beca: "",
                descripcion: "",
                requisitos: "",
                porcentaje: "",
                fecha_inicio: "",
                fecha_fin: "",
                estado: "",
                convenio: "",
                presupuesto: ""
            });
        } catch (error) {
            console.error("Error al registrar beca:", error);
            alert("Error al registrar beca");
        }
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Registro de Beca</h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Nombre de la Beca:</label>
                    <input
                        type="text"
                        name="nombre_beca"
                        value={beca.nombre_beca}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4 col-span-3">
                    <label className="block text-gray-700">Descripción:</label>
                    <textarea
                        name="descripcion"
                        value={beca.descripcion}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={2}
                    />
                </div>

                <div className="mb-4 col-span-3">
                    <label className="block text-gray-700">Requisitos:</label>
                    <textarea
                        name="requisitos"
                        value={beca.requisitos}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={2}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Porcentaje (%):</label>
                    <input
                        type="number"
                        step="0.01"
                        name="porcentaje"
                        value={beca.porcentaje}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Inicio:</label>
                    <input
                        type="date"
                        name="fecha_inicio"
                        value={beca.fecha_inicio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Fecha Fin:</label>
                    <input
                        type="date"
                        name="fecha_fin"
                        value={beca.fecha_fin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Estado:</label>
                    <select
                        name="estado"
                        value={beca.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="">Seleccione...</option>
                        <option value="Activa">Activa</option>
                        <option value="Inactiva">Inactiva</option>
                        <option value="Finalizada">Finalizada</option>
                    </select>
                </div>

                <div className="mb-4 col-span-2">
                    <label className="block text-gray-700">Convenio:</label>
                    <textarea
                        name="convenio"
                        value={beca.convenio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        rows={2}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Presupuesto (Q):</label>
                    <input
                        type="number"
                        step="0.01"
                        name="presupuesto"
                        value={beca.presupuesto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Beca
            </button>
        </form>
    );
}
