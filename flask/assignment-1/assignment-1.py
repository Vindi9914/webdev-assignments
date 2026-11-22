from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/prime_number/<number>')
def check_prime(number):
    num = int(number)
    is_prime = True

    if num < 2:
        is_prime = False
    else:
        for i in range(2, num):
            if num % i == 0:
                is_prime = False
                break

    return jsonify({
        "Number": num,
        "isPrime": is_prime
    })

if __name__ == '__main__':
    app.run(port=3000)