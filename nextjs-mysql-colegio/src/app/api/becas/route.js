import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM beca");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            nombre_beca,
            descripcion,
            requisitos,
            porcentaje,
            fecha_inicio,
            fecha_fin,
            estado,
            convenio,
            presupuesto
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO beca SET ?",
            {
                nombre_beca,
                descripcion,
                requisitos,
                porcentaje,
                fecha_inicio,
                fecha_fin,
                estado,
                convenio,
                presupuesto
            }
        );

        return NextResponse.json({
            beca_id: result.insertId,
            nombre_beca,
            descripcion,
            requisitos,
            porcentaje,
            fecha_inicio,
            fecha_fin,
            estado,
            convenio,
            presupuesto
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
