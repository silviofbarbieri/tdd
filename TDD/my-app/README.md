# Projeto React CI/CD com GitHub Actions, TDD e Vercel

Este projeto contém a estrutura completa de uma aplicação React integrada com automação de **CI/CD via GitHub Actions**, implementação da lógica **TDD (Test-Driven Development)** e estratégias de segurança para ocultar chaves de acesso.

---

## 🛠️ Tecnologias e Siglas Explicadas Passo a Passo

* **CI (Continuous Integration / Integração Contínua):** Prática de automação onde alterações de código são testadas e validadas automaticamente a cada commit ou pull request [cite: 1].
* **CD (Continuous Deployment / Implantação Contínua):** Automação do envio do código aprovado para os ambientes de produção ou homologação sem intervenção manual [cite: 1].
* **TDD (Test-Driven Development / Desenvolvimento Guiado por Testes):** Metodologia de desenvolvimento dividida nos ciclos:
  1. **RED:** Escrever um teste para uma funcionalidade que ainda não existe e vê-lo falhar [cite: 1].
  2. **GREEN:** Escrever o menor código necessário para fazer o teste passar [cite: 1].
  3. **REFACTOR:** Refatorar e otimizar o código sem alterar seu comportamento original [cite: 1].
* **GitHub Actions:** Ferramenta de automação de workflows baseada em eventos do repositório (push, PR) [cite: 1].
* **Vercel:** Plataforma de hospedagem serverless otimizada para frameworks modernos [cite: 1].

---

## 🔒 Gerenciamento Seguro de Chaves de Acesso

**Nunca insira chaves privadas (tokens, APIs, credenciais) no código-fonte [cite: 1].**

### Configuração de Variáveis de Ambiente no GitHub:
1. No seu repositório no GitHub, acesse **Settings > Secrets and variables > Actions** [cite: 1].
2. Clique em **New repository secret** [cite: 1].
3. Adicione as chaves necessárias:
   * `REACT_APP_API_KEY`: Sua chave de API de desenvolvimento/produção.
   * `VERCEL_TOKEN`: Token de autenticação da conta Vercel.
   * `VERCEL_ORG_ID`: ID da sua organização na Vercel.
   * `VERCEL_PROJECT_ID`: ID do projeto na Vercel.

---

## 🔑 Como Fazer Login e Versionar via GitHub CLI

### 1. Autenticação e Login
```bash
# Autenticar no GitHub via terminal
gh auth login
```
Selecione as opções:
* **Platform:** GitHub.com
* **Protocol:** HTTPS ou SSH
* **Authenticate Git with your GitHub credentials?** Yes
* **Login method:** Web Browser

### 2. Versionamento Local e Envio para o Remoto (GitFlow)
```bash
# Inicializar o repositório local
git init

# Adicionar arquivos e fazer commit inicial
git add .
git commit -m "feat: estrutura inicial do projeto com TDD e GitHub Actions"

# Criar e alterar para a branch 'develop' (Fluxo GitFlow)
git checkout -b develop

# Adicionar repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Enviar branchs principais para o GitHub
git push -u origin main
git push -u origin develop
```

---

## 🧪 Matriz e Plano de Testes do Projeto

A suíte de testes foi desenhada com base nos quadrantes de testes do software [cite: 1]:

### 1. Testes de Unidade (`src/__tests__/unit.test.js`)
* **O que faz:** Testa funções isoladas em milissegundos sem subir dependências [cite: 1].
* **Importância:** Fornece o feedback mais rápido e direto durante o ciclo TDD [cite: 1].

### 2. Testes de Integração / Componente (`src/__tests__/integration.test.js`)
* **O que faz:** Valida a interação entre a interface (React) e a lógica de negócios (`counterService`) [cite: 1].
* **Importância:** Garante que os componentes reajam corretamente às ações do usuário e aos serviços de apoio [cite: 1].

### 3. Testes Funcionais / Aceitação (`src/__tests__/functional.test.js`)
* **O que faz:** Testam o sistema completo sob a perspectiva final do usuário [cite: 1].
* **Importância:** Assegura que o fluxo completo de entrega entrega valor ao negócio conforme os requisitos [cite: 1].

---

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm ci

# Executar todos os testes com cobertura
npm test

# Executar suíte de unidade isolada
npm run test:unit

# Executar suíte de integração
npm run test:integration

# Executar suíte funcional
npm run test:functional
```
