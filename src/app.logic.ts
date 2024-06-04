import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';



//------EJECUCION COMANDO
//"npx ts-node src/app.logic --base 7 -s -l 4 "

//renombramos las variablas en la desestructuracion de las opciones del archivo "args.plugin.ts"
const{ b:base, l:limit, s:showTable} = yarg; 

let outputMessage = '';
const headerMessage = `
================================
        Tabla del ${base}              
================================\n
`;

for(let i = 1; i <= limit; i++){
    outputMessage += `${base} X ${ i } = ${ base * i }\n`;
}

outputMessage = headerMessage + outputMessage;
//si "showTable" esta en true en el comando npm, imprimiremos la tabla 
if(showTable){
    console.log(outputMessage);
}


const outputPath = `outputs/folder1/folder2/folder3`;

//crea una carpeta de forma Syncrona con la ruta especificada
fs.mkdirSync(outputPath, {recursive: true});

//grabar el resultado en el archivo de salida
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage); 
console.log('file created!') 

