import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM asignacion_curso");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            id_curso,
            id_seccion,
            id_docente,
            ciclo_escolar_id
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO asignacion_curso SET ?",
            {
                id_curso,
                id_seccion,
                id_docente,
                ciclo_escolar_id
            }
        );

        return NextResponse.json({
            id_asignacion_curso: result.insertId,
            id_curso,
            id_seccion,
            id_docente,
            ciclo_escolar_id
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
