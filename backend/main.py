from fastapi import FastAPI
from tweetservice import TweetService

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/aitweets")
async def get_ai_tweet(topic: str = "", tweet_service = TweetService()):
    return tweet_service.new_tweet(topic)

@app.get("/aitweet_replies")
async def get_ai_tweet(tweet: str, tweet_service = TweetService()):
    return tweet_service.new_tweet(tweet)