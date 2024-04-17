import { gql } from "graphql-tag";

export const typeDefs = gql`
  """
  Queries for retrieving menu items.
  """
  type Query {
    """
    List of appetizers.
    """
    Appetizers: [Appetizer!]!
    """
    List of entrees.
    """
    Entrees: [Entree!]!
    """
    List of sandwiches.
    """
    Sandwiches: Sandwiches!
    """
    Details of soup salad combos.
    """
    SoupSaladCombos: SoupSaladCombos!
    """
    List of fajitas.
    """
    Fajitas: [Fajita!]!
    """
    List of tacos.
    """
    Tacos: [Taco!]!
    """
    List of enchiladas.
    """
    Enchiladas: [Enchilada!]!
    """
    Details of quiche.
    """
    Quiche: Quiche!
    """
    List of green salads.
    """
    GreenSalads: [GreenSalad!]!
    """
    Represents a chili relleno item.
    """
    ChiliRelleno: ChiliRelleno!
    """
    Represents a pepita crusted salmon item.
    """
    PepitaCrustedSalmon: PepitaCrustedSalmon!
  }

  """
  Represents an appetizer item.
  """
  type Appetizer {
    Name: String!
    Description: [String!]!
    Price: Float!
  }

  """
  Represents an entree item.
  """
  type Entree {
    Name: String!
    Description: [String!]!
    Price: Float!
  }

  """
  Represents a sandwich item.
  """
  type Sandwich {
    Name: String!
    Description: [String!]!
    Price_half: Float
    Price_full: Float
  }

  """
  Represents a cold sandwich item.
  """
  type ColdSandwich {
    Name: String!
    Description: [String!]!
    Price_half: Float
    Price_full: Float
  }

  """
  Represents a hot sandwich item.
  """
  type HotSandwich {
    Name: String!
    Description: [String!]!
    Price: Float
  }

  """
  Represents soup salad combo options.
  """
  type SoupSaladCombos {
    Soup: Float
    Combo: Combo
  }

  """
  Represents a combo option.
  """
  type Combo {
    With_Small_Green_Salad_Fresh_Fruit_or_House_Pasta: Float
    With_Half_Pasta_of_the_Day: Float
  }

  """
  Represents a fajita item.
  """
  type Fajita {
    Name: String!
    Description: [String!]!
    Price: Float!
  }

  """
  Represents a taco item.
  """
  type Taco {
    Name: String!
    Description: [String!]!
    Price: Float!
  }

  """
  Represents an enchilada item.
  """
  type Enchilada {
    Type: String!
    Price_uno: Float
    Price_dos: Float
    Price_tres: Float
  }

  """
  Represents a chili relleno item.
  """
  type ChiliRelleno {
    Description: [String!]!
    Price: Float
  }

  """
  Represents a pepita crusted salmon item.
  """
  type PepitaCrustedSalmon {
    Description: [String!]!
    Price: Float
  }

  """
  Represents a quiche item.
  """
  type Quiche {
    Description: [String!]!
    Choices: [QuicheChoice!]!
  }

  """
  Represents a quiche choice.
  """
  type QuicheChoice {
    Side: String!
    Price: Float
  }

  """
  Represents a green salad item.
  """
  type GreenSalad {
    Name: String!
    Description: [String!]!
    Price: Float!
  }

  """
  Represents a collection of cold and hot sandwiches.
  """
  type Sandwiches {
    Cold: [ColdSandwich!]!
    Hot: [HotSandwich!]!
  }
`;
