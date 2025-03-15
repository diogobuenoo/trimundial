# Trimundial

Trimundial é um módulo estiloso e divertido para Node.js, criado para transformar mensagens simples em verdadeiros espetáculos no terminal! Ele utiliza os pacotes [chalk](https://www.npmjs.com/package/chalk) para estilizar mensagens com cores e [cool-ascii-faces](https://www.npmjs.com/package/cool-ascii-faces) para adicionar rostos ASCII incríveis.

---

## **Descrição**

Trimundial foi desenvolvido com o objetivo de deixar o terminal mais criativo e expressivo. Cada mensagem vem com cores vibrantes e rostos ASCII para tornar a experiência de console mais divertida.

Ideal para quem quer adicionar um toque de humor e estilo ao trabalho com Node.js.

---

## **Como Criar uma Pasta e Configurar o Projeto**

1. **Abra o Prompt de Comando (cmd) ou Terminal no seu computador:**
   - No Windows, pressione `Win + R`, digite `cmd` e pressione `Enter`.
   - No macOS/Linux, abra o Terminal.

2. **Navegue até o local onde deseja criar o projeto:**
   - Por exemplo, para acessar a área de trabalho:
     ```bash
     cd Desktop
     ```

3. **Crie uma nova pasta para o projeto:**
   - Digite o seguinte comando no terminal:
     ```bash
     mkdir meu-projeto
     ```
   - Isso criará uma pasta chamada `meu-projeto`.

4. **Acesse a nova pasta:**
   - Use o comando:
     ```bash
     cd meu-projeto
     ```

5. **Inicialize o projeto com npm:**
   - Digite o seguinte comando para criar o arquivo `package.json`:
     ```bash
     npm init -y
     ```
   - Este comando criará automaticamente um arquivo `package.json` com as configurações básicas.

6. **Seu projeto está pronto para começar!**

---

## **Instalação**

### **Pré-requisitos**
1. Certifique-se de que o [Node.js](https://nodejs.org/) está instalado em sua máquina.

2. Para instalar o módulo, execute o comando abaixo:
   ```bash
   npm install diogobuenoo/trimundial



## Como usar

1. Importe o módulo no seu arquivo JavaScript:
    import trimundial from "@diogobuenoo/trimundial";
2. Chame a função trimundial passando uma mensagem personalizada:
    trimundial("Essa é minha mensagem estilosa!");
3. Execute o arquivo no terminal usando Node.js:
    node index.js


## Exemplo de saída

=== Mensagem Super Estilosa ===
Essa é minha mensagem estilosa!
Aqui vai um rosto ASCII divertido:
(•‿•)
==============================

## Como Editar o package.json

1. Abra no editor de texto:
   Com o Visual Studio Code:
   ```bash
   code package.json
2. Certifique-se de que ele está bem formatado: Aqui está um exemplo básico:
   ```Json
   {
  "name": "@seu-usuario/trimundial",
  "version": "1.0.0",
  "description": "Um console.log estiloso com rostos ASCII.",
  "main": "index.js",
  "type": "module",
  "dependencies": {
    "chalk": "^5.0.0",
    "cool-ascii-faces": "^1.3.4"
  },
  "author": "Seu Nome",
  "license": "MIT"
   }



# Integrantes do grupo

Diogo Cecchini Bueno RM: 560427
Gustavo Pandolfo Meroni RM: 560271
Matheus Aparecido Rocha Plati RM: 559813