document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    //DECLARANDO O ARRAY DE PERGUNTAS
    const questoes=[
        "Qual linguagem de programação você utiliza ",
        "Descreva essa linguagem",
        "Em que ano surgiu a Linguagem utilizada",
        "Você se considera um prograamador senior",
    ]
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

     function mostrarResultado(){
        //O método add('hidden') adiciona a classe CSS chamada hidden a esse elemento. Geralmente, a classe hidden é definida no CSS para esconder um elemento da tela
        containerPerguntas.classList.add('hidden');
        //O método remove('hidden') remove a classe CSS hidden desse elemento. Se esse elemento estava escondido inicialmente (por ter essa classe), esta linha fará com que ele se torne visível.
        containerResultado.classList.remove('hidden');
        /*acessa um elemento HTML chamado listaResultado (provavelmente uma lista não ordenada <ul> ou uma lista ordenada <ol>).
        A propriedade innerHTML representa o conteúdo HTML dentro desse elemento.*/
        listaResultado.innerHTML='';

        //Esta linha inicia um loop que percorre cada elemento dentro de um array chamado questoes.
        //forEach é um método de arrays em JavaScript que executa uma função para cada item do array.
        questoes.forEach((questoes,index)=>{
            //Dentro do loop, para cada pergunta, esta linha cria um novo elemento HTML <li> (item de lista). Este elemento será usado para exibir cada pergunta e a respectiva resposta do usuário.
            const listaItem =document.createElement('li');
            //Esta linha define o conteúdo HTML dentro do elemento <li> que foi criado.Ela usa template literals (as crases ``) para facilitar a criação da string HTML.
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            //esta linha pega o elemento <li> que foi criado e o adiciona como um filho ao elemento listaResultado
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
     }

     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();

})