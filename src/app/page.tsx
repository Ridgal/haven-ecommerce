import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function Home() {
  return (
    <div className='text-3xl font-bold underline'>
      <Button variant='link'>Outline</Button>
      <Input type='email' placeholder='Email' />
      <div className='h-10 w-10 bg-red-500'></div>
    </div>
  );
}

export default Home;
