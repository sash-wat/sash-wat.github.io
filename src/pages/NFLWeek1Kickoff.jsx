import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { kickoffGame } from '../data/nfl2026';

const mayeStats = [
    { value: '23 / 33', label: 'Completions / attempts' },
    { value: '178', label: 'Passing yards' },
    { value: '1 / 3', label: 'TD / INT' },
    { value: '54.9', label: 'Passer rating' },
];

const teamMetricLabels = [
    ['Yards / play', 'yardsPerPlay'],
    ['Allowed / play', 'opponentYardsPerPlay'],
    ['Third down', 'thirdDown'],
    ['Turnover margin', 'turnoverMargin'],
    ['Red zone', 'redZone'],
];

function TeamLedger({ team, tone }) {
    return (
        <section className={`nfl-team-ledger nfl-team-ledger--${tone}`}>
            <div className="nfl-ledger-heading">
                <div>
                    <p className="eyebrow">Week 1 profile</p>
                    <h3>{team.name}</h3>
                </div>
                <span>{team.record}</span>
            </div>

            <dl className="nfl-ledger-metrics">
                {teamMetricLabels.map(([label, key]) => (
                    <div key={key}>
                        <dt>{label}</dt>
                        <dd>{team[key] > 0 && key === 'turnoverMargin' ? '+' : ''}{team[key]}</dd>
                    </div>
                ))}
            </dl>

            <p className="nfl-profile-line"><strong>Current read:</strong> {team.profile}</p>
            <p className="nfl-profile-line"><strong>Next question:</strong> {team.nextQuestion}</p>
        </section>
    );
}

