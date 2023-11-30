export const formaterFecha = fecha =>{
    const fechaNueva =new Date(fecha);
    const opciones ={
        year : 'numeric',
        month : 'short',
        day : '2-digit',
    };

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}