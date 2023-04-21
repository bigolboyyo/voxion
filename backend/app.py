import os
import openai
import spacy

import pdb

from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()
nlp = spacy.load("en_core_web_sm")

api_key = os.environ.get('OPENAI_API_KEY')

openai.api_key = api_key

app = Flask(__name__)

@app.route('/completions', methods=['POST'])
def generate_completion():

    data = request.get_json()
    
    prompt = data['prompt']
    doc = nlp(prompt)
    tokens = [token.text for token in doc]
    prompt = ' '.join(tokens[:-1])
    
    model = data.get('model', 'text-davinci-002')
    max_tokens = data.get('max_tokens', 64)
    temperature = data.get('temperature', 0.5)

    response = openai.Completion.create(
        engine=model,
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=temperature,
        n=1
    )
    
    return jsonify({
        'text': response.choices[0].text,
        'metadata': {
            'model': model,
            'max_tokens': max_tokens,
            'temperature': temperature
        }
    })

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run()