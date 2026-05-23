import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'testimonials',data:[]})}
export async function POST(){return NextResponse.json({resource:'testimonials',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'testimonials',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'testimonials',message:'deleted'})}
