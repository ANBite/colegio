import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM usuario");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { empleado_id, username, password_hash, rol } = await request.json();

        const result = await pool.query(
            "INSERT INTO usuario SET ?",
            { empleado_id, username, password_hash, rol }
        );

        return NextResponse.json({
            usuario_id: result.insertId,
            empleado_id,
            username,
            password_hash,
            rol
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
