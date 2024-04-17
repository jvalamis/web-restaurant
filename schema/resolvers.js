import { menu } from "../menu/menu.js";

export const resolvers = {
  Query: {
    Appetizers: () => menu.Appetizers,
    Entrees: () => menu.Entrees,
    Sandwiches: () => menu.Sandwiches,
    SoupSaladCombos: () => menu.SoupSaladCombos,
    Fajitas: () => menu.Fajitas,
    Tacos: () => menu.Tacos,
    Enchiladas: () => menu.Enchiladas,
    Quiche: () => menu.Quiche,
    GreenSalads: () => menu.GreenSalads,
    ChiliRelleno: () => menu.ChiliRelleno,
    PepitaCrustedSalmon: () => menu.PepitaCrustedSalmon,
  },
};
