(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
    // mutantPower: (id: number) => string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutantPower(id: number) {
      console.log({ id });
      return this.name + " " + this.realName;
    }
  }

  const wolverine: Mutant = new Mutant(40, "Wolverine", "Logan");
  console.log(wolverine);
  console.log(wolverine.mutantPower(10));
})();
