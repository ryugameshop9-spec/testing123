import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'categories',data:[]})}
export async function POST(){return NextResponse.json({resource:'categories',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'categories',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'categories',message:'deleted'})}
