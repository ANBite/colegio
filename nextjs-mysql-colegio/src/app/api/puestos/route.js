import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM puesto");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { nombre, descripcion, departamento_id } = await request.json();

        const result = await pool.query(
            "INSERT INTO puesto SET ?",
            {
                nombre,
                descripcion,
                departamento_id
            }
        );

        return NextResponse.json({
            puesto_id: result.insertId,
            nombre,
            descripcion,
            departamento_id
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
