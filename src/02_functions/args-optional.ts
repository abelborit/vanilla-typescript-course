(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    if (firstName.length === 0 && lastName?.length === 0) {
      throw new Error("Debe de tener al menos un caracter");
    }
    return `${firstName} ${lastName || "----"}`;
  };

  const name1 = fullName("Tony", "Stark");
  console.log({ name1 });

  const name2 = fullName("Tony");
  console.log({ name2 });

  const name3 = fullName("", "");
  console.log({ name3 });
})();
