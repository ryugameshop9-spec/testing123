import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'dashboard',data:[]})}
export async function POST(){return NextResponse.json({resource:'dashboard',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'dashboard',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'dashboard',message:'deleted'})}
