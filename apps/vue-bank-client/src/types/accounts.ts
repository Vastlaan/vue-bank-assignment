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
