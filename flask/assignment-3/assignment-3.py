
from flask import Flask, request, jsonify
import json

app = Flask(__name__)


@app.route("/add")
def add_word():

    en = request.args.get("en")
    fi = request.args.get("fi")

    if not en or not fi:
        return jsonify({
            "error": "Both English and Finnish words are required"
        }), 400

    en = en.lower()

    # Read the dictionary from the JSON file
    with open("dictionary.json", encoding="utf-8") as file:
        dictionary = json.load(file)

    # Add the new word
    dictionary[en] = fi

    # Save the updated dictionary
    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)

    return jsonify({
        "English": en,
        "Finnish": fi,
        "message": "Word added successfully"
    })


if __name__ == "__main__":
    app.run(port=3000, debug=True)
