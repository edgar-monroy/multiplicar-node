//requireds

//const fs = require('fs');


const argv = require('./config/yargs').argv;
const colors = require('colors');


const { CrearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('listar');
        break;

    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo crado: ${ archivo.red}`.blue))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');


}



/*let datos = '';


for (let i = 1; i <= 10; i++) {
    console.log(`${ base } + ${ i } = ${ base * i}`);
    datos += `${ base } + ${ i } = ${ base * i}\n`;
}

const data = new Uint8Array(Buffer.from(datos));
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El Arcchivo tabla-${base}.txt ha sido creado!`);
});*/