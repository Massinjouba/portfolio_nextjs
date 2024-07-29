import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import axios from 'axios';

const Popup = ({ setIsOpenPopup }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [name, setName] = useState('');

  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
    }
  }, [user]);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const getRatingMessage = () => {
    switch (rating) {
      case 1:
        return "😡 I just hate it";
      case 2:
        return "😞 I don't like it";
      case 3:
        return "😊 It is awesome";
      case 4:
        return "🙂 I just like it";
      case 5:
        return "😍 I just love it";
      default:
        return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !feedback || !rating) {
      setShowAlert(true);
      return;
    }

    const newFeedback = {
      userId: user.id,
      rating,
      feedback
    };

    try {
      const response = await axios.post('/api/saveFeedback', newFeedback);

      if (response.status === 201) {
        alert('Feedback saved successfully');
        setIsOpenPopup(false); // Fermer la popup après l'enregistrement réussi
      } else {
        alert('Failed to save feedback');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save feedback');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="popup-background" onClick={() => setIsOpenPopup(false)}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="container">
            <h5 className="rate">You need to be logged in to provide feedback</h5>
            <Link href="/login">
              <div className="link-button">Login</div>
            </Link>
            <Link href="/signup">
              <div className="link-button">Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-background" onClick={() => setIsOpenPopup(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <h5 className="rate">Rate me!</h5>
          <div className="star-widget">
            <input type="radio" name="rate" id="rate-5" onChange={() => handleRating(5)} />
            <label htmlFor="rate-5" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rate-4" onChange={() => handleRating(4)} />
            <label htmlFor="rate-4" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rate-3" onChange={() => handleRating(3)} />
            <label htmlFor="rate-3" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rate-2" onChange={() => handleRating(2)} />
            <label htmlFor="rate-2" className="fas fa-star"></label>
            <input type="radio" name="rate" id="rate-1" onChange={() => handleRating(1)} />
            <label htmlFor="rate-1" className="fas fa-star"></label>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <header>{getRatingMessage()}</header>
              <input 
                className='nom-user'
                type="text" 
                placeholder="Complete name" 
                value={name}
                readOnly
              />
              <div className="textarea">
                <textarea 
                  cols="30" 
                  rows="5" 
                  placeholder="Write your feedback here..." 
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
              <div className="btn">
                <button type="submit">Post</button>
              </div>
            </form>
            {showAlert && (
              <div className="alert">
                Please fill in all fields and select a rating.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  setIsOpenPopup: PropTypes.func.isRequired
};

export default Popup;
