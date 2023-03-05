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
export const transactions = [
  {
    account: {
      accountNumber: "NL14ABNA4415260276",
      currencyCode: "EUR",
    },
    transactions: [
      {
        transactionId: "193594294273392.040002",
        bookDate: "2020-12-31",
        transactionDateTime: "2020-12-31T20:23:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 12.4,
        counterpartyAccountNumber: "NL68INGB6669002742",
        counterpartyName: "POSTNL",
        description: "Postage Expenses",
      },
      {
        transactionId: "193594294273392.040001",
        bookDate: "2020-12-31",
        transactionDateTime: "2020-12-31T20:23:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 7.64,
        counterpartyAccountNumber: "NL67INGB8338800724",
        counterpartyName: "BELASTINGDIENST",
        description: "TAX PAID",
      },
      {
        transactionId: "193576407479242.040002",
        bookDate: "2020-12-30",
        transactionDateTime: "2020 -1229T22:00:00Z",
        creditDebitIndicator: "CREDIT",
        amount: 850.0,
        counterpartyAccountNumber: "NL53INGB6653222179",
        counterpartyName: "Tennant 1",
        description: "Rent Dec 2020",
      },
    ],
  },
  {
    account: {
      accountNumber: "NL18ABNA5476393838",
      currencyCode: "EUR",
    },
    transactions: [
      {
        transactionId: "193466467514933.040002",
        bookDate: "2021-02-28",
        transactionDateTime: "2021-02-28T20:23:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 500,
        counterpartyAccountNumber: "NL72ABNA4416709382",
        counterpartyName: "John Doe",
        description: "Montly savings feb 21",
      },
      {
        transactionId: "193441320065145.040002",
        bookDate: "2021-01-31",
        transactionDateTime: "2021-02-31T20:23:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 250,
        counterpartyAccountNumber: "NL72ABNA4416709382",
        counterpartyName: "John Doe",
        description: "Montly savings jan 21",
      },
      {
        transactionId: "193679679615204.040002",
        bookDate: "2021-01-08",
        transactionDateTime: "2021-01-08T04:13:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 105.18,
        counterpartyAccountNumber: "NL44INGB4133227913",
        counterpartyName: "Media Markt Saturn Groep",
        description: "PIN PURCHASE 202101080001",
      },
      {
        transactionId: "193605509101484.030002",
        bookDate: "2021-01-04",
        transactionDateTime: "2021-01-01T00:24:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 10.0,
        counterpartyAccountNumber: "NL56RABO9108061688",
        counterpartyName: "Centraal Beheer",
        description: "SEPA iDEAL",
      },
      {
        transactionId: "193594294273392.040003",
        bookDate: "2020-12-31",
        transactionDateTime: "2020-12-31T20:23:00Z",
        creditDebitIndicator: "CREDIT",
        amount: 24.0,
        counterpartyAccountNumber: "NL45ABNA8985562061",
        counterpartyName: "ABN AMRO",
        description: "TIKKIE TERUGBETALING 202012311234",
      },
      {
        transactionId: "193372656256186.040002",
        bookDate: "2020-12-31",
        transactionDateTime: "2020-12-31T20:23:00Z",
        creditDebitIndicator: "DEBIT",
        amount: 50,
        counterpartyAccountNumber: "NL72ABNA4416709382",
        counterpartyName: "John Doe",
        description: "Montly savings dec 20",
      },
    ],
  },
  {
    account: {
      accountNumber: "NL72ABNA4416709382",
      currencyCode: "EUR",
    },
    transactions: [
      {
        transactionId: "193466467514933.040002",
        bookDate: "2021-02-28",
        transactionDateTime: "2021-02-28T20:23:00Z",
        creditDebitIndicator: "CREDIT",
        amount: 500,
        counterpartyAccountNumber: "NL18ABNA5476393838",
        counterpartyName: "John Doe",
        description: "Montly savings feb 21",
      },
      {
        transactionId: "193441320065145.040002",
        bookDate: "2021-01-31",
        transactionDateTime: "2021-02-31T20:23:00Z",
        creditDebitIndicator: "CREDIT",
        amount: 250,
        counterpartyAccountNumber: "NL18ABNA5476393838",
        counterpartyName: "John Doe",
        description: "Montly savings jan 21",
      },
      {
        transactionId: "193372656256186.040002",
        bookDate: "2020-12-31",
        transactionDateTime: "2020-12-31T20:23:00Z",
        creditDebitIndicator: "CREDIT",
        amount: 50,
        counterpartyAccountNumber: "NL18ABNA5476393838",
        counterpartyName: "John Doe",
        description: "Montly savings dec 20",
      },
    ],
  },
];
