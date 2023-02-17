function adicionar(){
    let prod = document.getElementById('prod')
    let preco = document.getElementById('preco')
    let quant = document.getElementById('quant')
    if(prod.value == 0 || preco.value == 0 || quant.value == 0){
        alert('Os campos não estão preenchidos corretamente! Preencha novamente por favor.')
    }else{
        let array = []
        array.push(prod.value, preco.value, quant.value)

        let tbody = document.getElementById('tbody')
        let tr = document.createElement('tr')
        tr.setAttribute('class', 'linha')
        tbody.appendChild(tr)
        for(p in array){
            let td = document.createElement('td')
            if(p == 1){
                td.innerText = `${Number(array[p]).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
                td.style.textAlign = 'end'
            }else if(p == 2){
                td.innerText = `${array[p]}`
                td.style.textAlign = 'end'
            }else{
                td.innerText = array[p]
            }
            tr.appendChild(td)
            prod.value = ''
            preco.value = ''
            quant.value = ''
            prod.focus()
        }
    }
}