import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NovaTarefa } from '../components/NovaTarefa';

describe('Componente: NovaTarefa', () => {
  it('deve chamar a função onAdicionar com o texto correto e limpar o campo após o envio', () => {
    const handleAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={handleAdicionar} />);

    const input = screen.getByPlaceholderText(/adicionar|digite|nova tarefa/i);
    const botao = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Estudar Jest' } });
    expect(input).toHaveValue('Estudar Jest');

    fireEvent.click(botao);

    expect(handleAdicionar).toHaveBeenCalledTimes(1);
    expect(handleAdicionar).toHaveBeenCalledWith('Estudar Jest');
    expect(input).toHaveValue('');
  });
});