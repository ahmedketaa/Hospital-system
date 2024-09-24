import React, { useState, useRef } from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { Modal } from 'react-bootstrap';
import { GiWallet } from 'react-icons/gi';
import { FaRegCreditCard } from 'react-icons/fa';
import { SiVodafone } from 'react-icons/si';
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { Toast } from 'primereact/toast';
import styles from './Donation.module.css'; 
import useAuth from '../hooks/useAuth';
import axios from 'axios';


function Donation() {
  const [showModal, setShowModal] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const toast = useRef(null);
  let { auth, setAuth } = useAuth();

  const stripe = useStripe();
  const elements = useElements();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentSuccess(false);
    setStripeError(null);
  };

  const handleStripePayment = async (event) => {
    let token = auth?.user?.token;

    event.preventDefault();
    // Check if donation amount is provided
    if (!donationAmount) {
      toast.current.show({
        severity: "warn",
        summary: "Warning",
        detail: "Please enter a donation amount.",
        life: 3000,
      });
      return;
    }

    
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setStripeError(error.message);
      } else {
        setPaymentSuccess(true);
        toast.current.show({
          severity: "success",
          summary: "Thank you for your donation!",
          detail: `You have donated by ${donationAmount} successfully!`,
          life: 3000,
        });
        setDonationAmount("")
        setTimeout(handleCloseModal, 4000); 
        if(token){
          updateDonationAmount(donationAmount)
        }
      }
    }
  };

// handle donation for logged patient
const updateDonationAmount = async (donationAmount) => {
  let token = auth?.user?.token;
  try {
    const response = await axios.post(
      `http://localhost:5000/api/patient/updateDonation/${token}`, 
      { donationAmount } 
    );
    console.log(response);

  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err);
      
      let { message } = err.response.data;
      console.log(message);
      
    }
  }
};


  return (
    <div className={`text-center ${styles.donationWrapper}`}>
      <BiSolidDonateHeart
        className={styles.donateIcon}
        onClick={handleOpenModal}
      />
      <p className={styles.donateText}>Donate For Us</p>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Donate to Support Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <img src="/donate.jpeg" alt="Donation" className={styles.donationImage} />
          </div>
          <p className="text-center mb-3">
            We appreciate your generous donation. Every contribution helps us achieve our mission.
          </p>
          <p>You Can Donate Via:</p>
          <ul className={styles.walletList}>
            <li className={styles.walletItem}>
              <SiVodafone style={{ color: '#E60000' ,marginRight:"5px"}} /> Vodafone Cash: <strong>+201234567890</strong>
            </li>
            <li className={styles.walletItem}>
              <GiWallet style={{ color: '#019F6C' ,marginRight:"5px"}} /> Etisalat Cash: <strong>+201098765432</strong>
            </li>
            <li className={styles.walletItem}>
              <FaRegCreditCard style={{ color: '#007bff' ,marginRight:"5px"}} /> InstaPay: <strong>+201567890123</strong>
            </li>
          </ul>
          <p className='bg-warning text-dark px-3 py-1 text-lg rounded text-center'>
            Or You Can Donate With
            <span className='fw-bold p-1 rounded text-light mx-2' style={{backgroundColor:"#6772E5"}}> Stripe</span>
          </p>
          <form onSubmit={handleStripePayment}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter your donation amount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className={`${styles.donationInput}`}
              />
            </div>
            <div className="mb-3">
              <label>Credit Card Information:</label>
              <div className="border p-3 rounded">
                <CardElement 
                  options={{
                    style: {
                      base: {
                        color: '#000',
                        fontSize: '16px',
                        fontFamily: 'Arial, sans-serif',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a',
                      },
                    },
                  }}
                />
                {stripeError && <div className="text-danger mt-2">{stripeError}</div>}
              </div>
            </div>
            <button type="submit" className={`btn btn-primary w-100 ${styles.stripeButton}`} disabled={!stripe}>
              Donate with Stripe
            </button>
          </form>
          {/* PrimeReact Toast for success message */}
          <Toast ref={toast} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Donation;
