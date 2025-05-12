import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM contrato_empleado");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            empleado_id,
            tipo_contrato,
            fecha_inicio,
            fecha_fin,
            salario_mensual,
            estado
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO contrato_empleado SET ?",
            {
                empleado_id,
                tipo_contrato,
                fecha_inicio,
                fecha_fin,
                salario_mensual,
                estado
            }
        );

        return NextResponse.json({
            contrato_id: result.insertId,
            empleado_id,
            tipo_contrato,
            fecha_inicio,
            fecha_fin,
            salario_mensual,
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
