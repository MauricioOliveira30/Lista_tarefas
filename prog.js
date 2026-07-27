function adicionar(){
  let texto=document.getElementById("tarefa").value.trim();
    if(texto==""){
        alert("Digite uma tarefa!");
            return;
        
    }

let lista=document.getElementById("lista");
let li =document.createElement("li");
 li.innerHTML = `
        <span>${texto}</span>
        <button onclick="concluir(this)">✔</button>
        <button onclick="remover(this)">🗑️</button>
         <button onclick="editar(this)">✏️</button>
    `;
    lista.appendChild(li);
    document.getElementById("tarefa").value="";
    salvarTarefas();

}
function concluir(botao){
    botao.parentElement.classList.toggle("concluido");
    salvarTarefas();
   
}
 function remover(botao){
        botao.parentElement.remove();
        salvarTarefas();
    }

   function salvarTarefas(){
    
    let tarefas=[];
    document.querySelectorAll("#lista li").forEach(function(item){
tarefas.push({
texto:item.querySelector("span").textContent,concluido:item.classList.contains("concluido")

});
});
localStorage.setItem("tarefas",JSON.stringify(tarefas))
   }
   function editar(botao){
    let span=botao.parentElement.querySelector("span");
    let novoTexto=prompt("editar tarefa:",span.textContent);
    if(novoTexto!=null&&novoTexto.trim()!=""){
        span.textContent=novoTexto;
        salvarTarefas();
    }
    }
  
