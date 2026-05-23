import ProductGrid from '@/components/ProductGrid';import { products } from '@/lib/database/mock-data';
export default function Products(){return <ProductGrid products={products}/>}
