# Sistema de Gerenciamento de Estoque: Um Mergulho no App Script

## Objetivo: 
Criar um sistema completo de gerenciamento de estoque para uma loja fictícia, utilizando o App Script no Google Sheets e evoluindo em etapas do básico ao avançado.

## Etapas:

### Fase 1: Básico - Dominando o App Script

*   **Planilha:**
    *   Criar uma planilha no Google Sheets.
    *   Definir colunas para: Nome do produto, Quantidade, Preço, Fornecedor, Data de entrada, etc.
*   **Script (Apps Script):**
    *   Criar funções para:
        *   `adicionarProduto(nome, quantidade, preco, fornecedor)`: Adiciona um novo produto à planilha.
        *   `atualizarQuantidade(nome, novaQuantidade)`: Atualiza a quantidade de um produto existente.
        *   `registrarVenda(nome, quantidadeVendida)`: Registra a venda de um produto e diminui a quantidade em estoque.
        *   `buscarProduto(nome)`: Retorna as informações de um produto pelo nome.
    *   Criar um menu personalizado na planilha:
        *   "Gerenciar Estoque" > "Adicionar Produto" (chama a função `adicionarProduto`)
        *   "Gerenciar Estoque" > "Atualizar Quantidade" (chama a função `atualizarQuantidade`)
        *   "Gerenciar Estoque" > "Registrar Venda" (chama a função `registrarVenda`)

### Fase 2: Intermediário - Interface e Interação

*   **Interface:**
    *   Criar um arquivo HTML (`index.html`) com um formulário para cada função principal:
        *   Formulário "Adicionar Produto": Campos para nome, quantidade, preço e fornecedor.
        *   Formulário "Atualizar Quantidade": Campos para nome do produto e nova quantidade.
        *   Formulário "Registrar Venda": Campos para nome do produto e quantidade vendida.
    *   Usar `HtmlService.createTemplateFromFile('index')` e `template.evaluate()` para exibir o HTML na planilha.
*   **Validação:**
    *   Implementar validações nos formulários HTML usando JavaScript:
        *   Verificar se os campos obrigatórios foram preenchidos.
        *   Verificar se os valores inseridos são válidos (números, datas, etc.).
*   **Eventos:**
    *   Usar gatilhos `onOpen()` para adicionar o menu personalizado à planilha quando ela for aberta.
    *   Usar gatilhos `onEdit()` para executar funções automaticamente, como atualizar o estoque quando uma célula da coluna "Quantidade" for editada.

### Fase 3: Avançado - Automação e Integrações

*   **Relatórios:**
    *   Criar funções para gerar relatórios automatizados:
        *   `gerarRelatorioVendas()`: Gera um relatório com os produtos mais vendidos.
        *   `gerarRelatorioEstoqueBaixo()`: Gera um relatório com os produtos com estoque abaixo de um limite definido.
    *   Usar a biblioteca `SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('A1:B10').getValues()` para buscar dados da planilha e gerar gráficos e tabelas dinâmicas.
*   **E-mails:**
    *   Usar `MailApp.sendEmail()` para enviar e-mails automáticos para fornecedores quando o estoque de um produto estiver baixo.
    *   Criar templates HTML para os e-mails.
*   **Integrações:**
    *   Pesquisar APIs de serviços externos (ex: PagSeguro, Mailchimp) e usar `UrlFetchApp.fetch()` para integrar o sistema com essas plataformas.
*   **API:**
    *   Criar funções com a anotação `@customfunction` para disponibilizar os dados do estoque como uma API para outros aplicativos.

## Considerações:

*   Documentar o código com comentários claros e concisos.
*   Organizar o código em funções e arquivos separados para facilitar a manutenção.
*   Usar boas práticas de programação para garantir a qualidade do código.
*   Testar o sistema regularmente para garantir que tudo esteja funcionando corretamente.

## Recursos Adicionais:

*   Explorar a documentação do App Script: [URL inválido removido]
*   Buscar tutoriais e exemplos na web.
*   Participar de comunidades online para tirar dúvidas e trocar ideias com outros desenvolvedores.

_**Criado pela IA GEMINI, com objetivo de estudo**_