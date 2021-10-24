
/*Variáveis para puxar o valor original dos parágrafos*/
var p1 = document.getElementById('leia1')
var p2 = document.getElementById('leia2')
var p3 = document.getElementById('leia3')

/* Função que verifica qual o valor está escrito no botão 'leia mais' ou 'mostrar menos' CORRIGIR----- */
function verificaBotao(){
    var tipo = document.getElementsByName('bLeia').innerHTML
    console.log(tipo)
    if(tipo === 'Leia mais'){
        console.log(tipo)
        leiaMais(leia)
    }else if(tipo === 'Mostrar menos'){
        mostraMenos()
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
function mostraMenos(){

}

