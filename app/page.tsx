import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/database/mock-data';
export default function Home(){return <div><h1 className='text-3xl font-bold mb-4'>Toko Online Digital Auto Order WhatsApp</h1><ProductGrid products={products}/></div>}
