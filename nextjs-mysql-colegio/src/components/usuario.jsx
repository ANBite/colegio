"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function UsuarioForm() {
    const [usuario, setUsuario] = useState({
        empleado_id: "",
        username: "",
        password_hash: "",
        rol: "",
    });

    const [empleados, setEmpleados] = useState([]);
    const form = useRef(null);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const res = await axios.get("/api/empleado");
                setEmpleados(res.data);
            } catch (error) {
                console.error("Error al cargar empleados:", error);
            }
        };
        fetchEmpleados();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/usuario", usuario);
            alert("Usuario registrado exitosamente");
            form.current.reset();
            setUsuario({
                empleado_id: "",
                username: "",
                password_hash: "",
                rol: "",
            });
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            alert("Error al registrar usuario");
        }
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px] overflow-y-auto"
        >
            <h2 className="text-xl font-bold mb-4">Registro de Usuario</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-700">Empleado:</label>
                    <input
                        name="empleado_id"
                        value={usuario.empleado_id}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Empleado ID"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Nombre de Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={usuario.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Contraseña:</label>
                    <input
                        type="password"
                        name="password_hash"
                        value={usuario.password_hash}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Rol:</label>
                    <input
                        type="text"
                        name="rol"
                        value={usuario.rol}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
                Registrar Usuario
            </button>
        </form>
    );
}
