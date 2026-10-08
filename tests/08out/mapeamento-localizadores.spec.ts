/*
 * ========================================================================
 * DESAFIO PRÁTICO: Mapeamento de Localizadores - Painel Administrativo
 * ========================================================================
 *
 * Pré-condições (beforeEach):
 * 1. Acessar a aplicação.
 * 2. Realizar autenticação com credenciais válidas de Administrador.
 * 3. Validar o redirecionamento para o Painel.
 *
 * Cenários de Teste:
 *
 * [CT 01] Validar exibição da lista de Usuários
 * - Acessar o filtro/aba de "Usuários".
 * - Validar a renderização de ao menos um usuário listado na tabela.
 *
 * [CT 02] Validar listagem e filtros de Produtos
 * - Acessar o filtro/aba de "Produtos".
 * - Validar a visibilidade do campo de pesquisa de produtos.
 * - Validar a visibilidade do seletor (dropdown) de categorias.
 * - Validar a renderização de ao menos um produto na lista.
 *
 * [CT 03] Validar informações na lista de Lojas
 * - Acessar o filtro/aba de "Lojas".
 * - Localizar e validar a exibição do título/nome da loja.
 * - Validar a renderização dos dados e informações detalhadas da loja.
 */

