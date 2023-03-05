export interface AccountsData {
  data: AccountGroups
}
export interface Account {
  accountNumberType: string
  accountNumber: string
  productName: string
  currencyCode: string
  holderName: string
  bankCountryCode: string
  bankIdentifierCode: string
  balance?: number
  bookBalance?: number
}

export interface AccountGroup {
  groupName: string
  groupId: string
  accounts: Account[]
}

export interface AccountGroups {
  accountGroups: AccountGroup[]
}

export interface Transaction {
  transactionId: string
  bookDate: string
  transactionDateTime: string
  creditDebitIndicator: 'DEBIT' | 'CREDIT'
  amount: number
  counterpartyAccountNumber: string
  counterpartyName: string
  description: string
}

export interface AccountAttributes {
  accountDetails: Account
  accountTransactions: Transaction[]
}

export interface AccountDetailsItem {
  label: string
  value: string | number | undefined
}
