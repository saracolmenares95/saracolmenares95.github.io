function whatsapp() {

  Swal.fire({
    title: 'Ir a chat de Whatsapp',
    text: "se redireccionará la página a https://web.whatsapp.com/",
    icon: 'question',
    showCancelButton: true,
    background: '#008000',
    color: '#fff',
    confirmButtonColor: '#008000',
    backdrop: `
        rgba(0,0,123,0.4)
        `,
    confirmButtonText: 'Si, abandonar página',
    cancelButtonText: 'No, permanecer en esta página'
  }).then((result) => {
    if (result.isConfirmed) {

      window.location.href = 'https:wa.me/573114610919'

    }
  })

}

function llamar() {

  Swal.fire({
    title: '¿Deseas hacer esta llamada?',
    icon: 'question',
    showCancelButton: true,
    background: '#008000',
    color: '#fff',
    confirmButtonColor: '#008000',
        backdrop: `
        rgba(0,0,123,0.4)
        `,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      window.location.href = 'tel:+573107994335'

    }
  })

}