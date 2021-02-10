[
    {
        name: 'can view the goal',
        user: 'Michael Scott',
        context: {
            goalID: ['goal', 'name', 'Marketing campaign to drive more sales'],
        },
        actions: [
            {
                type: 'view',
                url   : '/goal/:goalID/',
            }
        ],
    },
    {
        name: 'can archive a goal',
        user: 'Michael Scott',
        context: {
            goalID: ['goal', 'name', 'Marketing campaign to drive more sales'],
        },
        actions: [
            {
                type: 'request',
                url   : '/api/v0.1/goals/:goalID/',
                method: 'POST',
                body  : {
                    status: 'archived',
                },
                expectedStatus: 200,
            }
        ],
    },
]