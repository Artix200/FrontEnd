'use client';

export default function CatchButton({ name }) {
  return <button onClick={() => alert(`Złapany pokemon ${name}`)} />;
}
