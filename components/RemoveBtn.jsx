'use client';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <button onClick={removeTopic}>
        <FaTrashAlt size={24} className="text-red-800" />
      </button>
    </div>
  );
}

export default RemoveBtn;
