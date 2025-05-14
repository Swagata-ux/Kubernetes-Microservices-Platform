from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/inventory")
def inventory():
    return jsonify({"items": [{"id": 1, "name": "Widget", "stock": 100}]})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6000)
