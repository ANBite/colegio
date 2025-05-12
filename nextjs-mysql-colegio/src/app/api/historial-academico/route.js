import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM historial_academico");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            fecha_de_registro,
            estudiante_id,
            grado_id,
            ciclo_escolar_id,
            seccion_id,
            estado,
            cursado_cursando,
            promedio_final,
            observaciones,
            promovido,
            recomendacion
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO historial_academico SET ?",
            {
                fecha_de_registro,
                estudiante_id,
                grado_id,
                ciclo_escolar_id,
                seccion_id,
                estado,
                cursado_cursando,
                promedio_final,
                observaciones,
                promovido,
                recomendacion
            }
        );

        return NextResponse.json({
            historial_academico_id: result.insertId,
            fecha_de_registro,
            estudiante_id,
            grado_id,
            ciclo_escolar_id,
            seccion_id,
            estado,
            cursado_cursando,
            promedio_final,
            observaciones,
            promovido,
            recomendacion
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
