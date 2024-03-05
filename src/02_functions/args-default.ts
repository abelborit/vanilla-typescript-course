(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "----"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "----"}`;
    }
  };

  const name1 = fullName("Tony", "Stark", true);
  console.log({ name1 });

  const name2 = fullName("Tony", "Stark");
  console.log({ name2 });
})();
