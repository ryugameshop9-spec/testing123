import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({resource:'banners',data:[]})}
export async function POST(){return NextResponse.json({resource:'banners',message:'created'})}
export async function PUT(){return NextResponse.json({resource:'banners',message:'updated'})}
export async function DELETE(){return NextResponse.json({resource:'banners',message:'deleted'})}
