import { Tarefa } from '../types/tarefa';

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const total = tarefas.length;
  const concluidas = tarefas.filter((t) => t.concluida).length;
  return { total, concluidas };
}