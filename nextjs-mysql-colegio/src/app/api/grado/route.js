import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM grado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const { nombre_grado, prerequisito_grado_id, descripcion } = await request.json();

        const result = await pool.query(
            "INSERT INTO grado SET ?",
            { nombre_grado, prerequisito_grado_id, descripcion }
        );

        return NextResponse.json({
            id_grado: result.insertId,
            nombre_grado,
            prerequisito_grado_id,
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
