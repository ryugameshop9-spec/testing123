import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'products',data:[]})}
export async function POST(){return NextResponse.json({resource:'products',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'products',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'products',message:'deleted'})}
