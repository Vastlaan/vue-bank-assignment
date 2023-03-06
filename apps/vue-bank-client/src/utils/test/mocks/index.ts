import type { Account, Transaction } from '@/types'

export const mockAccountDetails: Account = {
  accountNumberType: 'IBAN',
  accountNumber: 'NL18ABNA5476393838',
  productName: 'Current Account',
  currencyCode: 'EUR',
  holderName: 'John Doe',
  bankCountryCode: 'BE',
  bankIdentifierCode: 'ZYABBE20',
  balance: 7500.39
}
export const mockAccountGroup = {
  groupName: 'Current Accounts',
  groupId: 'current',
  accounts: [
    {
      accountNumberType: 'IBAN',
      accountNumber: 'NL18ABNA5476393838',
      productName: 'Current Account',
      currencyCode: 'EUR',
      holderName: 'John Doe',
      bankCountryCode: 'BE',
      bankIdentifierCode: 'ZYABBE20',
      balance: 7500.39
    }
  ]
}

export const mockTransaction: Transaction = {
  transactionId: '193576407479242.040002',
  bookDate: '2020-12-30',
  transactionDateTime: '2020-12-29T22:00:00Z',
  creditDebitIndicator: 'CREDIT',
  amount: 850.0,
  counterpartyAccountNumber: 'NL53INGB6653222179',
  counterpartyName: 'Tennant 1',
  description: 'Rent Dec 2020'
}

export const mockTransactionSecondary: Transaction = {
  transactionId: '193576407479242.040002',
  bookDate: '2020-12-30',
  transactionDateTime: '2020-12-29T22:11:00Z',
  creditDebitIndicator: 'DEBIT',
  amount: 250.0,
  counterpartyAccountNumber: 'NL53INGB6653222111',
  counterpartyName: 'Tennant 2',
  description: 'Games Dec 2020'
}
