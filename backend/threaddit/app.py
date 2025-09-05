from flask import Flask
from .routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_envvar('APP_CONFIG_FILE', silent=True)
    app.register_blueprint(api_bp)
    return app