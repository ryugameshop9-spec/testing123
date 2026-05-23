import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'orders',data:[]})}
export async function POST(){return NextResponse.json({resource:'orders',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'orders',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'orders',message:'deleted'})}
