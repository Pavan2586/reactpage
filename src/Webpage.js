import React from 'react';
import { Image } from 'react-image';
import { Marker } from 'react-google-maps';
import QRCode from 'react-qr-code';
import YouTube from 'react-youtube';
import { GoogleMap, LoadScript } from 'react-google-maps';
import './Webpage.css';


function Webpage() {
  return (
   
    <div className="container">
      <center>
        <div>
          <br />
          <img src="https://jits.ac.in/wp-content/uploads/2023/03/jits_logo1.png" alt="Best Mba Colleges In Karimnagar" />
          <br />
          <hr />
          <p>
            Jyothishmathi Institute of Technology and Science began its journey of excellence in the year 1997 as a self-financial Engineering college under Shalini Vidya Samithi, Karimnagar with a vision of providing technical education to the rural students by our esteemed chairman Sri. Juvvadi Sagar Rao Garu. JITS is approved by the All India Council for Technical Education (AICTE), New Delhi and is affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad.
          </p>
          <br />
          <iframe
            src="https://www.youtube.com/embed/fvDy19cwg6I?si=URad3yLflq0ksLbT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <br />
          <p>
            Jyothishmathi has made meteoric progress during the last 22 years in teaching learning process and thrived into one of the top b.tech colleges in Telangana State. The management of Jyothishmathi is zestful and enlightened. It believes in providing a quality and holistic engineering education through a combination of experienced faculty, innovative programs & course work, industry and institute collaboration in providing research and employment opportunities on campus.
          </p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://jits.ac.in/" />
          <br />
          <mark> Scane the QR code know more about us......</mark>
          <br />
          <p>
            Jyothishmathi is driven by a brilliant team of faculty who contribute to an unparalleled reputation for balancing excellence in their fields with a dedication to their students. Many students secured University ranks bringing laurels to the institution. This institution is the most preferred choice of students, parents, faculty and industry and proved itself as a rolemodel in Technical Education.
          </p>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.9623461597025!2d79.15834937488897!3d18.349002174393146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdafeb52eb50b%3A0xb2b7101c07a36a69!2sJyothishmathi%20Institute%20of%20Technology%20and%20Science%20(AUTONOMOUS)!5e0!3m2!1sen!2sin!4v1722837564189!5m2!1sen!2sin"
            frameborder="0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </center>
    </div>
  );
}

export default Webpage