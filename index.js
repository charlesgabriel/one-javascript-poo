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

contaCorrenteCharles.depositar(100);
const valorSacado = contaCorrenteCharles.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteCharles);