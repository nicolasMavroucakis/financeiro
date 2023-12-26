
fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,USD-BRLT,GBP-BRL,AUD-BRL,CNY-BRL')
  .then(response => response.json())
  .then(data => {
    // Extraindo e exibindo as cotações no console
    const cotacoes = data;
    const hora = cotacoes.USDBRL.create_date
    console.log(hora)
    const dolar = cotacoes.USDBRL.bid
    const euro = cotacoes.EURBRL.bid
    const bitcoin = cotacoes.BTCBRL.bid 
    const dolarT = cotacoes.USDBRLT.bid
    const libra = cotacoes.GBPBRL.bid
    const dolarA = cotacoes.AUDBRL.bid
    const yuan = cotacoes.CNYBRL

    console.log(`dolar:${dolar}, euro:${euro}, bitcoin:${bitcoin}, dolar turismo:${dolarT}, libra:${libra}, dolar australiano:${dolarA}`)
    console.log(yuan)
  })
  .catch(error => {
    console.error('Houve um erro:', error);
  });
