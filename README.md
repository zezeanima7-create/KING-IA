# LOOPVERSE

Plataforma mobile-first de entretenimento e comunidade, hospedada em Cloudflare Workers.

## O que existe nesta versão

- Página inicial com atalhos para as áreas principais.
- Feed de publicações com filtros e pesquisa.
- Criação de posts de ideias, dicas e jogos.
- Perfil local com nome, XP, níveis e conquistas.
- Quiz de conhecimentos gerais.
- Minijogo de encontrar símbolos.
- Ranking local e missão de publicação.
- Layout responsivo para Android e desktop.
- Armazenamento local no navegador.

## Limites importantes

Esta é uma versão inicial funcional, sem backend de contas. Perfil, XP, publicações, curtidas e progresso ficam no armazenamento local do navegador e **não são sincronizados entre dispositivos nem compartilhados com outros visitantes**. Limpar os dados do navegador pode apagá-los.

O ranking é local, não é um ranking global. Não há upload de imagens, mensagens privadas, moderação comunitária no servidor ou autenticação real nesta versão. Não use senhas nem dados pessoais no perfil.

## Arquivos

- `worker.js`: aplicação web e rotas HTTP.
- `wrangler.jsonc`: configuração Cloudflare Workers.
- `package.json`: dependência Wrangler e comandos.

## Publicar pelo Android

1. Abra o repositório no GitHub.
2. Confirme que o arquivo `worker.js` foi atualizado.
3. No Cloudflare, abra Workers & Pages e selecione o Worker atualmente conectado a este repositório.
4. Faça o deploy da versão atualizada.
5. Abra o endereço `workers.dev` do Worker.

Se o deploy estiver ligado ao GitHub, o commit na branch `main` poderá iniciar a publicação automaticamente, conforme a configuração de builds do projeto.

## Desenvolvimento local

Com Node.js e Wrangler:

```bash
npm install
npm run dev
npm run deploy
```

## Próximas etapas recomendadas

Para tornar a plataforma realmente social, será necessário adicionar backend de autenticação, banco de dados para perfis e publicações, armazenamento de mídia, regras de moderação e proteção contra spam. Esta versão não simula essas funções.
