import { CircleUser, ShoppingCart } from 'lucide-react';

function Header() {
  return (
    <header className='bg-amber-600'>
      Header
      <ShoppingCart className='h-10 w-10 text-red-700' />
      <CircleUser />
    </header>
  );
}

export { Header };
