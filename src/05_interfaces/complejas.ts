(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string; // Forma 1: funciones como método
    // getFullAddress: (id: string) => string; // Forma 2: funciones como propiedad
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    /* se usa cualquiera de estas dos forma y no con la función flecha para poder hacer uso del this. La diferencia principal entre estas dos formas radica en el comportamiento del operador this. En el primer getFullAddress el this dentro de la función se referirá al objeto client, mientras que en el segundo getFullAddress el this dentro de la función se referirá al contexto en el que se llame a la función, lo que puede resultar en un comportamiento diferente, especialmente si la función se pasa como argumento o se asigna a otra variable. */

    /* FORMA 1: forma más utilizada ya que se define directamente la función dentro del objeto literal. Esta forma es más concisa y se usa comúnmente en JavaScript y TypeScript para definir métodos en objetos.  */
    getFullAddress(id: string) {
      console.log({ id });
      return this.address.city;
    },
    /* FORMA 2: se está utilizando una propiedad de método en el objeto literal y asignando una función anónima a esa propiedad. La función anónima se define utilizando la palabra clave function. Esta forma es menos común en TypeScript, pero sigue siendo válida */
    // getFullAddress: function (id: string) {
    //   console.log({ id });
    //   return this.address.city;
    // },
  };

  console.log(client);

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 120,
      zip: "K2S U2A",
    },
    /* se usa cualquiera de estas dos forma y no con la función flecha para poder hacer uso del this. La diferencia principal entre estas dos formas radica en el comportamiento del operador this. En el primer getFullAddress el this dentro de la función se referirá al objeto client, mientras que en el segundo getFullAddress el this dentro de la función se referirá al contexto en el que se llame a la función, lo que puede resultar en un comportamiento diferente, especialmente si la función se pasa como argumento o se asigna a otra variable. */

    /* FORMA 1: forma más utilizada ya que se define directamente la función dentro del objeto literal. Esta forma es más concisa y se usa comúnmente en JavaScript y TypeScript para definir métodos en objetos */
    // getFullAddress(id: string) {
    //   console.log({ id });
    //   return this.address.city;
    // },
    /* FORMA 2: se está utilizando una propiedad de método en el objeto literal y asignando una función anónima a esa propiedad. La función anónima se define utilizando la palabra clave function. Esta forma es menos común en TypeScript, pero sigue siendo válida */
    getFullAddress: function (id: string) {
      console.log({ id });
      return this.address.city;
    },
  };

  console.log(client2);
})();
