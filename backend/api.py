from flask import Flask, request
from bs4 import BeautifulSoup
from flask import Flask 
from flask_cors import CORS, cross_origin 

app = Flask(__name__) 
cors = CORS(app) 
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True

@app.route('/', methods=['POST'])
def html_parser():
    html = request.form.get('html')
    soup = BeautifulSoup(html, 'html.parser')
    
    Uniques = dict()

    for element in soup.find_all():
        if element not in Uniques.keys():
            Uniques[element] = 1
        else:
            if Uniques[element.parent] <= 1:
                Uniques[element] += 1
    response = []
    for key in Uniques.keys():
        if Uniques[key] > 1:
            response.append([str(key), Uniques[key]])
    
    return {"result": response}


app.run()