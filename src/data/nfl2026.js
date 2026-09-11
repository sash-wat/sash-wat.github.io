export const nfl2026Games = [
    {
        id: 'week-1-patriots-seahawks',
        week: 1,
        date: 'September 9, 2026',
        label: 'NFL Kickoff',
        venue: 'Lumen Field',
        result: {
            away: { name: 'New England Patriots', shortName: 'Patriots', score: 10, record: '0–1' },
            home: { name: 'Seattle Seahawks', shortName: 'Seahawks', score: 13, record: '1–0' },
        },
        teams: {
            patriots: {
                name: 'New England Patriots',
                record: '0–1',
                pointDifferential: -3,
                yardsPerPlay: 4.1,
                opponentYardsPerPlay: 5.9,
                thirdDown: '31.3%',
                turnoverMargin: -3,
                redZone: '1 / 2',
                profile: 'Efficient underneath, volatile when chasing explosives.',
                nextQuestion: 'Can the offense create chunk plays without asking Maye to force them?',
            },
            seahawks: {
                name: 'Seattle Seahawks',
                record: '1–0',
                pointDifferential: 3,
                yardsPerPlay: 5.9,
                opponentYardsPerPlay: 4.1,
                thirdDown: '18.2%',
                turnoverMargin: 3,
                redZone: '0 / 2',
                profile: 'A defense capable of carrying a stalled offense until one play breaks the game open.',
                nextQuestion: 'How much of the offense survives if Sam Darnold misses time?',
            },
        },
    },
];

export const kickoffGame = nfl2026Games[0];
