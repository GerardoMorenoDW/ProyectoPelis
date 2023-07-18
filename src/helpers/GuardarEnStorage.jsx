export const GuardarPeliStorage = (key, elemento) => {

    //Conseguir los elementos que ya tenemos en el local storage
    let elementos = JSON.parse(localStorage.getItem(key));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //Anhadir un objeto al array elementos
        elementos.push(elemento);
    }else{
        // Crear un array con la nueva peli
        elementos = [elemento];
    }

    //Guardar en el LocalStorage
    localStorage.setItem(key, JSON.stringify(elementos));

    //Devolver objeto guardado
    return elemento;
}