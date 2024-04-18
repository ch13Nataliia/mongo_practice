import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-slate-600 text-white p-4 shadow-md'>
      <Link href={'/'} className='font-bold'>Logo</Link>
      <Link href={'/addTopic'} className='font-bold bg-white text-black p-2 rounded-md'>Add Topic</Link>
    </nav>
  );
}

export default Navbar;
