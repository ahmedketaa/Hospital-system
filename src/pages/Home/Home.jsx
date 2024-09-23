import React, { useEffect } from 'react';
import CustomDivWithCarousel from '../../components/Test';
import SecondSection from '../../components/SecondSection';
import ThirdSection from '../../components/ThirdSection';
import AppointmentSection from '../../components/bookAppointment';
import { BiSolidDonateHeart } from 'react-icons/bi';
import Donation from '../../components/dontation';
import introJs from 'intro.js'; // Import intro.js
import 'intro.js/minified/introjs.min.css'; // Import CSS for styling

export default function Home() {
  
  useEffect(() => {
    // Check if the tour has been completed
    const isTourCompleted = localStorage.getItem('tourCompleted');

    if (!isTourCompleted) {
      // Define the steps for the tour
      const intro = introJs();
      intro.setOptions({
        steps: [
          {
            intro: "Welcome to the website! Let us guide you through the key sections.",
          },
          {
            element: '.carousel-section', // A class name or ID of the section
            intro: 'This is our main carousel showcasing important content.',
          },
          {
            element: '.second-section', 
            intro: 'Here you can find some more detailed information.',
          },
          {
            element: '.third-section', 
            intro: 'In this section, we showcase our special features.',
          },
          {
            element: '.appointment-section', 
            intro: 'Here, you can book appointments directly with us.',
          },
          {
            element: '.donation-section', 
            intro: 'Support us by donating! Every contribution counts.',
          }
        ],
        showProgress: true, // Show progress bar
        showStepNumbers: true, // Display step numbers
        disableInteraction: true, // Prevent users from interacting while the tour is active
      });

      // Start the intro tour
      intro.start();

      // Mark tour as completed when it finishes or is skipped
      intro.oncomplete(() => {
        localStorage.setItem('tourCompleted', 'true');
      });

      intro.onexit(() => {
        localStorage.setItem('tourCompleted', 'true');
      });
    }
  }, []);

  return (
    <div style={{overflowX:"hidden"}}>
      <div className="donation-section">
        <Donation />
      </div>

      <div className="carousel-section">
        <CustomDivWithCarousel />
      </div>

      <div className="second-section">
        <SecondSection />
      </div>

      <div className="third-section">
        <ThirdSection />
      </div>

      <div className="appointment-section">
        <AppointmentSection />
      </div>
    </div>
  );
}
