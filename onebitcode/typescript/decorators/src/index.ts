function Decorator() {
    return function (target, key, descriptor) {
      // descriptor.value é o nosso método decorado
      // vamos atribuir a ele uma nova função    
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado a 2`);
            return Math.pow(value, 2)
        }
    }
}

class Planet {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @Decorator()
    calculate(value: number) {
      // ...
      console.log(`Calculando ${value} * 2`);
      return value * 2
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`Resultado: ${result}`)