from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User, GameState, Reward
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['JWT_SECRET_KEY'] = 'super-secret-key'
db.init_app(app)
jwt = JWTManager(app)

@app.before_first_request
def create_tables():
    db.create_all()

# ---------------- USER KI DETAILS ----------------

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    hashed_pw = generate_password_hash(data['password'])
    new_user = User(name=data['name'], email=data['email'], password=hashed_pw, grade=data['grade'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(message="User registered successfully"), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        token = create_access_token(identity=user.id)
        return jsonify(token=token), 200
    return jsonify(message="Invalid credentials"), 401

# ---------------- GAME KI  STATE ----------------

@app.route('/api/game/start', methods=['POST'])
@jwt_required()
def start_game():
    user_id = get_jwt_identity()
    new_state = GameState(user_id=user_id, level=1, score=0, time_spent="00:00")
    db.session.add(new_state)
    db.session.commit()
    return jsonify(message="Game started"), 201

@app.route('/api/game/progress', methods=['PUT'])
@jwt_required()
def update_progress():
    user_id = get_jwt_identity()
    data = request.json
    state = GameState.query.filter_by(user_id=user_id).first()
    state.level = data['level']
    state.score = data['score']
    state.time_spent = data['timeSpent']
    db.session.commit()
    return jsonify(message="Progress updated"), 200

@app.route('/api/game/state', methods=['GET'])
@jwt_required()
def get_state():
    user_id = get_jwt_identity()
    state = GameState.query.filter_by(user_id=user_id).first()
    return jsonify(level=state.level, score=state.score, timeSpent=state.time_spent), 200

# ---------------- AI INTERACTION (Mock) ----------------

@app.route('/api/ai/question', methods=['POST'])
@jwt_required()
def get_question():
    return jsonify(questionId="Q123", question="What is 7 x 8?", difficulty="easy"), 200

@app.route('/api/ai/feedback', methods=['POST'])
@jwt_required()
def feedback():
    data = request.json
    # In real case, AI would evaluate response
    return jsonify(correct=True, score=10), 200

# ---------------- SARE REWARDS KE BARE ME ----------------

@app.route('/api/rewards', methods=['GET'])
@jwt_required()
def get_rewards():
    user_id = get_jwt_identity()
    reward = Reward.query.filter_by(user_id=user_id).first()
    if reward:
        return jsonify(coins=reward.coins, badges=reward.badges.split(',')), 200
    return jsonify(coins=0, badges=[]), 200

@app.route('/api/rewards/claim', methods=['POST'])
@jwt_required()
def claim_reward():
    user_id = get_jwt_identity()
    reward = Reward.query.filter_by(user_id=user_id).first()
    if not reward:
        reward = Reward(user_id=user_id, coins=50, badges="First Win")
        db.session.add(reward)
    else:
        reward.coins += 50
        badges = reward.badges.split(',')
        if "First Win" not in badges:
            badges.append("First Win")
        reward.badges = ','.join(badges)
    db.session.commit()
    return jsonify(message="Reward claimed"), 200

if __name__ == '__main__':
    app.run(debug=True)
