import React from 'react';
import Image from 'next/image';


const Element2 = () => {
  return (
    <div className="element2-container">
      <div className='header-content'>
        <h5 className='title'>Medical and Specialties Management Software</h5>
        <a href="https://github.com/Massinjouba/GesMedecin" target="_blank" rel="noopener noreferrer" className='button'>
            See on GitHub
        </a>
      </div>
      <div className="element2-content">
        <div className="element2-description">
          <p>This medical and specialties management software is a comprehensive application developed to facilitate the administration of medical data. It offers an intuitive user interface that enables efficient management of information related to doctors and medical specialties. Here are the key features of the software:</p>
          <hr className="separator" />
          <ul>
            <li><strong>Doctor Management:</strong>
              <ul>
                <li>Addition of new doctors with complete details (ID, name, first name, phone, specialty, salary).</li>
                <li>Modification and updating of existing doctors information.</li>
                <li>Deletion of doctors from the database.</li>
                <li>Display of the list of doctors with all relevant information in an interactive table.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Specialty Management:</strong>
              <ul>
                <li>Addition of new specialties with precise details (ID, specialty name, description).</li>
                <li>Modification of existing specialties information.</li>
                <li>Deletion of specialties from the database.</li>
                <li>Display of the list of specialties in an easy-to-read table.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Search and Filtering:</strong>
              <ul>
                <li>Search for doctors by specialty.</li>
                <li>Filtering doctors based on salary (less than, greater than, or equal to a specified amount).</li>
                <li>Display of search results in a dynamic table.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>User Interface:</strong>
              <ul>
                <li>Simple and clear input forms for adding and modifying doctors and specialties.</li>
                <li>Functional buttons for adding, modifying, and deleting entries.</li>
                <li>Status bar displaying state messages for better interactivity (e.g., "New Doctor added", "No Doctor with this ID").</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Data Management Features:</strong>
              <ul>
                <li>Fast loading of doctor and specialty lists from the database.</li>
                <li>Automatic resetting of forms after each addition or modification operation.</li>
                <li>Error handling with explicit message display in the status bar.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Dynamic Components and Commands:</strong>
              <ul>
                <li>Use of commands to perform addition, modification, and deletion operations.</li>
                <li>Real-time filtering of doctors based on selected search criteria.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="element2-image">
          <Image src="/assets/images/Projet 2.png" alt="Project" width={500} height={300} />
          <Image src="/assets/images/Projet 2,2.png" alt="Project" width={500} height={300} />
          <Image src="/assets/images/Projet 2,3.png" alt="Project" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}

export default Element2;
