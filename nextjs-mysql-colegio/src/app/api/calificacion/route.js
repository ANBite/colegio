import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM calificacion");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            estudiante_id,
            seccion_id,
            curso_id,
            bimestre,
            tipo_evaluacion,
            puntaje,
            ponderacion,
            fecha_registro,
            profesor_id,
            retroalimentacion,
            observaciones,
            fecha_actualizado
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO calificacion SET ?",
            {
                estudiante_id,
                seccion_id,
                curso_id,
                bimestre,
                tipo_evaluacion,
                puntaje,
                ponderacion,
                fecha_registro,
                profesor_id,
                retroalimentacion,
                observaciones,
                fecha_actualizado
            }
        );

        return NextResponse.json({
            calificacion_id: result.insertId,
            estudiante_id,
            seccion_id,
            curso_id,
            bimestre,
            tipo_evaluacion,
            puntaje,
            ponderacion,
            fecha_registro,
            profesor_id,
            retroalimentacion,
            observaciones,
            fecha_actualizado
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
