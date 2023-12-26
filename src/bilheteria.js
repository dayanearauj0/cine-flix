const nomes = ['dayane','edson','victor','camila','julia','maria','pedro'];
const filmes = ['Mulan','Frozen','Shrek','Matrix','Gladiador','Interstellar','Jurassic Park'];
const pagar = ['cartão','pix','dinheiro'];
const valor = 16.50;
const quantidade = [1,2,3,4,5];
const total = quantidade[getRandomArbitrary(0,(quantidade.length-1))]*valor;
const pagando = [50,100,120];
const troco = total-pagando;


function chamarOProximo (fnomes, ffilmes,fpagar,ftotal,fpagamento,ftroco){
  console.log('Qual o seu nome?')
  console.log(nomes[getRandomArbitrary(0,(nomes.length-1))])
  console.log('Qual filme irá assitir?');
  console.log(filmes[getRandomArbitrary(0,(filmes.length-1))]);
  console.log('Qual a forma de pagamento?');
  console.log(pagar[getRandomArbitrary(0,(pagar.length-1))]);
  console.log('O total foi:');
  console.log(total)
  console.log('Valor pago:');
  console.log(pagando[getRandomArbitrary(0,(pagando.length-1))]);
}

function getRandomArbitrary(min, max) {
  return Math.floor( Math.random() * (max - min) + min);
}

function Pagamento(fpagar,ftotal){
//realizar o pagamneto
};
chamarOProximo(nomes,filmes,pagar,total,pagando,troco);
Pagamento(pagar,total,pagando,troco);

function resposta(fvalor,fquantidade,ftotal,fpagando,ftroco){
     var troco = parseInt(document.getElementById("troco").value);
     if (pagando>troco){
      alert("tudo certo! aqui está seu troco:R$"+ (pagando-troco) +"");}
     else if (pagando<troco){
      alert("Ainda falta " + (pagando-troco) +"para fechar o pedido!");}
     else{
      alert('tudo certo! bom filme!');}
      }
