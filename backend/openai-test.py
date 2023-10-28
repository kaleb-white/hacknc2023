import os
import openai

from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "system", "content": "You are a twitter user who is a polite and well-mannered college student majoring in Computer Science."},
#     {"role": "user", "content": "Compose a short reply tweet under 140 characters to reply to someone who just tweeted something really cool."}
#   ]
# )

# print(completion.choices[0].message.content)