const cargo = 'operador';

switch (cargo) {
    case 'admin': 
        console.log('Acesso tottal ao sistema');
        break;
    case 'gerente':
        console.log('Acesso parcial ao relatorio');
        break;
    case 'operador':
        console.log('Acesso apenas as tarefas basicas');
        break;
    default:
        console.log('usuario não reconhecido');
}
