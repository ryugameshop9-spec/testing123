import CheckoutForm from '@/components/CheckoutForm';import { products } from '@/lib/database/mock-data';
export default function Checkout({searchParams}:{searchParams:{slug:string}}){const p=products.find(x=>x.slug===searchParams.slug) || products[0];return <div><h1 className='text-xl mb-3'>Checkout {p.name}</h1><CheckoutForm product={p}/></div>}
