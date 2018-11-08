
class TweetIndex extends React.Component {

    render() {

        let tweets = this.props.tweets.map( (tweet, index) => {

            // return <ListItem key={index} index={index} tweet={tweet} />;
            return <Tweet tweet={tweet} />;
        });

        return (

            <div>

                <h1>Tweet-Index</h1>
                <h3>Kanye West</h3>
                <nav>
                    <a href="#"> Tweets</a> |
                    <a href="#"> Tweets & replies</a> |
                    <a href="#"> Media</a> |
                    <a href="#"> Likes</a>
                </nav>

                <ul>
                    {tweets}
                </ul>

            </div>
        );
    };
};


class Tweet extends React.Component {

    render() {
        return (
            <li>
                <div>
                    <User user={this.props.tweet.user} />
                    <span> | {this.props.tweet.created_at}</span>
                </div>
                <div>
                    {this.props.tweet.text}
                </div>

                <BottomBar tweet={this.props.tweet} />
                <br />
            </li>
        );
    };
};


class User extends React.Component {

    render() {

        return (

            <span>
                <strong>{this.props.user.name}</strong> @{this.props.user.screen_name}
            </span>
        );
    };
};


class BottomBar extends React.Component {

    render() {

        return (

            <div>
                <span>[Comment count] | </span>
                <span>{this.props.tweet.retweet_count} retweets | </span>
                <span>{this.props.tweet.favorite_count} comments</span>
            </div>
        );
    };
};

ReactDOM.render (
    <TweetIndex tweets={tweets} />,
    document.getElementById('root')
);















