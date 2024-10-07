let taskId = 0;

function addTarefas(tarefaSalva = null) {
    const texto = document.getElementById("taskInput");
    const imagem = document.getElementById("imagem");
    const textoTarefa = tarefaSalva ? tarefaSalva : texto.value.trim();
  
    if (textoTarefa !== "") {
      taskId++;
      const task = document.createElement("div");
      const iconRight = document.createElement("button");
      const iconLeft = document.createElement("button");
      const trash = document.createElement("button");
  
      imagem.src = "./flat_750x_075_f-pad_750x1000_f8f8f8.u1-removebg-preview.png"
  
      task.classList.add(
        "bg-gray-400",
        "rounded",
        "font-serif",
        "p-2",
        "m-2",
        "overflow-hidden",
        "task-enter"
      );
      task.setAttribute("id", `task${taskId}`);
      task.innerText = textoTarefa;
  
      iconLeft.innerHTML =
        "<img width='20' height='20' src='https://img.icons8.com/ios/50/left--v1.png' alt='left--v1' />";
      iconRight.innerHTML =
        "<img width='20' height='20' src='https://img.icons8.com/ios/50/right--v1.png' alt='right--v1' />";
      trash.innerHTML =
        "<img width='20' height='20' src='https://img.icons8.com/ios/50/delete-forever--v1.png' alt='delete-forever--v1' />";
  
      iconLeft.classList.add(
        "bg-red-500",
        "hover:bg-red-700",
        "text-white",
        "rounded-full",
        "p-2",
        "ml-2",
        "transition",
        "duration-300"
      );
      iconRight.classList.add(
        "bg-green-500",
        "hover:bg-green-700",
        "text-white",
        "rounded-full",
        "p-2",
        "mr-2",
        "transition",
        "duration-300"
      );
      trash.classList.add(
        "bg-blue-500",
        "hover:bg-blue-700",
        "text-white",
        "rounded-full",
        "p-2",
        "transition",
        "duration-300"
      );
  
      iconLeft.onclick = () => moverEsquerda(task);
      iconRight.onclick = () => moverDireita(task);
      trash.onclick = () => deletar(task);
  
      task.appendChild(iconLeft);
      task.appendChild(iconRight);
      task.appendChild(trash);
  
      document.getElementById("aFazer").appendChild(task);
  
      setTimeout(() => {
        task.classList.remove("task-enter");
        task.classList.add("task-enter-active");
      }, 10);
  
      if (!tarefaSalva) {
        salvar(textoTarefa);  
      }
      texto.value = "";
    }
  }
  

function deletar(tarefa) {
    const imagem = document.getElementById("imagem");
  const aFazer = document.getElementById("aFazer");
  const fazendo = document.getElementById("fazendo");
  const feito = document.getElementById("feito");

  if (confirm("Realmente deseja apagar essa tarefa?")) {
    if(aFazer.contains(tarefa)){
      aFazer.removeChild(tarefa);
    } else if(fazendo.contains(tarefa)){
      fazendo.removeChild(tarefa);
    } else if(feito.contains(tarefa)){
      feito.removeChild(tarefa);
    }
    imagem.src = "f5bf6df91e19c25ec8f037c08d1553e9-removebg-preview.png"
    removeTarefaFromStorage(tarefa.innerText);
    const audio = new Audio('./Aw, Hell Nah Bro - Sound Effect.mp3');
    audio.play();
  } else {
    alert("Cuidado da próxima vez!!");
    imagem.src = "./Captura_de_tela_2024-10-07_155527-removebg-preview.png"
  }
}

function moverDireita(tarefa) {
  const aFazer = document.getElementById("aFazer");
  const fazendo = document.getElementById("fazendo");
  const feito = document.getElementById("feito");

  if (aFazer.contains(tarefa)) {
    fazendo.appendChild(tarefa);
  } else if (fazendo.contains(tarefa)) {
    feito.appendChild(tarefa);
  }
}

function moverEsquerda(tarefa) {
  const aFazer = document.getElementById("aFazer");
  const fazendo = document.getElementById("fazendo");
  const feito = document.getElementById("feito");

  if (feito.contains(tarefa)) {
    fazendo.appendChild(tarefa);
  } else if (fazendo.contains(tarefa)) {
    aFazer.appendChild(tarefa);
  }
}

function salvar(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function removeTarefaFromStorage(tarefaTexto) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(t => t !== tarefaTexto); 
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }  

  function loadTarefas() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(tarefa => addTarefas(tarefa)); 
  }
  

window.onload = loadTarefas;
