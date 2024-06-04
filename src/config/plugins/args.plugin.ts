import  yargs from 'yargs';
import {hideBin } from 'yargs/helpers';


//creamos una opcion "b" para correr el ""dev": "ts-node src/app.ts -b 10"," del package.json
//al ejecutar npm run dev sin el "-b 10" en el package.json, mostrará el sigueinte mensaje "Missing required argument: b"

export const yarg = yargs(process.argv)
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe: 'Multiplication table base'
})
//agrega una segunda opción al comando npm o npx package.json, con la sigla "l", y un valor por default que si no se proporciona se mostrará el 10 
.option('l',{
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication table limit'
})
//agrega una tercera opción al comando npm o npx del package.json, con la sigla "s" la cual especifica si queremos mostrar o no la tabla de multiplicar, por default es false
.option('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Shot multiplication table'
    }
)
//agrega una opcion de filename al comando
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    describe: 'File name'
    }
)
//agrega una opcion de file destination al comando
.option('d',{
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    describe: 'File destination'
    }
)

//agrega una opcion para validemos los argumentos que ejecutaremos
.check((argv,options)=>{
    //console.log({argv, options});

    //si el argumento "b" es negativo, mostrará error
    if(argv.b < 1 )throw 'Error: base must be greater than 0';
    
    return true;
})
.parseSync()