import { NextResponse } from 'next/server';export async function PUT(req:Request){const body=await req.json();return NextResponse.json({message:'settings updated',body})}
