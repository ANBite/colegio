import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM historial_empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            empleado_id,
            fecha_de_registro,
            accion_realizada,
            descripcion,
            usuario_registro,
            observaciones
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO historial_empleado SET ?",
            {
                empleado_id,
                fecha_de_registro,
                accion_realizada,
                descripcion,
                usuario_registro,
                observaciones
            }
        );

        return NextResponse.json({
            historial_empleado_id: result.insertId,
            empleado_id,
            fecha_de_registro,
            accion_realizada,
            descripcion,
            usuario_registro,
            observaciones
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
