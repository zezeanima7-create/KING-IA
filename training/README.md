# LOOPVERSE — evolução futura

A versão atual é uma aplicação de entretenimento com feed, perfil local, XP, conquistas e minijogos.

## Arquitetura atual

- Interface e rotas: Cloudflare Worker em `worker.js`.
- Estado do usuário: armazenamento local do navegador.
- Publicações e pontuação: locais ao dispositivo.
- Deploy: Wrangler / Cloudflare Workers.

## Evolução para uma comunidade real

Antes de abrir a plataforma para muitos usuários, implementar:

1. Autenticação real com sessões seguras.
2. Banco de dados para perfis, publicações, curtidas e progresso.
3. Upload de imagens com validação de tipo e tamanho.
4. Moderação de conteúdo, denúncias e bloqueios.
5. Rate limiting, proteção contra spam e validação no servidor.
6. Ranking global calculado no backend.
7. Regras de privacidade, exclusão e exportação de dados.

Não guardar senhas em localStorage. Não confiar em XP, curtidas ou resultados enviados pelo navegador: validar tudo no servidor.

## Testes antes de produção

- Testar em Android e desktop.
- Verificar armazenamento e recuperação de dados.
- Testar entradas vazias, textos longos e caracteres especiais.
- Testar navegação por teclado e leitores de tela.
- Confirmar limites e custos dos serviços Cloudflare usados.
