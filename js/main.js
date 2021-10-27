
/*================================Lógica mostrar menos e mostrar mais 
*/
/*Variáveis para puxar o valor original dos parágrafos*/
var p1 = document.getElementById('leia1').innerHTML
var p2 = document.getElementById('leia2').innerHTML
var p3 = document.getElementById('leia3').innerHTML

console.log(p1)

/* Função que verifica qual o valor está escrito no botão 'leia mais' ou 'mostrar menos' CORRIGIR----- */
function verificaBotao(maisMenos, btn){

    //console.log(maisMenos)
    //console.log(btn)
    var fluxo = document.getElementById(maisMenos).innerHTML
    
    if(fluxo === 'Leia mais...'){
        //console.log(fluxo)Debug tipo para fluxo
        leiaMais(btn)
    }else if(fluxo === 'Mostrar menos'){
        console.log(fluxo)
        mostraMenos(btn)
    }
}


/* função que adiciona conteúdo no parágrafo FUNCIONAL MAS NECESSÁRIO ALTERAÇÃO PARA NOVA VERSÃO */
function leiaMais(leia){
    
    if(leia === 'leia1'){

        console.log('leia1')
        var adicional = 'Bando de filho da pu**a, p**a que pariu, velho, tudo culpa desse lider de merda. Tudo cai nas nossas costas, Afff Lasanha não tem acompanhamento, vai tomar no c*. Estão cagando, saudade de jogar videogame, então vão se fo***.'
        var paragrafo = document.getElementById('leia1').innerHTML
        paragrafo = paragrafo + '<p>' + adicional + '</p>'

        document.getElementById('leia1').innerHTML = paragrafo
        document.getElementById('btnLeia1').innerHTML = 'Mostrar menos'

    }else if(leia === 'leia2'){

        console.log('leia2')
        var adicional = 'Aqueles bate boca, karol agarrando o Bill, engrenagem enpenando. Moto estralando tenénénénénénénénéné,  moto estralando, bebe chorando. O cambio ficando vermei, cuiedeira passando por riba de sememente, moto fazendo tananananannann.'
        var paragrafo = document.getElementById('leia2').innerHTML
        paragrafo = paragrafo + '<p>' + adicional + '</p>'

        document.getElementById('leia2').innerHTML = paragrafo
        document.getElementById('btnLeia2').innerHTML = 'Mostrar menos'

    }else{
        console.log('leia3')
        var adicional = 'Alvejou a militância da mulher fenotipicamente negra de maneira a dizimar o discurso acolhedor. Incentivou a erradicação da homoafetividade infligindo sentimentos de dor na alma dos menos privilegiados.'
        var paragrafo = document.getElementById('leia3').innerHTML
        paragrafo = paragrafo + '<p>' + adicional + '</p>'

        document.getElementById('leia3').innerHTML = paragrafo
        document.getElementById('btnLeia3').innerHTML = 'Mostrar menos'
    }

}

/* Função que subtrairá conteúdo no parágrafo IMPLEMENTAR*/
function mostraMenos(leia){
    //console.log(leia)

    if(leia === 'leia1'){
        document.getElementById('leia1').innerHTML = p1
        document.getElementById('btnLeia1').innerHTML = 'Leia mais...'
    }else if(leia === 'leia2'){
        document.getElementById('leia2').innerHTML = p2
        document.getElementById('btnLeia2').innerHTML = 'Leia mais...'
    }else if( leia === 'leia3'){
        document.getElementById('leia3').innerHTML = p3
        document.getElementById('btnLeia3').innerHTML = 'Leia mais...'
    }
}

/*====================================================== Fim da lógica de mostrar mais e mostrar menos
*/ 



