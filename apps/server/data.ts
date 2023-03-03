interface Account {
  accountNumberType: string;
  accountNumber: string;
  productName: string;
  currencyCode: string;
  holderName: string;
  bankCountryCode: string;
  bankIdentifierCode: string;
  balance?: number;
  bookBalance?: number;
}

interface AccountGroups {
  groupName: string;
  groupId: string;
  accounts: Account[];
}

interface Accounts {
  accountGroups: AccountGroups[];
}

export const accounts: Accounts = {
  accountGroups: [
    {
      groupName: "Current Accounts",
      groupId: "current",
      accounts: [
        {
          accountNumberType: "IBAN",
          accountNumber: "NL18ABNA5476393838",
          productName: "Current Account",
          currencyCode: "EUR",
          holderName: "John Doe",
          bankCountryCode: "BE",
          bankIdentifierCode: "ZYABBE20",
          balance: 7500.39,
        },
        {
          accountNumberType: "IBAN",
          accountNumber: "NL14ABNA4415260276",
          productName: "Current Account",
          currencyCode: "EUR",
          holderName: "John Doe",
          bankCountryCode: "BE",
          bankIdentifierCode: "ZYABBE20",
          balance: 3000.0,
        },
      ],
    },
    {
      groupName: "Savings Accounts",
      groupId: "savings",
      accounts: [
        {
          accountNumberType: "IBAN",
          accountNumber: "NL72ABNA4416709382",
          productName: "Savings Account",
          currencyCode: "EUR",
          holderName: "John Doe",
          bankCountryCode: "BE",
          bankIdentifierCode: "ZYABBE20",
          bookBalance: 25000,
        },
      ],
    },
  ],
};
