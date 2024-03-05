/* se coloca este export {}; para que este archivo sea como un módulo, ya que un módulo en TypeScript generalmente se define con export alrededor de funciones, clases, variables, etc., que queremos hacer accesibles desde otros archivos, pero como en este caso son funciones autoinvocadas entonces solo se pondrá un export vacío usando export {}; al inicio de cada archivo, ya que con eso para typescript cada archivo sería un modulo independiente */
export {};

(() => {
  // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
  // numbers.push(true);
  // numbers.push(11);
  // numbers.push("11");

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
  const users: { nombre: string; apellido: string }[] = [
    { nombre: "Kevin", apellido: "Durant" },
    { nombre: "Augusto", apellido: "Mayer" },
    { nombre: "Mike", apellido: "Dell" },
  ];

  console.log(numbers);
  villians.forEach((villian) => console.log(villian.toUpperCase()));
  users.forEach((user) => console.log(user));
})();
