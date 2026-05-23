import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'logs',data:[]})}
export async function POST(){return NextResponse.json({resource:'logs',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'logs',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'logs',message:'deleted'})}
