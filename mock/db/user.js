const user = {
    id: '1',
    token: '12345',
    budgets: [
        {
            id: '1',
            period: 2022,
            entries: {
                expenses: [
                    {
                        id: '1',
                        label: 'Rent',
                        amount: 1378,
                        date: new Date('2022-01-01'),
                    }
                ],
                incomes: [
                    {
                        id: '1',
                        label: 'Salary',
                        amount: 1378,
                        date: new Date('2022-01-01'),
                    }
                ]
            }
        }
    ]
}


export default user