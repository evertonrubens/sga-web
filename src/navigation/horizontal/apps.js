import { DollarSign, Box, CheckSquare, CheckCircle, List, PenTool, Shield, Circle, Monitor, Eye } from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'financeiroApp',
        title: 'Financeiro',
        icon: <DollarSign />,
        children: [
          {
            id: 'lancamento-valor-financeiro',
            title: 'Lançamento Financeiro',
            icon: <Circle size={12} />,
            navLink: '/apps/financial/accounts-payable'
          },
          {
            id: 'fluxo-caixa',
            title: 'Fluxo de Caixa',
            icon: <Circle size={12} />,
            navLink: '/apps/financial/cash-flow'
          }
        ]
      },
      {
        id: 'contabilApp',
        title: 'Contabil',
        icon: <Eye />,
        children: [
          {
            id: 'class-contabil',
            title: 'Class. Contabil',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/accounting-classification'
          },
          {
            id: 'lancamento-contabil',
            title: 'Lancto. Contabil',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/accounting-entry'
          },
          {
            id: 'livro-caixa',
            title: 'Livro Caixa',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/cash-book'
          },
          {
            id: 'livro-movto-financeira',
            title: 'Livro Movto Financeira',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/financial-move'
          },
          {
            id: 'livro-sintetico-Contas',
            title: 'Sintético de Contas',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/account-synthetic'
          },
          {
            id: 'livro-analitico-Contas',
            title: 'Analítico Contas',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/account-analytics'
          },
          {
            id: 'emissao-relatorio-livros-fiscais',
            title: 'Emissão Relatórios',
            icon: <Circle size={12} />,
            navLink: '/apps/accounting/tax-book-reports'
          }
        ]
      },
      {
        id: 'estoqueApp',
        title: 'Estoque',
        icon: <List size={20} />,
        children: [
          {
            id: 'inspecao-veicular',
            title: 'Inspeção Veicular',
            icon: <Circle size={12} />,
            navLink: '/apps/inventory/vehicle-inspection'
          },
          {
            id: 'entrada-estoque',
            title: 'Entrada no Estoque',
            icon: <Circle size={12} />,
            navLink: '/apps/inventory/stock-entry'
          },
          {
            id: 'consulta-veicular',
            title: 'Consulta Estoque',
            icon: <Circle size={12} />,
            navLink: '/apps/inventory/inventory-inquiry'
          },
          {
            id: 'gestao-documentacao-veicular',
            title: 'Doctos Veicular',
            icon: <Circle size={12} />,
            navLink: '/apps/inventory/vehicle-documentation'
          },
          {
            id: 'inventario',
            title: 'Inventário',
            icon: <Circle size={12} />,
            navLink: '/apps/inventory/inventory'
          }
        ]
      },
      {
       id: 'comprasApp',
       title: 'Compras',
       icon: <CheckSquare size={20} />,
       children: [
         {
           id: 'solicitacao-orcamento',
           title: 'Orçamento',
           icon: <Circle size={12} />,
           navLink: '/apps/purchases/purchase-budget'
         },
         {
           id: 'solicitacao-ordem-compra',
           title: 'Ordem de Compra',
           icon: <Circle size={12} />,
           navLink: '/apps/purchases/purchase-order'
         }
       ]
      },
      {
        id: 'vendasApp',
        title: 'Vendas',
        icon: <CheckCircle size={20} />,
        children: [
          {
            id: 'reserva-venda',
            title: 'Reserva de Vendas',
            icon: <PenTool size={12} />,
            navLink: '/apps/sales/sales-reservation'
          },
          {
            id: 'emissao-venda',
            title: 'Emissão de Vendas',
            icon: <Circle size={12} />,
            navLink: '/apps/sales/sales-issue'
          }
        ]
      },
      {
        id: 'access-controlApp',
        title: 'Controle Acesso',
        icon: <Shield size={20} />,
        children: [
          {
            id: 'add-role',
            title: 'Incluir Roles',
            icon: <Circle size={12} />,
            navLink: '/apps/acess-control/role/add'
          },
          {
            id: 'consultar-roles',
            title: 'Consultar Roles',
            icon: <Circle size={12} />,
            navLink: '/apps/access-control/role/list'
          },
          {
            id: 'add-usuario',
            title: 'Adicionar usuário',
            icon: <Circle size={12} />,
            navLink: '/apps/access-control/user/add'
          },
          {
            id: 'consultar-usuario',
            title: 'Consultar Usuario',
            icon: <Circle size={12} />,
            navLink: '/apps/access-control/user/list'
          },
          {
            id: 'alter-senha-usuario',
            title: 'Redefinir Senha',
            icon: <Circle size={12} />,
            navLink: '/apps/access-control/user/edit'
          },
          {
            id: 'bloquear-usuario',
            title: 'Bloquear Usuário',
            icon: <Circle size={12} />,
            navLink: '/apps/access-control/user/block'
          }
        ]
      },
      {
        id: 'config-App',
        title: 'Configuração',
        icon: <Monitor size={20} />,
        children: [
          {
            id: 'alter-company',
            title: 'Compania',
            icon: <Circle size={12} />,
            navLink: '/apps/configuration/company/edit'
          },
          {
            id: 'alter-system',
            title: 'Sistema',
            icon: <Circle size={12} />,
            navLink: '/apps/configuration/systemscm/edit'
          }
        ]
      }
    ]
  }
]
