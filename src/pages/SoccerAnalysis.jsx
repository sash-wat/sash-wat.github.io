import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SoccerAnalysis() {
    return (
        <div className="site-shell article-page page-enter">
            <Link to="/projects" className="article-back">
                <ArrowLeft size={18} /> Back to work
            </Link>

            <header className="article-header">
                <p className="eyebrow">Football analytics / research note</p>
                <h1>Scoring matters. But what else makes a forward valuable?</h1>
                <div className="article-byline">
                    <span>Sashwat Venkatesh</span>
                    <span>December 11, 2023</span>
                    <span>10 minute read</span>
                </div>
            </header>

            <article className="article-prose">
                <p>
                    In world football, especially in modern football, nailing transfer business is absolutely an integral part of owning a club. Players like Erling Haaland, Cristiano Ronaldo, and Jude Bellingham are all examples of what a club can get if they accurately value and pay to acquire the best players.
                </p>
                <p>
                    Erling Haaland won the Premier League’s Golden Boot, along with its Most Valuable Player Award, in his first season at Manchester City. Cristiano Ronaldo became a Real Madrid and football legend after being acquired from Manchester United, and Jude Bellingham looks to be the next in line of young talents looking to stamp their mark on history after a summer transfer from Borussia Dortmund to Real Madrid.
                </p>
                <p>
                    But what actually drives a player’s value? For forwards, it must be more than just “how much does a striker score?”, right? As an evolution of my previous piece on transfer value adjustments, I’ve decided to look at what makes forwards valuable in the market.
                </p>

                <div className="article-callout">
                    <strong>The question:</strong> If scoring is only part of a forward&apos;s job, which other on-ball actions help explain their market value?
                </div>

                <p>Some notes before we get started:</p>
                <p>
                    My dataset has (de)-evolved considerably, depending on who you ask. My initial data came entirely from TransferMarkt, an online aggregator of football statistics and player valuations. Now, I’ve added FootballReference’s scouting report data, which provides per90 minute data on players. I chose per90 to add some sort of standardization to the comparisons between players. Inherently, players who score more will have higher per90 goal-scoring statistics, but we shouldn’t penalize players for being efficient subsitutes too.
                </p>
                <p>
                    Furthermore, I’m only looking at present year data. That is to say, the following assumption/consideration is being made: A player’s value (given by TransferMarkt in the summer window of 2023), is an CURRENT AND ACCURATE measurement on which we can make predictions on what contributes to forward player values. For example, Erling Haaland’s current market value is given as €180,000,000, and his scouting report statistics cover his last 365 days of playing. Effectively, we are taking the player’s last year of competition (domestic and national team), and using that to forecast current market value.
                </p>

                <h2>Model building and notes</h2>

                <img src="/blog-images/plot1.png" alt="Variables coefficient plot" />

                <p>
                    We used Elastic Net Regression due to its combination of regularization, as well as its key feature of variable selection. Variable selection in regression models allows us to find the variables/predictors that are most relevant (not equal to 0). The most significant factors driving a forward's value were:
                </p>
                <ul>
                    <li>Non-Penalty xG</li>
                    <li>Non-Penalty Goals</li>
                    <li>Assists</li>
                    <li>Non-Penalty xG + xAG</li>
                    <li>Progressive Carries</li>
                    <li>Touches Attacking Penalty Area</li>
                    <li>Successful Take-Ons</li>
                    <li>Pass Completion %</li>
                    <li>Tackles</li>
                    <li>Blocks</li>
                </ul>
                <p>
                    Interestingly, Tackles and Blocks, two defensive statistics, are negatively correlated with forward value, indicating that forwards who are forced into more defensive actions are likely less valuable than those who participate in their team’s defense less. Depending on your school of thought when it comes to attackers, this can either agree with or go against your valuation of forwards.
                </p>
                <p>
                    Another interesting point are the factors that the model eliminated entirely:
                </p>
                <ul>
                    <li>Total Shots</li>
                    <li>xAG</li>
                    <li>Shot Creating Actions</li>
                    <li>Passes Attempted</li>
                    <li>Progressive Passes</li>
                    <li>Progressive Passes Received</li>
                    <li>Interceptions</li>
                    <li>Clearances</li>
                </ul>
                <p>
                    The model, unsurprisingly, tells us that Non-Penalty xG and Goals are the two most important factors in a forward’s valuation. More surprisingly, though, Progressive Carries and Touches in the Attacking Penalty Area were valued quite highly as well.
                </p>

                <h2>Valuation analysis</h2>
                <p>
                    Roughly, we can take the difference between a player’s market value and predicted value to be either the value added (when the difference is positive) or the undervaluation (when the difference is negative). So when we see:
                </p>
                <ul>
                    <li><strong>Negative differential values:</strong> it means that a player's market value is lower than their predicted value. This would indicate, with some level of confidence, that the player is undervalued.</li>
                    <li><strong>Positive differential values:</strong> it means that a player is either overvalued or has some unquantifiable reasoning behind a higher value.</li>
                </ul>

                <p>
                    We can see that exactly 152 players (over half of the forwards in our dataset) have a negative differential. This indicates that there are a handful of values above the predicted value line that skews the output of the regression.
                </p>

                <img src="/blog-images/plot2.png" alt="Most valuable forwards scatter plot" />

                <p>
                    Looking at our first graph, which plots Non-Penalty Goals against Non-Penalty Expected Goals, scaling point size with market value, we can easily see who our 5 most valuable forwards in the world are.
                </p>
                <ul>
                    <li><strong>Erling Haaland</strong> currently leads a Manchester City team looking to repeat their continental treble from the 2022-23 season, and broke the Premier League’s goalscoring record last year.</li>
                    <li><strong>Kylian Mbappe</strong>, who has been considered by many the heir to the throne of world football, is valued highly as well, tracking with his 4 consecutive French League Golden Boots and back-to-back FIFA World Cup Final appearances.</li>
                    <li><strong>Victor Osimhen</strong>, the Nigerian striker who led Napoli to last year’s Serie A title, finds himself in a similar statistical category as Mbappe and Haaland, with a strong (&gt;1) npG/npxG ratio.</li>
                </ul>

                <img src="/blog-images/plot3.png" alt="Added value dumbbell plot" />

                <p>
                    Rounding out the top six are three other top household-name forwards: Lautaro Martinez, Harry Kane, and Randal Kolo Muani. Interestingly, though, Martinez, Kane, and Kolo Muani all find themselves closer to the larger grouping of forwards in Europe, rather than the clear outliers.
                </p>

                <img src="/blog-images/plot4.png" alt="Forwards who add the most value scatter plot" />

                <p>
                    Looking at forwards that have market values above their predicted value, we see that five of the top six most valuable forwards remain in the top six of the forwards with the most value above prediction. For players like Haaland, Mbappe, and Osimhen, who are talismanic goalscorers, this makes some amount of sense.
                </p>

                <img src="/blog-images/plot5.png" alt="Model warning outputs and final charts" />

                <p>
                    Interestingly, the six forwards present in this group have an average age of 25. In the transfer business, age and future potential (a remarkably hard thing to quantify) play an extremely pivotal role. It is unsurprising that the new addition on this list, Dusan Vlahovic, is 23 years of age, indicating the power of future potential.
                </p>
            </article>
        </div>
    );
}
