function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo ;

}

Conta.prototype.sacar = function (valor){
    if(valor> this.saldo){
        console.log(`saldo insuficiente:${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};


Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function (){
    console.log(
        `ag:${this.agencia} c:${this.conta}`+
        ` saldo:R$${this.saldo.toFixed(2)}`
    );
};

function CC (agencia ,conta, saldo, limite){
    Conta.call(this,agencia ,conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;


Conta.prototype.sacar = function (valor){
    if(valor> (this.saldo + this.limite)){
        console.log(`limite estourado:${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
function CP (agencia ,conta, saldo){
    Conta.call(this,agencia ,conta, saldo);

}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const cc = new CC (11,22,0,100);
cc.depositar(10.5); 
