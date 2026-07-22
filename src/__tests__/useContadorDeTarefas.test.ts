import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import { Tarefa } from '../types/tarefa';

describe('Hook: useContadorDeTarefas', () => {
  it('deve retornar totais zerados para uma lista vazia', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));
    expect(result.current.total).toBe(0);
    expect(result.current.concluidas).toBe(0);
  });

  it('deve calcular corretamente o total de tarefas e o total de concluídas', () => {
    const tarefasMock: Tarefa[] = [
      { id: 1, titulo: 'Tarefa 1', concluida: true },
      { id: 2, titulo: 'Tarefa 2', concluida: false },
      { id: 3, titulo: 'Tarefa 3', concluida: true }
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock));
    expect(result.current.total).toBe(3);
    expect(result.current.concluidas).toBe(2);
  });
});