let imagenes= [
    'img/elephant-3832516_640.jpg',
    'img/storks-6519599_640.jpg',
    'img/tasmanian-devil-6479685_640.jpg'
];
let slider = document.querySelector('.slider img'),
    btnSiguiente = document.querySelector('#btn_siguiente'),
    btnAnterior = document.querySelector('#btn_anterior'),
    url = window.origin;
slider.src = imagenes[0];

const indiceImgAct = () => {
    for(let indice=0; indice<imagenes.length; indice++){
        if (`${url}/${imagenes[indice]}` == slider.src) {
            return indice;
        }
    }
}

const siguiente = () =>{
    let indiceAct= indiceImgAct(),
        indiceSig = ++indiceAct;
        if (indiceSig <= imagenes.length -1) {
            slider.src = imagenes[indiceSig];
        }else{
        slider.src = imagenes[0];
        }
}
const anteriror = () => {
    let indiceAct= indiceImgAct(),
        indiceAnt = --indiceAct;
        if (indiceAnt >= 0) {
            slider.src=imagenes[indiceAnt];
        }else{
            slider.src =imagenes[imagenes.length-1]
        }
        

}

const automatico = () => {
    setInterval(() => {
        siguiente();
    }, 2000);
}
automatico();

btnSiguiente.addEventListener('click', siguiente);
btnAnterior.addEventListener('click', anteriror)


