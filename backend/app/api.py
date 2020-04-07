from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from scrapper.scrapper import *

app = Flask(__name__)
api = Api(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@api.resource("/api")
class Test(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("url")
        args = parser.parse_args()
        download_urls = get_download_urls(args["url"])
        return download_urls


if __name__ == "__main__":
    app.run(debug=True)
