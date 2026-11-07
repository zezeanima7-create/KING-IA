# KING-IA

Assistente híbrido em português, hospedado em Cloudflare Workers.

## Recursos desta versão
- Chat com GLM-4.7-Flash para texto, estudos e programação.
- Análise de imagens com Llama 3.2 11B Vision.
- Pesquisa na Wikipédia em português.
- Modos Geral, Estudos, Código, Criativo e Direto.
- Histórico local e exportação de conversas.
- Interface instalável como PWA e arquivos básicos em cache.
- KING Core local para cálculos aritméticos e algumas dicas simples.
- Anexos PNG/JPG/WebP e arquivos TXT/MD/JSON/CSV.

## Limites honestos
A KING-IA ainda não possui um grande modelo treinado do zero. A geração de linguagem usa modelos hospedados pela Cloudflare; o KING Core offline é apenas um pequeno motor de regras e não substitui um LLM.

O Workers AI tem cota gratuita limitada. Segundo a documentação atual, o plano Free inclui 10.000 Neurons por dia. Ao atingir limites, chamadas podem falhar até a renovação diária. Não é uso ilimitado nem promessa de desempenho superior a todos os modelos comerciais.

A interface pode abrir offline depois de ser carregada, mas chat generativo, visão e pesquisa exigem internet. O histórico fica no armazenamento local do navegador, não é sincronizado e pode ser perdido ao limpar os dados do navegador.

Não envie senhas, dados pessoais sensíveis ou documentos privados. Respostas de IA podem conter erros e devem ser verificadas.

## Arquivos
- `worker.js`: interface, API de chat, pesquisa e PWA.
- `wrangler.jsonc`: configuração e binding do Workers AI.
- `training/README.md`: roteiro para treinamento futuro de um modelo próprio.

## Deploy
Com Node.js instalado e Wrangler autenticado na conta Cloudflare:

```bash
npm install
npx wrangler deploy
```

O binding Workers AI se chama `AI`. Não coloque tokens, senhas ou chaves secretas no código, no frontend ou no GitHub.

## API
- `GET /api/health`: estado do serviço.
- `POST /api/chat`: conversa e análise de imagens.
- `POST /api/search`: pesquisa na Wikipédia.

MIT License.
