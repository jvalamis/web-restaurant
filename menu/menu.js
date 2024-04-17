export const menu = {
  Appetizers: [
    {
      Name: "Iceberg Wedge Salad with House Cured Bacon",
      Description: ["Tomato Salsa", "Gorgonzola"],
      Price: 7.5,
    },
    {
      Name: "Sautéed Shredded Brussels Sprouts",
      Description: ["Bacon", "Hazelnuts", "Gorgonzola"],
      Price: 6.95,
    },
    {
      Name: "Kale Salad",
      Description: [
        "Parmesan Crisp",
        "Corn",
        "Radish",
        "Garlic-Lemon Vinaigrette",
      ],
      Price: 7.5,
    },
    {
      Name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
      Description: ["Grilled Tomato Salsa", "Crostini"],
      Price: 6.95,
    },
    {
      Name: "Chicken and Cabbage Eggrolls",
      Description: ["Hot & Sour Dipping Sauce"],
      Price: 6.95,
    },
  ],
  Entrees: [
    {
      Name: "Farfalle Pasta with Braised Pork in Tomato Cream",
      Description: ["Capers", "Butternut Squash", "Kale"],
      Price: 12.95,
    },
    {
      Name: "Stout Braised Bratwurst",
      Description: [
        "Horseradish Mashed Potatoes",
        "Roasted Root Veggies",
        "Grilled Onion",
      ],
      Price: 13.95,
    },
    {
      Name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
      Description: ["Vegetable Sauté", "Golden Raisin Chutney"],
      Price: 15.95,
    },
    {
      Name: "Sesame Shrimp",
      Description: [
        "Udon Noodles",
        "Ramen Broth",
        "Shiitake Mushrooms",
        "Bean Sprouts",
        "Scallions",
      ],
      Price: 13.95,
    },
  ],
  Sandwiches: {
    Cold: [
      {
        Name: "Turkey & Avocado",
        Description: ["Tomato"],
        Price_half: 7.95,
        Price_full: 9.25,
      },
      {
        Name: "Pub Club",
        Description: ["Turkey", "Bacon", "Lettuce", "Tomato"],
        Price_half: 7.95,
        Price_full: 9.25,
      },
      {
        Name: "Rare Roast Beef & Swiss",
        Description: ["Sweet-Hot Mustard", "Lettuce", "Red Onion"],
        Price_half: 7.95,
        Price_full: 9.25,
      },
      {
        Name: "Veggie",
        Description: ["Pepper Jack", "Avocado", "Sprout", "Tomato"],
        Price_half: 7.95,
        Price_full: 9.25,
      },
    ],
    Hot: [
      {
        Name: "Southwest Chicken Breast",
        Description: [
          "Grilled Onion",
          "Poblano Pepper",
          "Tomato",
          "Lettuce",
          "Jack Cheese",
        ],
        Price: 9.5,
      },
      {
        Name: "Portobello Fresh Mozzarella",
        Description: [
          "Caramelized Onion",
          "Roasted Pepper",
          "Tomato",
          "Field Greens",
          "Basil Aioli",
        ],
        Price: 9.5,
      },
      {
        Name: "Chipotle BBQ Pork Sandwich",
        Description: ["Pickled Jalapeño Slaw"],
        Price: 9.5,
      },
      {
        Name: "Bacon Burger",
        Description: ["Swiss", "Lettuce", "Tomato"],
        Price: 9.25,
      },
      {
        Name: "Mexi Burger",
        Description: [
          "Pepper Relish",
          "Pepper Jack",
          "Tomato",
          "Lettuce",
          "Guacamole",
        ],
        Price: 9.25,
      },
      {
        Name: "Herb Marinated Top Sirloin",
        Description: [
          "Crimini Mushrooms",
          "Caramelized Onion",
          "Gorgonzola",
          "Basil Aioli",
          "Served Open Faced on Focaccia",
        ],
        Price: 10.95,
      },
      {
        Name: "Roast Beef",
        Description: [
          "Ancho Au Jus",
          "Jack Cheese",
          "Grilled Onions",
          "Served on Crumb Bros. Baguette",
        ],
        Price: 9.75,
      },
      {
        Name: "Blackened Catfish",
        Description: [
          "Creole Peppers & Onions",
          "Fresh Herb Aioli",
          "Served on House Made Sourdough",
        ],
        Price: 9.75,
      },
    ],
  },
  SoupSaladCombos: {
    Soup: 4.95,
    Combo: {
      With_Small_Green_Salad_Fresh_Fruit_or_House_Pasta: 7.25,
      With_Half_Pasta_of_the_Day: 8.75,
    },
  },
  Fajitas: [
    {
      Name: "Chicken",
      Description: [
        "Onions",
        "Poblano and Bell Peppers",
        "Guacamole",
        "Two Salsas",
      ],
      Price: 10.95,
    },
    {
      Name: "Sirloin Steak",
      Description: [
        "Onions",
        "Poblano and Bell Peppers",
        "Carrots",
        "Onion",
        "Guacamole",
        "Two Salsas",
      ],
      Price: 10.95,
    },
  ],
  Tacos: [
    {
      Name: "Beer Battered Fish",
      Description: ["Jalapeño Remoulade", "Roasted Salsa", "Cabbage"],
      Price: 9.95,
    },
    {
      Name: "Carne Asada (Marinated Sirloin)",
      Description: ["Guacamole", "Tomatillo Salsa"],
      Price: 9.95,
    },
    {
      Name: "Citrus Marinated Chicken",
      Description: ["Guacamole", "Tomatillo Salsa"],
      Price: 9.95,
    },
    {
      Name: "Grilled Veggie",
      Description: [
        "Zucchini",
        "Yellow Squash",
        "Bell Peppers",
        "Onion",
        "Guacamole",
        "Tomatillo Salsa",
      ],
      Price: 9.95,
    },
  ],
  Enchiladas: [
    {
      Type: "Beef",
      Price_uno: 8.5,
      Price_dos: 9.95,
      Price_tres: 11.5,
    },
    {
      Type: "Chicken",
      Price_uno: 8.5,
      Price_dos: 9.95,
      Price_tres: 11.5,
    },
    {
      Type: "Cheese",
      Price_uno: 8.5,
      Price_dos: 9.95,
      Price_tres: 11.5,
    },
    {
      Type: "Veggie",
      Price_uno: 8.5,
      Price_dos: 9.95,
      Price_tres: 11.5,
    },
  ],
  ChiliRelleno: {
    Description: [
      "Stuffed with Jack Cheese & Corn",
      "Glazed Yam",
      "Chayote Squash Succotash",
      "Red Chili Sauce",
    ],
    Price: 9.95,
  },
  PepitaCrustedSalmon: {
    Description: [
      "Chipotle Glaze",
      "Chevre Whipped Yams",
      "Jicama Slaw",
      "Tomatillo Sauce",
    ],
    Price: 10.95,
  },
  Quiche: {
    Description: ["Bacon", "Swiss", "Mushroom", "Zucchini and Mushroom Quiche"],
    Choices: [
      {
        Side: "Fresh Fruit",
        Price: 8.95,
      },
      {
        Side: "Green Salad",
        Price: 8.95,
      },
    ],
  },
  GreenSalads: [
    {
      Name: "Grilled Red Trout",
      Description: [
        "Lentils",
        "Tomatoes",
        "Cukes",
        "Green Beans",
        "Red Bells",
        "Almonds",
        "Sundried Tomato Vinaigrette",
      ],
      Price: 10.95,
    },
    {
      Name: "Smoked Turkey",
      Description: [
        "Cheese Tortellini",
        "Bacon",
        "Tomato",
        "Cucumber",
        "Egg",
        "Black Bean-Corn Salsa",
        "Avocado",
      ],
      Price: 9.95,
    },
    {
      Name: "Asian Grilled Chicken",
      Description: [
        "Snow Peas",
        "Carrot Slaw",
        "Red Bells",
        "Water Chestnut",
        "Peanuts",
        "Baby Corn",
        "Cilantro",
        "Cukes",
        "Spicy Peanut Dressing",
      ],
      Price: 10.5,
    },
    {
      Name: "Southwest Grilled Chicken",
      Description: [
        "Tomato",
        "Guacamole",
        "Pepitas",
        "Jicama",
        "Corn & Black Bean Salsa",
        "Orange Wedges",
        "Spicy Citrus Vinaigrette",
      ],
      Price: 10.5,
    },
    {
      Name: "Mediterranean",
      Description: [
        "Italian Sausage",
        "Artichoke Hearts",
        "Green Beans",
        "Roma Tomato",
        "Kalamatas",
        "Red Onion",
        "Cucumber",
        "Croutons",
        "Parmesan",
        "Fresh Mozzarella",
        "Gorgonzola Vinaigrette",
      ],
      Price: 9.95,
    },
    {
      Name: "Grilled Salmon",
      Description: [
        "Artichoke Tapenade",
        "Shredded Kale",
        "Corn",
        "Radish",
        "Parmesan Crisps",
      ],
      Price: 11.5,
    },
  ],
};
