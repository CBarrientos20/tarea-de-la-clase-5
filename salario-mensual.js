const botonEnviar= document.querySelector('#enviar');

botonEnviar.onclick= function(){
    mesesEnUnAño= 12;
    const salarioAnualDelUsuario = Number(document.querySelector('#salario-anual-usuario').value); 
    salarioMensualDelUsuario= salarioAnualDelUsuario / mesesEnUnAño;
    console.log(salarioMensualDelUsuario);
    document.querySelector('#salario-mensual').value = salarioMensualDelUsuario;
    return false;
      }
