import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM tipo_de_empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { descripcion } = await request.json();

        const result = await pool.query(
            "INSERT INTO tipo_de_empleado SET ?",
            { descripcion }
        );

        return NextResponse.json({
            tipo_de_empleado_id: result.insertId,
            descripcion
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
