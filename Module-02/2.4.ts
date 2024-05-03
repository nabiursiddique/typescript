{
  // Generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartwatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Persian",
    computer: {
      brand: "Asus",
      model: "vivobook",
      releaseYear: 2021,
    },
    smartwatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Jhankar",
    computer: {
      brand: "Apple",
      model: "Mackbook",
      releaseYear: 2024,
    },
    smartwatch: {
      brand: "Samsung",
      model: "watch3",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
