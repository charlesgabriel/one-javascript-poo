class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo = 0;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
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
contaCorrenteCharles.agencia = 1001;

contaCorrenteCharles.depositar(100);
contaCorrenteCharles.sacar(50);

console.log(contaCorrenteCharles);