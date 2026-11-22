import json
from pathlib import Path
from flask import Flask, Response, jsonify

app = Flask(__name__)

DICTIONARY_PATH = Path(__file__).resolve().parent / "dictionary.json"


def load_dictionary() -> dict[str, str]:
    with DICTIONARY_PATH.open(encoding="utf-8") as file:
        raw_data = json.load(file)
  
    return {str(k).lower(): str(v) for k, v in raw_data.items()}


@app.route("/translate/<word>", methods=["GET"])
def translate(word: str):
    dictionary = load_dictionary()
    lookup_key = word.lower()

    if lookup_key in dictionary:
        return jsonify({
            "English": word,
            "Finnish": dictionary[lookup_key],
        })

    error_payload = {"error": "Word not found"}
    return Response(
        response=json.dumps(error_payload, ensure_ascii=False),
        status=404,
        mimetype="application/json",
    )


@app.route("/words", methods=["GET"])
def words():
    dictionary = load_dictionary()
    return jsonify(list(dictionary.keys()))


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)