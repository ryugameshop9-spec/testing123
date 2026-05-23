import { NextResponse } from 'next/server';export async function GET(_:Request,{params}:{params:{order_code:string}}){return NextResponse.json({order_code:params.order_code,status:'pending'})}
