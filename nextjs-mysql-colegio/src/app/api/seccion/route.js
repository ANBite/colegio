import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM seccion");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            grado_id,
            nombre,
            aula_asignada_id,
            capacidad_max,
            profesor_encargado_id,
            ciclo_escolar_id,
            estado,
            horario_entrada,
            horario_salida
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO seccion SET ?",
            {
                grado_id,
                nombre,
                aula_asignada_id,
                capacidad_max,
                profesor_encargado_id,
                ciclo_escolar_id,
                estado,
                horario_entrada,
                horario_salida
            }
        );

        return NextResponse.json({
            seccion_id: result.insertId,
            grado_id,
            nombre,
            aula_asignada_id,
            capacidad_max,
            profesor_encargado_id,
            ciclo_escolar_id,
            estado,
            horario_entrada,
            horario_salida
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
