import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM estudiante");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            cod_personal,
            nombre,
            CUI,
            fecha_nacimiento,
            constancia,
            genero,
            fecha_ingreso,
            fecha_egreso,
            motivo_de_egreso,
            documentacion_estudiante_id,
            contacto_de_emergencia_id,
            tipo_sangre,
            religion,
            etnia,
            idioma_materno,
            necesita_apoyo_educativo,
            beca_id
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO estudiante SET ?",
            {
                cod_personal,
                nombre,
                CUI,
                fecha_nacimiento,
                constancia,
                genero,
                fecha_ingreso,
                fecha_egreso,
                motivo_de_egreso,
                documentacion_estudiante_id,
                contacto_de_emergencia_id,
                tipo_sangre,
                religion,
                etnia,
                idioma_materno,
                necesita_apoyo_educativo,
                beca_id
            }
        );

        return NextResponse.json({
            estudiante_id: result.insertId,
            cod_personal,
            nombre,
            CUI,
            fecha_nacimiento,
            constancia,
            genero,
            fecha_ingreso,
            fecha_egreso,
            motivo_de_egreso,
            documentacion_estudiante_id,
            contacto_de_emergencia_id,
            tipo_sangre,
            religion,
            etnia,
            idioma_materno,
            necesita_apoyo_educativo,
            beca_id
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
