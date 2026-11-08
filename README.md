# KING FOOTBALL ARENA

Jogo de futebol 3D para navegador, construído no repositório KING-IA e publicado com Cloudflare Workers.

## O que já funciona

- Partida rápida 4 contra 4: você controla o camisa 10 do KING FC contra o time Rival FC.
- Estádio 3D, gramado com marcações, arquibancadas, gols e bola.
- Jogadores 3D animados com modelo rigado, com alternativa procedural caso o modelo não carregue.
- IA para companheiros, adversários e goleiros.
- Movimento por teclado ou direcional touch.
- Chute com força carregável, passe, corrida, placar e cronômetro.
- Três dificuldades: Iniciante, Normal e Difícil.
- Histórico local de vitórias, partidas e gols.
- Interface adaptada a Android e desktop.

## Controles

| Ação | Teclado | Celular |
|---|---|---|
| Mover | WASD ou setas | Direcional azul |
| Chutar | Segurar Espaço | Segurar CHUTE |
| Passar | E | PASSE |
| Correr | Shift | Segurar CORRER |
| Pausar | Botão PAUSAR | Botão PAUSAR |

## Modelo 3D e licença

O personagem rigado usado para os jogadores é o modelo **Animated Men**, de Quaternius. O arquivo foi copiado para `assets/player.glb` e é distribuído sob **CC0 1.0 Universal**. O arquivo de licença foi mantido em `assets/LICENSE-quaternius.txt`.

O jogo usa Three.js por CDN e cria o estádio, o campo e a bola por geometria 3D no próprio código. O navegador precisa de internet na primeira carga para obter o Three.js.

## Publicação pelo Android

1. Abra o repositório GitHub `zezeanima7-create/KING-IA`.
2. Confira os arquivos `worker.js`, `assets/player.glb` e `assets/LICENSE-quaternius.txt`.
3. No Cloudflare, abra **Workers & Pages** e selecione o Worker `king-ia`.
4. Faça o deploy da branch `main`.
5. Abra o endereço `workers.dev` do Worker.

A rota `/api/health` informa o estado do Worker. O modelo do jogador é servido pela rota `/assets/player.glb`.

## Observações

- O progresso do histórico é salvo no armazenamento local do navegador deste dispositivo.
- Não há multiplayer online nem contas compartilhadas nesta versão.
- O jogo foi pensado para rodar no Chrome/Chromium atualizado com WebGL habilitado.
