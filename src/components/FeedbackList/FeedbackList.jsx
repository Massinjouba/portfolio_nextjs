import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [updatedFeedback, setUpdatedFeedback] = useState('');
  const [updatedRating, setUpdatedRating] = useState(0);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('/api/getFeedbacks');
        setFeedbackData(response.data);
      } catch (error) {
        setError('Error fetching feedbacks');
        console.error('Error fetching feedbacks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>); // Étoile pleine
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Étoile vide
      }
    }
    return <span className="stars">{stars}</span>;
  };

  const handleEdit = (feedback) => {
    setEditingFeedback(feedback.id);
    setUpdatedFeedback(feedback.feedback);
    setUpdatedRating(feedback.rating);
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/updateFeedback', {
        id: editingFeedback,
        feedback: updatedFeedback,
        rating: updatedRating,
      });
      setFeedbackData((prevData) =>
        prevData.map((item) =>
          item.id === editingFeedback
            ? { ...item, feedback: updatedFeedback, rating: updatedRating }
            : item
        )
      );
      setEditingFeedback(null);
    } catch (error) {
      console.error('Error updating feedback:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('/api/deleteFeedback', { data: { id } });
      setFeedbackData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='feed-container'>
      <h5 className='my-page'>Feedbacks</h5>
      <div className="feedback-container">
        <ul>
          {[...feedbackData].reverse().map((item, index) => (
            <li key={index} className={`feedback-item ${user && user.id === item.userId ? 'highlight' : ''}`}>
              {editingFeedback === item.id ? (
                <>
                  <textarea
                    value={updatedFeedback}
                    onChange={(e) => setUpdatedFeedback(e.target.value)}
                  />
                  <input
                    type="number"
                    value={updatedRating}
                    onChange={(e) => setUpdatedRating(Number(e.target.value))}
                    min="0"
                    max="5"
                  />
                  <button onClick={handleSave} className='crud-btn'>Save</button>
                  <button onClick={() => setEditingFeedback(null)} className='crud-btn'>Cancel</button>
                </>
              ) : (
                <>
                  <div className="feedback-header">
                    <h2
                      className={`user-name ${user && user.id === item.userId ? 'current-user' : ''}`}
                      onClick={user && user.id === item.userId ? () => handleEdit(item) : null}
                    >
                      {item.User.name} 
                      {user && user.id === item.userId && <span className="green-dot"></span>}
                    </h2>
                    <p>{renderStars(item.rating)}</p>
                  </div>
                  <p className='comment'>{item.feedback}</p>
                  {user && user.id === item.userId && (
                    <div className='crud-container'>
                      <button onClick={() => handleEdit(item)} className='crud-btn'>Edit</button>
                      <button onClick={() => handleDelete(item.id)} className='crud-btn'>Delete</button>
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FeedbackList.propTypes = {
  feedbackData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      User: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      feedback: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
