# Repositório dedicado a armazenar atividade práticas da disciplina de interfaces ricas 

- atv-1: 

````
Boa tarde pessoal,

Crie uma issue para uma tarefa de um projeto de livre escolha.
Crie uma branch para trabalhar na issue.
Realize commits semânticos para resolver a issue.
Crie um pull request utilizando essa branch.
Realize o merge do pull request na branch principal de desenvolvimento.
Siga as orientações do Github Flow com mensagens adequadas no commit utilizando os links em anexo.

````

> ## Guia de como nomear issues, branchs e commits no projeto "Gambiarra"

### Como devo nomear minha issue? 🤔
---
##### 1° Passo:
| Deve usar uma linguagem objetiva e clara das atividades a serem realizadas naquela tarefa. 

##### 2° Passo:

| Faça o uso da linguagem `imperativa`:


_Exemplos_: 
``"Corrigir erro na validação do formulário de login"``

``"Adicionar opção de filtro por data na listagem de pedidos"``

``"Remover opções duplicadas no menu de configuração"``


### Como devo nomear minha branch? 🤔


`N° da issue seguida do seu nome`
exemplo:

    1-minha-primeira-issuo


### Como devo nomear meu commit? 🤔

`#Antesdetudo` A regra é simples: 
- "Release early, release often!"
- Commitar cedo, commitar como frequência.

---

O seu commit vai mudar de acordo com o propósito das mudanças aplicadas, como via de regra deve respeitar esse formato:

~~~markdown
"<emoji-da-tag> <tag>: O que esse commit faz?. #<numero-da-issue>"
~~~
<br>

Segue exemplos

1. **`:recycle:` ♻️ `refac:`** _Refatoração de código. Não há adição de novas funcionalidades nem correções de bugs. Apenas melhorias na estrutura, organização, ou legibilidade do código._  
   _Exemplo:_ `♻️ refac: melhora a lógica de cálculo de desconto. #13`

<br>

2. **`:heavy_plus_sign:` ➕ `feat:`** _Adição de um novo recurso ou funcionalidade ao projeto._  
   _Exemplo:_ `➕ feat: implementa o sistema de autenticação de usuário. #13`

<br>

3. **`:books:` 📚 `docs:`** _Alterações relacionadas à documentação, como README, arquivos de ajuda, ou comentários no código._  
   _Exemplo:_ ` 📚 docs: adiciona instruções de configuração no README. #13`

<br>

4. **`:bug:` 🐛 `fix:`** _Correção de um bug existente._  
   _Exemplo:_ `🐛 fix: corrige erro na validação de e-mail. #13`

<br>

5. **`:art:` 🎨 `style:`** _Alterações relacionadas a formatação e estilo do código (espaços, vírgulas, indentação, etc.) que não afetam a lógica do sistema._  
   _Exemplo:_ `🎨 style: ajusta indentação no arquivo main.js. #13`

<br>

6. **`:fire:` 🔥 `remove:`** _Remoção de código ou arquivos desnecessários._  
   _Exemplo:_ `🔥 remove: apaga componentes não utilizados. #13`

<br>

7. **`:zap:` ⚡ `perf:`** _Melhorias de desempenho, focadas em otimizar a velocidade ou reduzir a utilização de recursos._  
   _Exemplo:_ `⚡ perf: otimiza a consulta ao banco de dados. #13`

<br>

8. **`:truck:` 🚚 `move:`** _Mover ou renomear arquivos ou diretórios._  
   _Exemplo:_ `🚚 move: reorganiza os arquivos para nova estrutura de diretórios. #13`

<br>

9. **`:wrench:` 🔧 `chore:`** _Tarefas de manutenção que não impactam o funcionamento ou funcionalidades, como atualização de dependências._  
   _Exemplo:_ `🔧 chore: atualiza versão do pacote lodash. #13`

<br>

10. **`:test_tube:` 🧪 `test:`** _Adição ou modificação de testes de código._  
    _Exemplo:_ `🧪 test: adiciona testes unitários para módulo de autenticação. #13`

<br>

11. **`:construction:` 🚧 `WIP:`** _Indica que o commit é de um trabalho em progresso (Work In Progress), e não é uma versão final._  
    _Exemplo:_ `🚧 WIP: desenvolve a nova página de perfil. #13`


# Configuração do pipeline

```yml

name: Node.js CI

on:
  push:
    branches: [ "*" ] 
  pull_request:
    branches: [ "*" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [22.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4.2.2

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4.1.0
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm' # Instala o javascript

    - run: npm install

    - run: npm run build --if-present

    - run: npm run test

```