import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            cod_empleado,
            nombre,
            CUI,
            fecha_nacimiento,
            genero,
            direccion,
            telefono,
            estado_civil,
            fecha_contratacion,
            fecha_egreso,
            motivo_de_egreso,
            contacto_de_emergencia_id,
            tipo_sangre,
            puesto_id,
            tipo_de_empleado_id,
            especialidad,
            titulo,
            no_colegiado,
            nivel_educativo,
            estado,
            documentacion_empleado_id
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO empleado SET ?",
            {
                cod_empleado,
                nombre,
                CUI,
                fecha_nacimiento,
                genero,
                direccion,
                telefono,
                estado_civil,
                fecha_contratacion,
                fecha_egreso,
                motivo_de_egreso,
                contacto_de_emergencia_id,
                tipo_sangre,
                puesto_id,
                tipo_de_empleado_id,
                especialidad,
                titulo,
                no_colegiado,
                nivel_educativo,
                estado,
                documentacion_empleado_id
            }
        );

        return NextResponse.json({
            empleado_id: result.insertId,
            cod_empleado,
            nombre,
            CUI,
            fecha_nacimiento,
            genero,
            direccion,
            telefono,
            estado_civil,
            fecha_contratacion,
            fecha_egreso,
            motivo_de_egreso,
            contacto_de_emergencia_id,
            tipo_sangre,
            puesto_id,
            tipo_de_empleado_id,
            especialidad,
            titulo,
            no_colegiado,
            nivel_educativo,
            estado,
            documentacion_empleado_id
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
