

let filter4 = {
  where: {
    and: [
      {
        status: 'waitVerify'
      },
      {
        or: [
          { checkApplication: 'ไม่มี' },
          { checkApplication: null },
          { checkCitizenCard: 'ไม่มี' },
          { checkCitizenCard: null },
          { checkPayslip: 'ไม่มี' },
          { checkPayslip: null },
          { checkBankStatement: 'ไม่มี' },
          { checkBankStatement: null }
        ]
      },
      {
        createdDate: {
          between: [
            '2017-09-14T00:00:00.000Z',
            '2017-09-21T24:00:00.000Z'
          ]
        }
      }
    ]
  }
}
 JSON.stringify(filter4)