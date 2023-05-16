const regExNombre = /^[A-Z][a-zA-Z\s]{0,14}$/
const regExFormato = /^\d{1,3} - \d{1,3}$/
const regExLifeSpan= /^\d{1,2} - \d{1,2}$/
const regExImagen = /^https?:\/\/[^\s/$.?#].[^\s]*\.(gif|jpe?g|tiff?|png|webp|bmp)$/i

const validarNumero=(numero)=>{
    
    const partes = numero && numero.split("-")
    const primeraParte = parseInt(partes[0].trim());
    const segundaParte = parseInt(partes[1].trim());
    return (primeraParte < segundaParte);
}

const Validation =({name,height,weight,life_span,image})=>{
    
    const errors={}
    if(!regExNombre.test(name))errors.name = "ingrese un nombre valido"
    if(!regExFormato.test(weight) || !validarNumero(weight))errors.weight = "ingrese un peso valido"
    if(!regExFormato.test(height) || !validarNumero(height))errors.height = "ingrese una altura valida"
    if(!regExLifeSpan.test(life_span) || !validarNumero(life_span)) errors.life_span = "ingrese una edad valida"
    if(!regExImagen.test(image)) errors.image="ingrese un url valido"

    return errors
}

export default Validation