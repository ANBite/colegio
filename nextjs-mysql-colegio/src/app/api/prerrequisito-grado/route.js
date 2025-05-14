import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM prerrequisito_grado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            grado,
            edad_minima_estudiante
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO prerrequisito_grado SET ?",
            {
                grado,
                edad_minima_estudiante
            }
        );

        return NextResponse.json({
            id_prerrequisito: result.insertId,
            grado,
            edad_minima_estudiante
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
