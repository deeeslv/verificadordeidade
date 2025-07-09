function verificar(){
    data = new Date()
    ano = data.getFullYear()
    fano = document.querySelector('input#txtano')
    res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - fano.value
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'bebem.png')
            } else if (idade <21){
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade <50){
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'bebef.png')
            } else if (idade <21){
                img.setAttribute('src', 'adolescentef.png')
            } else if (idade <50){
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `É ${genero} com ${idade} anos<br>`
        res.appendChild(img)
    }
}           