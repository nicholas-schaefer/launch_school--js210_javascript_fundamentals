const person = {
    firstName() {
      return 'Victor';
    },
    lastName() {
      return 'Reyes';
    },
  };

  console.log(`${person.firstName} ${person.lastName}`);
  console.log(`${person.firstName()} ${person.lastName()}`);