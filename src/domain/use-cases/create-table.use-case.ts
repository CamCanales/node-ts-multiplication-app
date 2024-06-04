
//reglas de negocio que quiero forzar a la clase para que se implemente 
export interface CreateTableUseCase{
    execute:(options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base:number;
    limit?:number;
}


//"implements CreateTableUseCase" la clase implementa la interface
export class CreateTable implements CreateTableUseCase{

    //primer método que se llama al instanciar la clase
    constructor(
        /*
        DI - Dependency Injection
        Podremos injectar a este caso de uso, la forma como queremos que creee la data o que queremos que haga basado en dependencias externas
        */

    ){
        
    }

    //": CreateTableOptions" -> UTILIZAMOS INTERFACE
    //acá utilizaremos las dependencias externas
    execute({base, limit=10}: CreateTableOptions){

        let outputMessage='';
        for(let i = 1; i <= limit; i++){
            outputMessage += `${base} X ${ i } = ${ base * i }\n`;
        }
        return outputMessage;
    }

}








