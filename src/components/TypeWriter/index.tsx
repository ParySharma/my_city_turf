'use client';

import { useEffect, useState, useRef } from 'react';

const Typewriter = ({ value }: { value: string }) => {
  const [text, setText] = useState('');
  const indexRef = useRef(0);
  const speed = 50;

  useEffect(() => {
    setText(''); // Reset text
    indexRef.current = 0; // Reset index

    const type = () => {
      if (indexRef.current < value.length) {
        setText((prev) => prev + value.charAt(indexRef.current));
        indexRef.current += 1;
        setTimeout(type, speed); // Use setTimeout for timing
      }
    };

    type();
  }, [value]); // Re-run when `value` changes

  return <div>{text}</div>;
};

export default Typewriter;
