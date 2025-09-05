from flask import Blueprint, request, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

# Add authentication, CRUD, etc. here 