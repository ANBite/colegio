"use client";
import axios from "axios";
import { useRef, useState } from "react";

export default function PagoMatriculaForm() {
    const [pago, setPago] = useState({
        estudiante_id: "",
        concepto: undefined,
        fecha_de_pago: "",
        monto: "",
        metodo_de_pago: undefined,
        ciclo_escolar: undefined,
        descuento_aplicado: undefined,
        mora_aplicada: undefined,
        factura: undefined,
        estado: undefined,
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPago({ ...pago, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/pago-matricula", pago);
            alert("Pago de matrícula registrado exitosamente");
            form.current.reset();
            setPago({
                estudiante_id: "",
                concepto: undefined,
                fecha_de_pago: "",
                monto: "",
                metodo_de_pago: undefined,
                ciclo_escolar: undefined,
                descuento_aplicado: undefined,
                mora_aplicada: undefined,
                factura: undefined,
                estado: undefined,
            });
        } catch (error) {
            console.error("Error al registrar pago de matrícula:", error);
            alert("Error al registrar pago de matrícula");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Pago de Matrícula</h2>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">ID del estudiante:</label>
                    <input
                        type="number"
                        name="estudiante_id"
                        value={pago.estudiante_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Concepto:</label>
                    <input
                        type="text"
                        name="concepto"
                        value={pago.concepto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Fecha de pago:</label>
                    <input
                        type="date"
                        name="fecha_de_pago"
                        value={pago.fecha_de_pago}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Monto:</label>
                    <input
                        type="number"
                        name="monto"
                        value={pago.monto}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Método de pago:</label>
                    <input
                        type="text"
                        name="metodo_de_pago"
                        value={pago.metodo_de_pago}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Ciclo escolar:</label>
                    <input
                        type="number"
                        name="ciclo_escolar"
                        value={pago.ciclo_escolar}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Descuento aplicado:</label>
                    <input
                        type="number"
                        name="descuento_aplicado"
                        value={pago.descuento_aplicado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Mora aplicada:</label>
                    <input
                        type="number"
                        name="mora_aplicada"
                        value={pago.mora_aplicada}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Factura:</label>
                    <input
                        type="text"
                        name="factura"
                        value={pago.factura}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={pago.estado}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Pago de Matrícula
            </button>
        </form>
    );
}
