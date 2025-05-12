import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM tipo_de_documento_empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { nombre, descripcion, obligatorio } = await request.json();

        const result = await pool.query(
            "INSERT INTO tipo_de_documento_empleado SET ?",
            { nombre, descripcion, obligatorio }
        );

        return NextResponse.json({
            tipo_de_documento_id: result.insertId,
            nombre,
            descripcion,
            obligatorio
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
