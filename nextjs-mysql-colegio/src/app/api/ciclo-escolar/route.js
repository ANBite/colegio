import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM ciclo_escolar");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            año,
            fecha_inicio,
            fecha_fin,
            estado,
            fecha_cierre_calificaciones,
            fecha_cierre_de_actas,
            director,
            cordinador_academico
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO ciclo_escolar SET ?",
            {
                año,
                fecha_inicio,
                fecha_fin,
                estado,
                fecha_cierre_calificaciones,
                fecha_cierre_de_actas,
                director,
                cordinador_academico
            }
        );

        return NextResponse.json({
            ciclo_id: result.insertId,
            año,
            fecha_inicio,
            fecha_fin,
            estado,
            fecha_cierre_calificaciones,
            fecha_cierre_de_actas,
            director,
            cordinador_academico
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
