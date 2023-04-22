
function llamarFunciones() {
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault();

        guardarFormulario();
        generarPDF();
    });

    document.getElementById('miFormulario').querySelector('button[type="reset"]').addEventListener('click', function() {
        document.getElementById('miFormulario').reset();
    });
}
    
const datosArray = [];

function guardarFormulario() {
  const form = document.querySelector('#miFormulario');
  
  const nombre = form.querySelector('input[placeholder="Nombre"]').value;
  const apellido = form.querySelector('input[placeholder="Apellido"]').value;
  const dni = form.querySelector('input[placeholder="D.N.I"]').value;
  const telefono = form.querySelector('input[placeholder="Telefono"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const motivoConsulta = form.querySelector('select').value;
  const numeroCompra = form.querySelector('input[placeholder="Nº de compra"]').value;
  var numeroEnvio = document.querySelector('input[placeholder="Nº de envio"]').value;
  var fecha01 = document.querySelector(' input[placeholder="compra"]').value;
  var fecha02 = document.querySelector('input[placeholder="envio"]').value;
  const mensaje = form.querySelector('textarea').value;
  const datosFormulario = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    telefono: telefono,
    email: email,
    motivoConsulta: motivoConsulta,
    numeroCompra: numeroCompra,
    numeroEnvio: numeroEnvio,
    fecha01: fecha01,
    fecha02: fecha02,
    mensaje: mensaje
  };
  datosArray.push(datosFormulario);
  console.log("Datos guardados:");
  console.log(datosArray);
  console.log("Nombre:" +nombre);
  console.log("Apellido:" +apellido);
  console.log("D.N.I:" +dni);
  console.log("Telefono:" +telefono);
  console.log("E-mail:" +email);
  console.log("Asunto:" +motivoConsulta);
  console.log("Nº de compra:" +numeroCompra);
  console.log("Nº de envio:" +numeroEnvio);
  console.log("Fecha de la compra:" +fecha01);
  console.log("Fecha del envio:" +fecha02);
  console.log("Mensaje:" +mensaje);
}

    function generarPDF() {
        
    var nombre = document.querySelector('input[placeholder="Nombre"]').value;
    var apellido = document.querySelector('input[placeholder="Apellido"]').value;
    var dni = document.querySelector('input[placeholder="D.N.I"]').value;
    var telefono = document.querySelector('input[placeholder="Telefono"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var motivo = document.querySelector('select[name="motivo"]').value;
    var numCompra = document.querySelector('input[placeholder="Nº de compra"]').value;
    var numEnvio = document.querySelector('input[placeholder="Nº de envio"]').value;
    var fecha1 = document.querySelector('input[placeholder="compra"]').value;
    var fecha2 = document.querySelector('input[placeholder="envio"]').value;
    var mensaje = document.querySelector('textarea[name="mensaje"]').value;
            
           
    var doc = new jsPDF();
        
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bolditalic');
            
    doc.text('Comprobante del Reclamo-Consulta', 10, 10);
        
    doc.setFontSize(12)
    doc.text('Nombre: ' + nombre, 10, 40);
    doc.text('Apellido: ' + apellido, 10, 50);
    doc.text('D.N.I: ' + dni, 10, 60);
    doc.text('Teléfono: ' + telefono, 10, 70);
    doc.text('E-mail: ' + email, 10, 80);
    doc.text('Asunto: ' + motivo, 10, 90);
    doc.text('Nº de compra: ' + numCompra, 10, 100);
    doc.text('Nº de envio: ' + numEnvio, 10, 110);
    doc.text('Fecha en que realizo la compra: ' + fecha1, 10, 120);
    doc.text('Fecha del envio: ' + fecha2, 10, 130);
    doc.text('Reclamo - Consulta: ' + mensaje, 10, 140);
        
    doc.save('ReclamoIgnite.pdf');
    }
      

      
    
    
    















    