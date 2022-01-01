function tabuada() {
    let numero = document.getElementById('num');
    
    let tab = document.getElementById('tab')
    let tab1 = document.getElementById('tab1')
    let tab2 = document.getElementById('tab2')
    let tab3 = document.getElementById('tab3')
    if (num == '0') {
        window.alert(`nao tem mutiplicacao com 0 `)
        tab.innerHTML = `tente novamente !!!`
    } else {
       /*  for (let t = 1; t <= 10; t++) {
            let s = num * t ; 
            res.innerHTML = `${num} x ${t} = ${s}`
           let item = document.createElement('res')
            item.text = `${num} x ${t} = ${s} `
            res.appendChild(item)
           
        }*/
        tab.innerHTML =''
        tab1.innerHTML =''
        tab2.innerHTML =''
        tab3.innerHTML =''
        let num = Number(numero.value);
        let c =1
        while(c <=10){
            let mult = document.createElement('option');
            mult.text = `${c} x ${num} = ${c*num} `
            tab.appendChild(mult)

            let sub = document.createElement('option');
            sub.text = `${c} - ${num} = ${c-num} `
            tab1.appendChild(sub)

            let div = document.createElement('option');
            div.text = `${c} / ${num} = ${c/num} `
            tab2.appendChild(div)

            let soma = document.createElement('option');
            soma.text = `${c} + ${num} = ${c+num} `
            tab3.appendChild(soma)

            c++
        }
       


    }


}







    