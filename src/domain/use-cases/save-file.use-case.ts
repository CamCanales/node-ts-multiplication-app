import fs from 'fs'


export interface SaveFileUseCase{
    execute: (options: Options) => boolean;
}

export interface Options{
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase{


    constructor(
        /*
        DI: Repository: storageRepository
        */ 
    ){

    }

    execute({
        fileContent, 
        fileDestination= 'outputs', 
        fileName = 'table'}: Options): boolean{
        
        try{

            //crea una carpeta de forma Syncrona con la ruta especificada
            fs.mkdirSync(fileDestination, {recursive: true}); //si no existe el directorio, que lo cree de manera recursiva

            //grabar el resultado en el archivo de salida
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent); 
            //console.log('file created!')

            return true;
        }
        catch(error){
            console.error(error);
            return false;
        }
        
    }
}

