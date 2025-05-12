import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM asistencia_empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            empleado_id,
            fecha,
            estado,
            observaciones,
            hora_registro,
            justificacion,
            documento_justificacion
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO asistencia_empleado SET ?",
            {
                empleado_id,
                fecha,
                estado,
                observaciones,
                hora_registro,
                justificacion,
                documento_justificacion
            }
        );

        return NextResponse.json({
            asistencia_empleado_id: result.insertId,
            empleado_id,
            fecha,
            estado,
            observaciones,
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
