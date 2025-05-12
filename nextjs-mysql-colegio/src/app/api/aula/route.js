import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM aula");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            codigo,
            piso,
            capacidad_maxima,
            tipo_de_aula,
            recursos_disponibles,
            estado,
            horario_disponibilidad,
            fecha_ultimo_mantenimiento,
            observaciones
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO aula SET ?",
            {
                codigo,
                piso,
                capacidad_maxima,
                tipo_de_aula,
                recursos_disponibles,
                estado,
                horario_disponibilidad,
                fecha_ultimo_mantenimiento,
                observaciones
            }
        );

        return NextResponse.json({
            aula_id: result.insertId,
            codigo,
            piso,
            capacidad_maxima,
            tipo_de_aula,
            recursos_disponibles,
            estado,
            horario_disponibilidad,
            fecha_ultimo_mantenimiento,
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
