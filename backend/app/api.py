from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

todos = {}


@api.resource("/<string:todo_id>")
class Hello(Resource):
    def get(self, todo_id):
        return {todo_id: todos[todo_id]}

    def put(self, todo_id):
        todos[todo_id] = request.form["data"]
        return {todo_id: todos[todo_id]}


if __name__ == "__main__":
    app.run(debug=True)
