5. O Sistema de Mensagens:
No seu projeto de extensão ou em um chat, as mensagens antigas precisam sumir para não travar o sistema.
JavaScript

let notificações = ["Nova curtida", "Novo seguidor", "Erro no sistema", "Update disponível"];

Crie um loop (ou chame o método várias vezes) para que o array fique com no máximo 2 itens, removendo sempre os mais antigos (os que estão no começo).