# KING Core — desenvolvimento de modelo próprio

## Estado atual
O KING Core offline é um motor baseado em regras e cálculos. Não é uma rede neural generativa nem um modelo de linguagem treinado.

## Plano realista para um modelo próprio
1. Criar exemplos originais em português no formato JSONL.
2. Remover dados pessoais e segredos dos exemplos.
3. Separar treino, validação e teste.
4. Escolher um modelo-base open-source com licença adequada.
5. Fazer fine-tuning em ambiente com GPU compatível e recursos disponíveis.
6. Avaliar qualidade, segurança, custo e latência antes de integrar.

## Formato de exemplo
```json
{"messages":[{"role":"user","content":"O que é uma variável em Lua?"},{"role":"assistant","content":"Uma variável guarda um valor que pode ser utilizado no programa."}]}
```

Um celular pode editar dados e testar o núcleo local, mas não é um ambiente realista para treinar do zero um LLM competitivo. Treinar um modelo grande exige dados, GPUs e energia computacional.
