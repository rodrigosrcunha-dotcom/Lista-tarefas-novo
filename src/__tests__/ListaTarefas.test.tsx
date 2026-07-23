import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListaTarefas } from '../components/ListaTarefas';

describe('Componente: ListaTarefas e Interações', () => {
  const tarefasIniciais = [
    { id: 1, titulo: 'Comprar leite', concluida: false },
    { id: 2, titulo: 'Estudar Next.js', concluida: true },
  ];

  it('deve renderizar a lista inicial com os contadores corretos', () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByText('Comprar leite')).toBeInTheDocument();
    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument();
    
    // Verifica contadores iniciais (Total: 2, Concluídas: 1)
    expect(screen.getByText('Total: 2')).toBeInTheDocument();
    expect(screen.getByText('Concluídas: 1')).toBeInTheDocument();
  });

  it('deve permitir concluir uma tarefa e atualizar o contador de Concluídas e estilo visual', () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    const itemNaoConcluido = screen.getByText('Comprar leite');

    // Clica no texto/item para alternar o estado de concluído
    fireEvent.click(itemNaoConcluido);

    // Verifica a alteração visual (classe line-through aplicada no título)
    expect(itemNaoConcluido).toHaveClass('line-through');

    // Confirma que o contador de concluídas foi atualizado para 2
    expect(screen.getByText('Concluídas: 2')).toBeInTheDocument();
  });

  it('deve excluir uma tarefa, remover do DOM e atualizar o contador total', () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    expect(screen.getByText('Comprar leite')).toBeInTheDocument();

    // Busca os botões com o ícone '✕' renderizado pelo componente
    const botoesExcluir = screen.getAllByText('✕');

    // Clica no botão de excluir do primeiro item ('Comprar leite')
    fireEvent.click(botoesExcluir[0]);

    // Confirma que o texto 'Comprar leite' sumiu do DOM
    expect(screen.queryByText('Comprar leite')).not.toBeInTheDocument();

    // Confirma que o contador Total caiu para 1
    expect(screen.getByText('Total: 1')).toBeInTheDocument();
  });
});