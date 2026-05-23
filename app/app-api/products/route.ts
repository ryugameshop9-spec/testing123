import { NextResponse } from 'next/server';import { products } from '@/lib/database/mock-data';
export async function GET(){return NextResponse.json(products)}
