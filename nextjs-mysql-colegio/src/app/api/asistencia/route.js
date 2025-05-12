import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM asistencia");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            estudiante_id,
            curso_id,
            fecha,
            estado,
            observaciones,
            profesor_id,
            hora_registro,
            justificacion,
            documento_justificacion
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO asistencia SET ?",
            {
                estudiante_id,
                curso_id,
                fecha,
                estado,
                observaciones,
                profesor_id,
                hora_registro,
                justificacion,
                documento_justificacion
            }
        );

        return NextResponse.json({
            asistencia_id: result.insertId,
            estudiante_id,
            curso_id,
            fecha,
            estado,
            observaciones,
            profesor_id,
            hora_registro,
            justificacion,
            documento_justificacion
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
