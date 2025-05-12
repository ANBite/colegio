import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM contacto_de_emergencia_estudiante");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { nombre, numero, parentesco } = await request.json();

        const result = await pool.query(
            "INSERT INTO contacto_de_emergencia_estudiante SET ?",
            { nombre, numero, parentesco }
        );

        return NextResponse.json({
            contacto_de_emergencia_id: result.insertId,
            nombre,
            numero,
            parentesco
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
