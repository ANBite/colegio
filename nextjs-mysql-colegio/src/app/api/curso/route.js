import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM curso");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            nombre,
            descripcion,
            horas_asignadas,
            estado
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO curso SET ?",
            {
                nombre,
                descripcion,
                horas_asignadas,
                estado
            }
        );

        return NextResponse.json({
            curso_id: result.insertId,
            nombre,
            descripcion,
            horas_asignadas,
            estado
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
