
function consulta_pin() {
    let url ="https://www.enlace-apb.com/interssi/consultarPinFueraPagina.jsp"
    window.open(url,'_blank');
};

function consulta_certificado() {
    let url ="https://www.enlace-apb.com/interssi/descargarCertificacionPago.jsp"
    window.open(url,'_blank');
};

document.getElementById('puntos_pago').addEventListener("click", function() {
    window.open('mapa.html', '_blank');
});
