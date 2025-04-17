from flask import Blueprint, jsonify

api = Blueprint("api", __name__)

@api.get("/clubs")
def get_clubs():
    return jsonify([
        {
            "name": 'Hiking Club',
            "description": 'Join us for weekly hikes in the beautiful parks around Michigan!',
            "meetingTime": 'Saturdays at 10am',
            "contact": 'john@hikingclub.com'
        },
        {
            "name": 'Book Club',
            "description": 'We meet monthly to discuss a selected book across various genres.',
            "meetingTime": 'First Tuesday of every month, 7pm',
            "contact": 'emily@bookclub.com'
        },
        {
            "name": 'Photography Club',
            "description": 'Share your passion for photography and improve your skills.',
            "meetingTime": 'Every other Sunday, 2pm',
            "contact": 'alex@photographyclub.com'
        }
    ]), 200