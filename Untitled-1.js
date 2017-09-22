

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
    ]
  }
}
 JSON.stringify(filter4)