'use client';
import { useState } from 'react';

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    onAdicionar(titulo);
    setTitulo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite uma nova tarefa..."
        className="flex-1 px-4 py-2 border rounded-lg text-gray-700"
      />
      <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg">
        Adicionar
      </button>
    </form>
  );
}