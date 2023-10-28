import google.generativeai as palm
import os
from dotenv import load_dotenv

load_dotenv()
palm.configure(api_key=os.environ['PALM_API_KEY'])

class TweetService:
    def __init__(self, current_conversation = []) -> None:
        self.current_conversation = current_conversation
        load_dotenv()
        palm.configure(api_key=os.environ['PALM_API_KEY'])

    def new_tweet(self, topic: str = "") -> str:
        """Generate a tweet under 280 characters <about ...> (optional)"""
        response = palm.generate_text(prompt=f"Generate a tweet {topic}")
        return response.candidates[0]['output']
    
    def tweet_reply(self, tweet: str) -> str:
        """Generate a reply tweet to the following tweet: <tweet>"""
        # response = palm.generate_text(prompt=f"Generate a reply to this tweet: '{tweet}'")
        response = palm.chat(messages=[f"Generate a long, genuine, engaging, and thoughtful reply to this tweet: '{tweet}'"])
        return response.candidates[0]['output']