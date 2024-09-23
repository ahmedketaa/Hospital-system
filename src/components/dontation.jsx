import React, { useState } from 'react';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaRegCreditCard } from 'react-icons/fa';
import { SiVodafone } from "react-icons/si";
import { GiWallet } from 'react-icons/gi';
import styles from './Donation.module.css'; 

function Donation() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
          <div className="image text-center d-flex justify-content-center">
            <img src="/donate.jpeg" alt="Donation" className={styles.donationImage}/>
          </div>
          <p className="text-center">
            We appreciate your generous donation. Every contribution helps us achieve our mission.
          </p>
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
