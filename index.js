// 1
class SerVivo {
    caminar(nombre) {
        console.log(`Ahora esta caminado: ${nombre}`)
    }
}

class Persona extends SerVivo {
    constructor(nombre) {
        super();
        this.nombre = nombre
    }

    moverse() {
        return this.caminar(this.nombre)
    }
}

// 2
const arrFindIndex = (arr, search) => console.log(arr.findIndex(x => x === search))

// 3
const arrEvery = (arr, condition) => console.log(arr.every((currentValue) => currentValue < condition))

// 4 
const arrSome = (arr, condition) => console.log(arr.some((currentValue) => currentValue === condition))

// 5 
const arrFilter = (arr, condition) => console.log(arr.filter((currentValue) => currentValue > condition))

// 6 
const arrMap = (arr, condition) => console.log(arr.map((currentValue) => currentValue - condition))

// Result 1
const persona = new Persona('Juanito')
persona.moverse()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// Result 2
arrFindIndex(arr, 3)

// Result 3
arrEvery(arr, 10)

// Result 4
arrSome(arr, 0)

// Result 5
arrFilter(arr, 5)

// Result 6
arrMap(arr, 2)

