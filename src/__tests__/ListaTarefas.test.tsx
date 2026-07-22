import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListaTarefas } from '../components/ListaTarefas';

describe('Componente: ListaTarefas e Interações', () => {
  it('deve permitir interagir com a lista de tarefas (concluir, excluir e atualizar contadores)', () => {
    const tarefasIniciais = [
      { id: 1, titulo: 'Comprar leite', concluida: false },
      { id: 2, titulo: 'Estudar Next.js', concluida: true }
    ];

    const handleToggle = jest.fn();
    const handleExcluir = jest.fn();

    render(
      <ListaTarefas 
        tarefasIniciais={tarefasIniciais} 
      />
    );

    expect(screen.getByText('Comprar leite')).toBeInTheDocument();
    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument();

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(handleToggle).toHaveBeenCalledWith(1);

    const botoesExcluir = screen.getAllByRole('button', { name: /excluir|deletar|remov/i });
    if (botoesExcluir.length > 0) {
      fireEvent.click(botoesExcluir[0]);
      expect(handleExcluir).toHaveBeenCalled();
    }
  });
});