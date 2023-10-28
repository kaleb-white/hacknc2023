import google.generativeai as palm
import os
from dotenv import load_dotenv

load_dotenv()

palm.configure(api_key=os.environ['PALM_API_KEY'])

response = palm.generate_text(prompt="Give a positive reply to this tweet in 140 characters or less: I am happy to announce that I am going to be working for NASA this summer!")
print(response.result)