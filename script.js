// Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    nome: "Matheus",
    idade: 24,
    ocupação: "Designer"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

eu.cidade = "Rio de Janeiro"

// Remova uma propriedade desse objeto.

delete eu.idade

//Mostre no console todas as propriedades desse objeto.

console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Maria",
        idade: 31,
        telefone: 21977320015,
        amigos: ["Sara","Camila","Paula","Marcos"]
    },
    {
        nome: "Sara",
        idade: 27,
        telefone: 21999059329,
        amigos: ["Maria","Camila","Paula","Marcos"]
    },
    {
        nome: "Camila",
        idade: 29,
        telefone: 21969310598,
        amigos: ["Sara","Maria","Paula","Marcos"]
    },
    {
        nome: "Paula",
        idade: 31,
        telefone: 21998985680,
        amigos: ["Sara","Camila","Maria","Marcos"]
    },
    {
        nome: "Marcos",
        idade: 30,
        telefone: 21997003551,
        amigos: ["Sara","Camila","Paula","Maria"]
    }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[4])
console.log(cadastro[4].amigos[1])