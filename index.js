import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrent.js";

const cliente1 = new Cliente();
cliente1.nome = "Charles";
cliente1.cpf = 11122233345;

const cliente2 = new Cliente();
cliente2.nome = "Ricardo";
cliente2.cpf = 88822233345;

const contaCorrenteCharles = new ContaCorrente();
contaCorrenteCharles.agencia = 1001;
contaCorrenteCharles.cliente = cliente1;
contaCorrenteCharles.depositar(500);

// const valorSacado = contaCorrenteCharles.sacar(50);
// console.log(valorSacado);

console.log(contaCorrenteCharles);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteCharles.transferir(200, conta2);

console.log(conta2);