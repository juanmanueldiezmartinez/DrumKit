function reproducir(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //SI NO ES UNA TECLA QUE NO TENGA EL KEY-CODE DE ALGUN AUDIO NO RETORNA NADA
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  };
  
  function removerTransicion(e){ //AVISA CUANDO TERMINA EL TRANSFORM, DEPENDIENDO EL TIEMPO QUE LE PONEMOS
    if (e.propertyName !== "transform") return; //SI NO ES TRANSFORM NO RETORNA NADA
    this.classList.remove("playing"); //this hace referencia a key, porque estamos llamando a la
    //funcion en el addEventListener de key en la linea 82
  }
  
  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removerTransicion))
  
  document.addEventListener("keydown", reproducir);