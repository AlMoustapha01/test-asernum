import logoTotal from "@/assets/images/Logo_TotalEnergies.png";
export const userData = {
  name: "John Doe",
  email: "bendiomande23@gmail.com",
  password: "P@ssword",
  balance: "800 300",
  balance_available: "800 300",
  accountNumber: "PA4839CI",
};

export const enterprises = [
  {
    name: "Total Energie CI",
    code: "Npa487738CI",
    icon: logoTotal.src,
  },
  {
    name: "Total Energie CI",
    code: "Npa422738CI",
    icon: logoTotal.src,
  },
];

export const currentCurrency = "FCFA";
export const currencies = [
  {
    value: "FCFA",
    label: "FCFA",
  },
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "GBP",
    label: "GBP",
  },
  {
    value: "JPY",
    label: "JPY",
  },
];

export const sendingModes = ["Direct", "Mobile money", "Virement"];
