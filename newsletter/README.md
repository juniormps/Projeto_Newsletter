# 📬 Newsletter App

Uma aplicação moderna de assinatura de newsletter, com validação de e-mail, mensagens de erro acessíveis e layout responsivo. Desenvolvida em React com Vite. O projeto é um desafio do site Frontend Mentor (https://www.frontendmentor.io/).

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Router](https://img.shields.io/badge/React_Router-6.22.3-DD0031?logo=reactrouter&logoColor=white&style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

---

## ✨ Demonstração

> 📷 https://juniormps.github.io/Projeto_Newsletter/

---

## 🚀 Tecnologias

- ⚛️ **React 18** – Biblioteca JavaScript para interfaces reativas
- 🔀 **React Router DOM** – Navegação entre páginas de forma dinâmica
- ⚡ **Vite** – Empacotador moderno para desenvolvimento rápido
- 🎨 **CSS3** – Estilização responsiva e mobile-first
- 🧠 **HTML Semântico** – Boas práticas de acessibilidade e SEO
- 🅰️ **Fontes Personalizadas** – Roboto
- 📁 **Componentização** – Separação de responsabilidades no React

---

## 🖼️ Layout Responsivo

✔️ Imagens otimizadas para mobile e desktop  
✔️ Fontes legíveis e consistentes  
✔️ Componentes adaptáveis a diferentes tamanhos de tela

---

## 🧪 Funcionalidades

- 📩 Formulário com validação de e-mail usando regex
- ❌ Feedback de erro em tempo real
- ✅ Navegação para página de sucesso com o e-mail do usuário
- 🔁 Rotas configuradas com `react-router-dom`
- 📱 Layout responsivo com imagens diferentes para mobile e desktop
- ♿️ Acessibilidade: uso de ARIA attributes e foco no teclado

---

## 🌐 Navegação com React Router

A aplicação utiliza o `react-router-dom` para definir as seguintes rotas:

- **/** → Página inicial com o formulário de inscrição
- **/success** → Página de confirmação, exibindo o e-mail informado

A navegação é feita utilizando `useNavigate` e o estado (`state`) para transferir dados entre páginas.

---

## 📁 Estrutura de Pastas e Arquivos

newsletter/
├── dist/
│   ├── assets/
│   │   ├── favicon-32x32-DQjEQYWa....png
│   │   ├── illustration-sign-up-desktop....svg
│   │   ├── illustration-sign-up-mobile....svg
│   │   ├── index-CeETpgFk.css
│   │   ├── index-u680dQzD.js
│   │   ├── Roboto-Bold-BnrYUwd.ttf
│   │   ├── Roboto-Regular-D9ju0zRN.ttf
│   ├── favicon-32x32.png
│   └── index.html
├── node_modules/
├── public/
│   └── favicon-32x32.png
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── LICENSE.txt
│   │   │   ├── Roboto-Bold.ttf
│   │   │   └── Roboto-Regular.ttf
│   │   └── images/
│   │       ├── icon-list.svg
│   │       ├── icon-success.svg
│   │       ├── illustration-sign-up-desktop.svg
│   │       └── illustration-sign-up-mobile.svg
│   ├── components/
│   │   ├── ButtonEnd.css
│   │   ├── ButtonEnd.jsx
│   │   ├── NewsletterBody.css
│   │   ├── NewsletterBody.jsx
│   │   ├── NewsletterForm.css
│   │   ├── SuccessMessage.css
│   │   └── SuccessMessage.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── SuccessPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── .gitattributes
└── LICENSE


---

## 📦 Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/PROJETO_NEWSLETTER.git

# Acesse o diretório
cd PROJETO_NEWSLETTER/newsletter

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev

```

## 🧑‍💻 Autor
Feito por Marcio junior
🎓 Estudante de Análise e Desenvolvimento de Sistemas - UniCarioca
🎧 Apaixonado por tecnologia, música, natureza e compartilhar conhecimento.

---

## 📝 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.