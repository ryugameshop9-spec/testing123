import { NextResponse } from 'next/server';import { products } from '@/lib/database/mock-data';
export async function GET(_:Request,{params}:{params:{slug:string}}){const p=products.find(x=>x.slug===params.slug);return p?NextResponse.json(p):NextResponse.json({message:'Not found'},{status:404})}
