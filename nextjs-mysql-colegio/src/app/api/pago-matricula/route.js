import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

export async function GET() {
    const [result] = await pool.query("SELECT * FROM pago_matricula");
    return NextResponse.json(result);
}

export async function POST(request) {
    try {
        const {
            estudiante_id,
            concepto,
            fecha_de_pago,
            monto,
            metodo_de_pago,
            ciclo_escolar,
            descuento_aplicado,
            mora_aplicada,
            factura,
            estado
        } = await request.json();

        const result = await pool.query(
            "INSERT INTO pago_matricula SET ?",
            {
                estudiante_id,
                concepto,
                fecha_de_pago,
                monto,
                metodo_de_pago,
                ciclo_escolar,
                descuento_aplicado,
                mora_aplicada,
                factura,
                estado
            }
        );

        return NextResponse.json({
            pago_id: result.insertId,
            estudiante_id,
            concepto,
            fecha_de_pago,
            monto,
            metodo_de_pago,
            ciclo_escolar,
            descuento_aplicado,
            mora_aplicada,
            factura,
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
