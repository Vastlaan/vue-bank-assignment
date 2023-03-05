import { describe, expect, it } from 'vitest'
import useTransactions from '../useTransactions'
import { mockTransaction, mockTransactionSecondary } from '@/utils/test/mocks'

describe('useTransactions', () => {
  it('properly returned grouped transactions', async () => {
    const result = useTransactions([mockTransaction, mockTransactionSecondary])

    expect(result.groupedTransactions.value).toStrictEqual({
      '2020-12-30': [
        {
          transactionId: '193576407479242.040002',
          bookDate: '2020-12-30',
          transactionDateTime: '2020-12-29T22:00:00Z',
          creditDebitIndicator: 'CREDIT',
          amount: 850,
          counterpartyAccountNumber: 'NL53INGB6653222179',
          counterpartyName: 'Tennant 1',
          description: 'Rent Dec 2020'
        },
        {
          transactionId: '193576407479242.040002',
          bookDate: '2020-12-30',
          transactionDateTime: '2020-12-29T22:11:00Z',
          creditDebitIndicator: 'DEBIT',
          amount: 250,
          counterpartyAccountNumber: 'NL53INGB6653222111',
          counterpartyName: 'Tennant 2',
          description: 'Games Dec 2020'
        }
      ]
    })
  })

  it('properly returned grouped transactions keys', async () => {
    const result = useTransactions([mockTransaction, mockTransactionSecondary])

    expect(result.groupedTransactionsKeys.value).toStrictEqual(['2020-12-30'])
  })
})
