let produtos = [
    { nome: 'camiseta', valor: 100.0, internacional: true },
    { nome: 'perfume', valor: 200.0, internacional: true },
    { nome: 'sandália', valor: 120.0, internacional: false },
  ];
  
  for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].internacional === true) {
       let calculo = produtos[i].valor + (produtos[i].valor * 1.20)
       console.log(`O nome do produto é ${produtos[i].nome} e o valor é ${calculo}`)    
    }
    else {
        let calculo = produtos[i].valor + (produtos[i].valor * 1.12)
        console.log(`O nome do produto é ${produtos[i].nome} e o valor é ${calculo}`)
    }
  }