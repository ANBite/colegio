"use client";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

function RegistrarEstudiante() {
    const [estudiante, setEstudiante] = useState({
        cod_personal: "",
        nombre: "",
        CUI: "",
        fecha_nacimiento: "",
        constancia: "",
        genero: "",
        fecha_ingreso: "",
        fecha_egreso: "",
        motivo_de_egreso: "",
        documentacion_estudiante_id: "",
        contacto_de_emergencia_id: "",
        tipo_sangre: "",
        religion: "",
        etnia: "",
        idioma_materno: "",
        necesita_apoyo_educativo: false,
        beca_id: "",
    });

    const form = useRef(null);
    const router = useRouter();

    const handleChange = (e) => {
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            cod_personal, nombre, CUI, fecha_nacimiento,
            constancia, genero, fecha_ingreso, fecha_egreso, motivo_de_egreso,
            documentacion_estudiante_id, contacto_de_emergencia_id, tipo_sangre,
            religion, etnia, idioma_materno, necesita_apoyo_educativo, beca_id,
        } = estudiante;

        if (!cod_personal || !nombre || !CUI || !fecha_nacimiento || !constancia || !genero || !fecha_ingreso || !documentacion_estudiante_id || !contacto_de_emergencia_id || !tipo_sangre || !religion || !etnia || !idioma_materno || !beca_id) {
            alert("Debe llenar todos los campos.");
            return;
        }

        try {
            const res = await axios.post("/api/estudiante", estudiante);
            alert("Estudiante registrado exitosamente.");
            console.log("Respuesta:", res.data);

            form.current.reset();
            setEstudiante({
                cod_personal: "", nombre: "", CUI: "",
                fecha_nacimiento: "", constancia: "", genero: "", fecha_ingreso: "", documentacion_estudiante_id: "",
                contacto_de_emergencia_id: "", tipo_sangre: "", religion: "", etnia: "",
                idioma_materno: "", necesita_apoyo_educativo: "", beca_id: "",
            });
        } catch (error) {
            console.error("Error al registrar el estudiante:", error);
            alert("Error al guardar el estudiante.");
        }
    };

    const irAgregarProveedor = () => {
        router.push("/agregarproveedor");
    };

    return (
        <form
            className="absolute bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-[1440px] h-[650px] top-[70px] left-[20px]"
            ref={form}
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>Código Personal:</label>
                    <input
                        type="text"
                        name="cod_personal"
                        value={estudiante.cod_personal}
                        onChange={handleChange}
                        placeholder="Código Personal"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={estudiante.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>CUI:</label>
                    <input
                        type="text"
                        name="CUI"
                        value={estudiante.CUI}
                        onChange={handleChange}
                        placeholder="CUI"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Fecha de Nacimiento:</label>
                    <input
                        type="date"
                        name="fecha_nacimiento"
                        value={estudiante.fecha_nacimiento}
                        onChange={handleChange}
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Constancia:</label>
                    <input
                        type="text"
                        name="constancia"
                        value={estudiante.constancia}
                        onChange={handleChange}
                        placeholder="Constancia"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Género:</label>
                    <input
                        type="text"
                        name="genero"
                        value={estudiante.genero}
                        onChange={handleChange}
                        placeholder="Género"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Fecha de Ingreso:</label>
                    <input
                        type="date"
                        name="fecha_ingreso"
                        value={estudiante.fecha_ingreso}
                        onChange={handleChange}
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Fecha de Egreso:</label>
                    <input
                        type="date"
                        name="fecha_egreso"
                        value={estudiante.fecha_egreso}
                        onChange={handleChange}
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Motivo de Egreso:</label>
                    <input
                        type="text"
                        name="motivo_de_egreso"
                        value={estudiante.motivo_de_egreso}
                        onChange={handleChange}
                        placeholder="Motivo de Egreso"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>ID Documentación Estudiante:</label>
                    <input
                        type="text"
                        name="documentacion_estudiante_id"
                        value={estudiante.documentacion_estudiante_id}
                        onChange={handleChange}
                        placeholder="ID Documentación Estudiante"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>ID Contacto de Emergencia:</label>
                    <input
                        type="text"
                        name="contacto_de_emergencia_id"
                        value={estudiante.contacto_de_emergencia_id}
                        onChange={handleChange}
                        placeholder="ID Contacto de Emergencia"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Tipo de Sangre:</label>
                    <input
                        type="text"
                        name="tipo_sangre"
                        value={estudiante.tipo_sangre}
                        onChange={handleChange}
                        placeholder="Tipo de Sangre"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Religión:</label>
                    <input
                        type="text"
                        name="religion"
                        value={estudiante.religion}
                        onChange={handleChange}
                        placeholder="Religión"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Etnia:</label>
                    <input
                        type="text"
                        name="etnia"
                        value={estudiante.etnia}
                        onChange={handleChange}
                        placeholder="Etnia"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Idioma Materno:</label>
                    <input
                        type="text"
                        name="idioma_materno"
                        value={estudiante.idioma_materno}
                        onChange={handleChange}
                        placeholder="Idioma Materno"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>Necesita Apoyo Educativo:</label>
                    <input
                        type="checkbox"
                        name="necesita_apoyo_educativo"
                        checked={estudiante.necesita_apoyo_educativo}
                        onChange={(e) => setEstudiante({ ...estudiante, necesita_apoyo_educativo: e.target.checked })}
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
                <div>
                    <label>ID Beca:</label>
                    <input
                        type="text"
                        name="beca_id"
                        value={estudiante.beca_id}
                        onChange={handleChange}
                        placeholder="ID Beca"
                        className="w-full h-10 bg-purple-600 text-black rounded-md p-2"
                    />
                </div>
            </div>

            <div className="mt-4 flex justify-center space-x-6">
                <button
                    type="submit"
                    className="w-[200px] h-[40px] bg-purple-500 text-white rounded-md"
                >
                    Registrar Estudiante
                </button>

                <button
                    type="button"
                    onClick={irAgregarProveedor}
                    className="w-[200px] h-[40px] bg-green-500 text-white rounded-md"
                >
                    ➡️ Registrar Proveedor
                </button>
            </div>
        </form>
    );
}

export default RegistrarEstudiante;
