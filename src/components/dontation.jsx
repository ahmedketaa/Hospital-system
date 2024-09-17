import React, { useState } from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { Modal } from 'react-bootstrap';
import { FaMoneyBillWave,  FaRegCreditCard } from 'react-icons/fa';
import { SiVodafone } from "react-icons/si";

import { GiWallet } from 'react-icons/gi';
import styles from './Donation.module.css'; 

function Donation() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={{ zIndex: '1111', position: 'fixed', top: '50%', right: '10px' }}>
      <BiSolidDonateHeart
        style={{ fontSize: '90px', color: '#ee6b6e', cursor: 'pointer' }}
        onClick={handleOpenModal}
      />
      <p style={{ color: '#DEAA4E' }}>Donate For Us</p>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Donate to Support Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="image text-center d-flex justify-content-center">
          <img src="/donate.jpeg" alt="" />
          </div>
          <p>We appreciate your generous donation. Every contribution helps us achieve our mission.</p>
          <div>
            <p>You Can Donate Via:</p>
            <ul className={styles.walletList}>
              <li className={styles.walletItem}>
                <SiVodafone style={{ color: '#E60000' }} /> Vodafone Cash: <strong>+201234567890</strong>
              </li>
              <li className={styles.walletItem}>
                <GiWallet style={{ color: '#019F6C' }} /> Etisalat Cash: <strong>+201098765432</strong>
              </li>
              <li className={styles.walletItem}>
                <FaRegCreditCard style={{ color: '#007bff' }} /> InstaPay: <strong>+201567890123</strong>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Donation;
