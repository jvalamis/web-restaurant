import { server } from "../index";
import { menu } from "../menu/menu";
import { gql } from "graphql-tag";

// Appetizers Test
describe("Appetizers Test", () => {
  it("should return the list of appetizers", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Appetizers {
            Name
            Description
            Price
          }
        }
      `,
    });

    expect(data.Appetizers).toEqual(menu.Appetizers);
  });
});

// Entrees Test
describe("Entrees Test", () => {
  it("should return the list of entrees", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Entrees {
            Name
            Description
            Price
          }
        }
      `,
    });

    expect(data.Entrees).toEqual(menu.Entrees);
  });
});

// Sandwiches Test
describe("Sandwiches Test", () => {
  it("should return the list of sandwiches", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Sandwiches {
            Cold {
              Name
              Description
              Price_half
              Price_full
            }
            Hot {
              Name
              Description
              Price
            }
          }
        }
      `,
    });

    expect(data.Sandwiches).toEqual(menu.Sandwiches);
  });
});

// SoupSaladCombos Test
describe("SoupSaladCombos Test", () => {
  it("should return the list of soup salad combos", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          SoupSaladCombos {
            Soup
            Combo {
              With_Small_Green_Salad_Fresh_Fruit_or_House_Pasta
              With_Half_Pasta_of_the_Day
            }
          }
        }
      `,
    });

    expect(data.Soup_salad_combos).toEqual(menu.Soup_salad_combos);
  });
});

// Fajitas Test
describe("Fajitas Test", () => {
  it("should return the list of fajitas", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Fajitas {
            Name
            Description
            Price
          }
        }
      `,
    });

    expect(data.Fajitas).toEqual(menu.Fajitas);
  });
});

// Tacos Test
describe("Tacos Test", () => {
  it("should return the list of tacos", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Tacos {
            Name
            Description
            Price
          }
        }
      `,
    });

    expect(data.Tacos).toEqual(menu.Tacos);
  });
});

// Enchiladas Test
describe("Enchiladas Test", () => {
  it("should return the list of enchiladas", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Enchiladas {
            Type
            Price_uno
            Price_dos
            Price_tres
          }
        }
      `,
    });

    expect(data.Enchiladas).toEqual(menu.Enchiladas);
  });
});

// ChiliRelleno Test
describe("ChiliRelleno Test", () => {
  it("should return the chili relleno details", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          ChiliRelleno {
            Description
            Price
          }
        }
      `,
    });

    expect(data.ChiliRelleno).toEqual(menu.ChiliRelleno);
  });
});

// PepitaCrustedSalmon Test
describe("PepitaCrustedSalmon Test", () => {
  it("should return the pepita crusted salmon details", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          PepitaCrustedSalmon {
            Description
            Price
          }
        }
      `,
    });

    expect(data.PepitaCrustedSalmon).toEqual(menu.PepitaCrustedSalmon);
  });
});

// Quiche Test
describe("Quiche Test", () => {
  it("should return the list of quiche options", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          Quiche {
            Description
            Choices {
              Side
              Price
            }
          }
        }
      `,
    });

    expect(data.Quiche).toEqual(menu.Quiche);
  });
});

// GreenSalads Test
describe("GreenSalads Test", () => {
  it("should return the list of green salads", async () => {
    const {
      body: {
        singleResult: { data, errors },
      },
    } = await server.executeOperation({
      query: gql`
        query {
          GreenSalads {
            Name
            Description
            Price
          }
        }
      `,
    });

    expect(data.GreenSalads).toEqual(menu.GreenSalads);
  });
});

afterAll(async () => {
  await server.stop();
});
