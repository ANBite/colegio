import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM departamento");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { nombre, descripcion } = await request.json();

        const result = await pool.query(
            "INSERT INTO departamento SET ?",
            { nombre, descripcion }
        );

        return NextResponse.json({
            departamento_id: result.insertId,
            nombre,
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
