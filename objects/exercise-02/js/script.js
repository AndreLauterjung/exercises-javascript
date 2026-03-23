//Object
let account = {
    holder: (document.getElementById("holder").value),
    valueM: Number(document.getElementById("valueM").value),
    balance: 0,

    withdraw: function(){

        this.balance -= this.valueM;
    },

    deposit: function(){

        this.balance+=this.valueM;
        return this.balance;
    },

    checkBalance: function(){

        return this.balance;
    }
};
//Sacar dinheiro da conta.
//Take a value in account.


function clickWithdraw()
{
    account.holder = document.getElementById("holder").value;
    account.valueM = Number(document.getElementById("valueM").value);

        if(account.valueM > account.balance)
        {
            return alert("error!");
        }
        else
        {
            account.withdraw()

            document.getElementById("textMessageWelcome").innerText=("Hello ")+(account.holder)+(" !");
            document.getElementById("textResultOfAction").innerText="You withdraw: US$ "+ account.valueM +" of account!";
            document.getElementById("textoAmountInAccount").innerText =
    account.checkBalance();
        }
}

//Depositar dinheiro na conta.
//Put value in account.
function clickDeposit()
{
    account.holder = document.getElementById("holder").value;
    account.valueM = Number(document.getElementById("valueM").value);
    
    account.deposit()

    document.getElementById("textMessageWelcome").innerText=("Hello ")+(account.holder)+(" !");
    document.getElementById("textResultOfAction").innerText=("Your deposited: US$ ")+(account.valueM);
    document.getElementById("textoAmountInAccount").innerText=(account.checkBalance());
}

//Ver saldo da conta.
//Se the balance of account.
function clickCheckBalance()
{
    document.getElementById("textMessageWelcome").innerText=("Hello ")+(account.holder)+(" !");
    document.getElementById("textoAmountInAccount").innerText =
    account.checkBalance();
}