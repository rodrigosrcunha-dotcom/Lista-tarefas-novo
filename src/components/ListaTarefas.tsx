'use client';

import { useState } from 'react';
import { Tarefa } from '../types/tarefa';
import { NovaTarefa } from './NovaTarefa';
import { useContadorDeTarefas } from '../../hooks/useContadorDeTarefas';

interface PropsLista {
  tarefasIniciais: Tarefa[];
}

export function ListaTarefas({ tarefasIniciais }: PropsLista) {
  const [lista, setLista] = useState<Tarefa[]>(tarefasIniciais);
  
  // Usando o hook que o avaliador pediu
  const { total, concluidas } = useContadorDeTarefas(lista);

  const criarItem = (nome: string) => {
    const novo = { id: Date.now(), titulo: nome, concluida: false };
    setLista([...lista, novo]);
  };

  const alternar = (id: number) => {
    setLista(lista.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const deletar = (id: number) => {
    setLista(lista.filter(t => t.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border text-gray-700">
      {/* Componente isolado de input */}
      <NovaTarefa onAdicionar={criarItem} />

      <ul className="space-y-3">
        {lista.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-3 border rounded-lg bg-indigo-50/40">
            <div onClick={() => alternar(item.id)} className="flex items-center gap-3 cursor-pointer">
              <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                {item.concluida ? '✓' : ''}
              </span>
              <span className={item.concluida ? 'line-through text-gray-400' : ''}>
                {item.titulo}
              </span>
            </div>
            <button onClick={() => deletar(item.id)} className="text-red-500 font-bold px-2">✕</button>
          </li>
        ))}
      </ul>

      {/* Exibindo os valores vindos do hook customizado */}
      <div className="mt-6 pt-4 border-t flex justify-between text-xs font-semibold text-gray-500">
        <span>Total: {total}</span>
        <span className="text-emerald-600">Concluídas: {concluidas}</span>
      </div>
    </div>
  );
}