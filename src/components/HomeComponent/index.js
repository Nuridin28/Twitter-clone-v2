import React from 'react';
import NewTweet from './NewTweet';
import TweetsList from './TweetsList';
import Search from '../RightSideMenuComponents/SearchComponent/Search';
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from './images';

class Home extends React.Component {
  constructor() { 
    super();
    this.state = {
      content: '',
      searchQuery: '',
      selectedTopic: '',
      tweets: [
        {
          id: 0,
          authorName: 'Free KZ today',
          authorUsername: '@kz',
          img: KZ_IMG_PATH,
          content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
          replies: 200,
          retweets: 1000,
          likes: 500,
          topic: 'politics',
        },
        {
          id: 1,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Data analytics course starts today!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education',
        },
        {
          id: 2,
          authorName: 'nFactorial',
          authorUsername: '@nfactorial',
          img: NFACTORIAL_IMG_PATH,
          content: 'Black Friday! Успей купить курсы сегодня!',
          replies: 10000000,
          retweets: 1000000,
          likes: 500,
          topic: 'education',
        },
      ],
    };
  }

  onChangeTextInput = (e) => {
    this.setState({ content: e.target.value });
  };

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: 'Aruzhan',
      authorUsername: '@azhaubassar',
      img: PROFILE_IMG_PATH,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      topic: 'blabla',
    };

    this.setState({
      tweets: [...this.state.tweets, newTweet],
      content: '',
    });
  };

  deleteTweet = (id) => {
    this.setState({
      tweets: this.state.tweets.filter((item) => item.id !== id),
    });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  filterTweetsByTopic = (topic) => {
    this.setState({ selectedTopic: topic });
  };

  render() {
    const { tweets, content, searchQuery, selectedTopic } = this.state;

    const filteredTweets = tweets.filter(
      (tweet) =>
        tweet.content.toLowerCase().includes(searchQuery) &&
        (selectedTopic === '' || tweet.topic === selectedTopic)
    );

    return (
      <div className="d-flex">
        <div className="w-70 mt-3">
          <h5 className="mx-3">Home</h5>
          <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets} />
          {/* <div>
            <button onClick={() => this.filterTweetsByTopic('politics')}>Politics</button>
            <button onClick={() => this.filterTweetsByTopic('education')}>Education</button>
            <button onClick={() => this.filterTweetsByTopic('blabla')}>Blabla</button>
            <button onClick={() => this.filterTweetsByTopic('')}>All</button>
          </div> */}
          <TweetsList tweets={filteredTweets} deleteTweet={this.deleteTweet} />
        </div>
        <div className="mt-3">
          <Search onSearchChange={this.handleSearchChange} />
        </div>
      </div>
    );
  }
}

export default Home;
