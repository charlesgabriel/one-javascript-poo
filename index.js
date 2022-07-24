class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Charles";
cliente1.cpf = 11122233345;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Ricardo";
cliente2.cpf = 88822233345;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);