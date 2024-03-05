(() => {
  const fullName = (firstName: string, lastName: string): string => {
    if (firstName.length === 0 && lastName.length === 0) {
      throw new Error("Debe de tener al menos un caracter");
    }
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });

  const name2 = fullName("", "");
  console.log({ name2 });
})();
