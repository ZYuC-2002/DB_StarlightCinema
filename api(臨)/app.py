from flask import Flask, request, jsonify
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')
CORS(app)

# 儲存接收到的數據
stored_data = []

@app.route('/', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'POST':
        data = request.json
        movie_name = data.get("movie_name", "")
        # 將數據追加到全局變數
        stored_data.append({
            "email_account": data.get("email_account", ""),
            "user_name": data.get("user_name", ""),
            "birth": data.get("birth", ""),
            "phonenumb": data.get("phonenumb", ""),
            "user_pic": data.get("user_pic", ""),
        })
        return jsonify({"ok": 1, "message": "Data received and stored successfully"})

    return jsonify(stored_data)

if __name__ == '__main__':
    app.run(debug=True)