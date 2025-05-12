import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM inscripcion_estudiantes");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            estudiante_id,
            id_seccion,
            fecha_de_inscripcion,
            estado,
            pago_de_inscripcion,
            observaciones
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO inscripcion_estudiantes SET ?",
            {
                estudiante_id,
                id_seccion,
                fecha_de_inscripcion,
                estado,
                pago_de_inscripcion,
                observaciones
            }
        );

        return NextResponse.json({
            id_inscripcion_estudiante: result.insertId,
            estudiante_id,
            id_seccion,
            fecha_de_inscripcion,
            estado,
            pago_de_inscripcion,
            observaciones
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
