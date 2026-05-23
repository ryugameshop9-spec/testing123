import { NextResponse } from 'next/server';import { signAdminToken } from '@/lib/auth/auth';
export async function POST(req:Request){const {email,password}=await req.json(); if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){return NextResponse.json({token:signAdminToken({email,role:'admin'})});} return NextResponse.json({message:'Unauthorized'},{status:401})}
