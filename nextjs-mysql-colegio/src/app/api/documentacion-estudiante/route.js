import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM documentacion_estudiante");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            tipo_de_documento_id,
            estado,
            fecha_de_subida,
            observaciones,
            ruta_de_archivo
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO documentacion_estudiante SET ?",
            {
                tipo_de_documento_id,
                estado,
                fecha_de_subida,
                observaciones,
                ruta_de_archivo
            }
        );

        return NextResponse.json({
            documentacion_estudiante_id: result.insertId,
            tipo_de_documento_id,
            estado,
            fecha_de_subida,
            observaciones,
            ruta_de_archivo
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
