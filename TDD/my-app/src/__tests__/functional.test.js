import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes Funcionais / Aceitação: App Completo', () => {
  test('deve renderizar a aplicação inteira sob a visão do usuário', () => {
    render(<App />);
    
    expect(screen.getByText('Painel do Usuário - Vercel & GitHub Actions')).toBeInTheDocument();
    expect(screen.getByTestId('counter-container')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value').textContent).toBe('10');
  });
});