export default function NFLWeek1Kickoff() {
    const { result, teams } = kickoffGame;

    return (
        <div className="site-shell article-page nfl-article page-enter">
            <Link to="/writing" viewTransition className="article-back">
                <ArrowLeft size={18} /> Back to writing
            </Link>

            <header className="article-header nfl-article-header">
                <p className="eyebrow">NFL Week 1 / field notes</p>
                <h1>Drake Maye’s opener wasn’t bad. His ending was.</h1>
                <p className="nfl-deck">
                    New England’s quarterback spent three quarters taking the easy answer. Then he tried to
                    solve the entire game with three throws—and Seattle made him pay for every one.
                </p>
                <div className="article-byline">
                    <span>Sashwat Venkatesh</span>
                    <span>September 11, 2026</span>
                    <span>Week 1 · Game 1 of 16</span>
                </div>
            </header>

            <section className="nfl-scoreboard" aria-label="Final score">
                <div className="nfl-scoreboard-meta">
                    <span>{kickoffGame.label}</span>
                    <span>{kickoffGame.date}</span>
                    <span>{kickoffGame.venue}</span>
                </div>
                <div className="nfl-score-row">
                    <div>
                        <span className="nfl-team-mark nfl-team-mark--ne" aria-hidden="true">NE</span>
                        <p><strong>{result.away.shortName}</strong><small>{result.away.record}</small></p>
                    </div>
                    <strong className="nfl-score">{result.away.score}</strong>
                </div>
                <div className="nfl-score-row nfl-score-row--winner">
                    <div>
                        <span className="nfl-team-mark nfl-team-mark--sea" aria-hidden="true">SEA</span>
                        <p><strong>{result.home.shortName}</strong><small>{result.home.record}</small></p>
                    </div>
                    <strong className="nfl-score">{result.home.score}</strong>
                </div>
                <p className="nfl-scoreboard-note">Final · Seattle scored all 13 points after halftime</p>
            </section>

            <article className="article-prose nfl-prose">
                <p>
                    The box score is brutal enough to tempt a simple conclusion: Drake Maye was bad. Three
                    interceptions, a 54.9 passer rating, and ten points in a 13–10 loss will do that. But the
                    more useful version is narrower. Maye was good while he accepted Seattle’s terms, and
                    disastrous the moment he decided patience was no longer enough.
                </p>

                <div className="nfl-stat-ribbon" aria-label="Drake Maye game statistics">
                    {mayeStats.map((stat) => (
                        <div key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>

                <h2>The patient version worked</h2>
                <p>
                    Maye entered halftime 10-of-12 for 66 yards, a touchdown, and a 117.4 rating. New England
                    led 7–0, then stretched that advantage to 10–0 early in the third quarter. The offense was
                    not explosive, but it was functional: short throws, checkdowns, Maye’s legs, and just enough
                    help from Seattle penalties to keep drives alive.
                </p>
                <p>
                    That matters because the first half is evidence against the idea that Maye simply looked
                    lost. On throws under ten air yards, he finished 20-of-23 for 134 yards and a touchdown. The
                    underneath answers were there all night. New England held the ball for 34:17 and produced 19
                    first downs. It had a path to winning an ugly game.
                </p>

                <aside className="article-callout nfl-callout">
                    <span>The hinge</span>
                    <strong>Maye went 0-for-4 with three interceptions on passes of 20-plus air yards.</strong>
                    <p>The issue was not whether he could complete the easy throws. It was knowing when the hard throw was worth attempting.</p>
                </aside>

                <h2>Three throws rewrote the night</h2>
                <p>
                    The Patriots’ final three possessions all ended the same way. First, Maye trusted his arm
                    into a closing window down the left sideline. Then he forced a seam ball that Julian Love
                    read cleanly. Finally, after calmly moving New England into field-goal range, he drifted from
                    pressure and floated a pass toward Mack Hollins in the end zone. Josh Jobe intercepted it
                    with 21 seconds left.
                </p>
                <p>
                    That last decision is the one worth carrying forward. New England was already at the Seattle
                    16. A field goal could have forced overtime; a throwaway preserved the next snap. Maye later
                    called the play “unacceptable” and said he had stopped being patient. That diagnosis fits the
                    tape and the numbers better than a broad panic about his ability.
                </p>
                <p>
                    It also keeps the Week 1 lesson appropriately small. This was a decision-making collapse,
                    not proof that last season’s MVP runner-up has suddenly lost his accuracy. But it is now a
                    live pressure point: Seattle’s coverage structures and simulated pressure bothered him in
                    the Super Bowl, and the same opponent coaxed him into the same kind of impatience seven months
                    later.
                </p>

                <h2>Seattle won like Seattle</h2>
                <p>
                    The Seahawks’ offense spent most of banner night going nowhere. Sam Darnold left after five
                    plays with a hip injury. Drew Lock inherited the game, Seattle went scoreless in the first
                    half, and the offense converted only two of eleven third downs.
                </p>
                <p>
                    None of that broke the defending champions’ basic formula. The defense kept the score within
                    reach, took the ball away when Maye became aggressive, and handed Lock short fields. Lock’s
                    45-yard fourth-down touchdown to Jaxon Smith-Njigba supplied the one explosive play Seattle
                    needed; Smith-Njigba finished with eight catches for 122 yards, while Lock quietly completed
                    16 of 22 passes for 187 yards and no turnovers.
                </p>
                <p>
                    Seattle gained only eight more yards than New England, ran 19 fewer offensive plays, and lost
                    the time-of-possession battle by more than eight minutes. It still won because its best unit
                    owned the highest-leverage snaps. That is not a complete offensive profile yet. It is a very
                    recognizable defensive one.
                </p>

                <h2>The first entries in the ledger</h2>
                <p>
                    This series will treat every game as evidence, not a verdict. The numbers below are the Week 1
                    baseline; each team’s profile should become harder to fool as the season accumulates.
                </p>
            </article>

            <div className="nfl-ledger-grid" data-reveal>
                <TeamLedger team={teams.patriots} tone="patriots" />
                <TeamLedger team={teams.seahawks} tone="seahawks" />
            </div>

            <section className="article-prose nfl-prose nfl-closing">
                <h2>What I’m watching next</h2>
                <p>
                    For New England: whether explosive passes can emerge from the structure of the offense rather
                    than from Maye trying to manufacture them, and how A.J. Brown’s ankle changes that equation.
                    For Seattle: whether the defense can continue masking an offense that generated only 285 yards,
                    especially if Darnold misses time.
                </p>
                <p>
                    The first game of a season should change a prior, not replace it. My Patriots prior is dented
                    at quarterback decision-making, not broken. My Seattle prior is almost untouched: the defense
                    remains the reason every opponent has to play a nearly perfect fourth quarter.
                </p>

                <div className="nfl-sources">
                    <p className="eyebrow">Sources &amp; method</p>
                    <p>
                        Game and team statistics come from the official{' '}
                        <a href="https://static.clubs.nfl.com/image/upload/patriots/lmdmzornxr5pgi90xvmi.pdf" target="_blank" rel="noreferrer">
                            NFL gamebook <ArrowUpRight size={15} />
                        </a>. Passing-depth splits and the play descriptions were cross-checked against{' '}
                        <a href="https://www.nfl.com/news/patriots-seahawks-in-2026-nfl-kickoff-game-what-we-learned-from-seattle-s-13-10-win" target="_blank" rel="noreferrer">
                            NFL.com’s recap <ArrowUpRight size={15} />
                        </a>{' '}and the{' '}
                        <a href="https://apnews.com/article/patriots-seahawks-score-9f41059f1e5fa19f70eb94929b401d54" target="_blank" rel="noreferrer">
                            Associated Press report <ArrowUpRight size={15} />
                        </a>. Team profiles are my interpretation of that evidence and will evolve weekly.
                    </p>
                </div>
            </section>
        </div>
    );
}
