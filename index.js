class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
    }    
}

const cliente1 = new Cliente();
cliente1.nome = "Charles";
cliente1.cpf = 11122233345;

const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 88822233345;

const contaCorrenteCharles = new ContaCorrente();
contaCorrenteCharles.saldo = 0;
contaCorrenteCharles.agencia = 1001;
console.log(contaCorrenteCharles.saldo);
contaCorrenteCharles.saldo = 100;
console.log(contaCorrenteCharles.saldo);
contaCorrenteCharles.sacar(50);
console.log(contaCorrenteCharles.saldo);

console.log(cliente1);
console.log(cliente2);