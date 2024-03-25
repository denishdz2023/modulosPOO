// perimer modulo es una Clase para gestionar los carros
class Carros {
    constructor(nombre, modelo, color) {
      this.nombre = nombre;
      this.modelo = modelo;
      this.color = color;
    }
  
    mostrarDetalles() {
      return `${this.nombre} ${this.modelo} (${this.color})`;
    }
  }
  
  // segundo modulo es una Clase para gestionar los clientes
  class Cliente {
    constructor(nombre, apellido, dui) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dui = dui;
      this.carroPrestado = null; 
    }
  
    prestarCarro(carros) {
      this.carroPrestado = carros;
      return `${this.nombre} ${this.apellido} ha alquilado un carro: ${carros.mostrarDetalles()}`;
    }
  
    mostrarCarroPrestado() {
      if (this.carroPrestado) {
        return `${this.nombre} ${this.apellido} tiene alquilado un carro: ${this.carroPrestado.mostrarDetalles()}`;
      } else {
        return `${this.nombre} ${this.apellido} no tiene ningún carro alquilado.`;
      }
    }
  }
  
  // Crear instancias de carros y clientes
  const carro1 = new Carros("Honda", "Civic", "Gris");
  const carro2 = new Carros("Acura", "RSX", "Rojo");
  
  const cliente1 = new Cliente("Ivan", "Beltran", "20230723");
  const cliente2 = new Cliente("Denis", "Benavides", "20230386");
  
  // Alquilar un carro al cliente
  cliente1.prestarCarro(carro1);
  cliente2.prestarCarro(carro2);
  
  // Mostrar el carro alquilado por el cliente
  console.log(cliente1.mostrarCarroPrestado());
  console.log(cliente2.mostrarCarroPrestado());

