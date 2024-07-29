import React from 'react';
import Image from 'next/image';

const Element1 = () => {
  return (
    <div className="element1-container">
      <div className='header-content'>
        <h5 className='title'>Software in managing the inventory of cannabis seedlings</h5>
        <a href="https://github.com/idir-kebbiche/GestionCanabis" target="_blank" rel="noopener noreferrer" className='button'>
            See on GitHub
        </a>
      </div>
      <div className="element1-content">
        <div className="element1-description">
          <p>The software offers a complete solution for managing cannabis seedling inventories, including registration, modification, importation, real-time tracking, and QR code generation, all accessible via desktop, mobile, and web applications. It ensures traceability and data accuracy while offering an intuitive user interface and automated features to simplify daily management.</p>
          <hr className="separator" />
          <ul>
            <li><strong>Seedling Registration and Importation:</strong>
              <ul>
                <li>Ability to manually register or import seedlings from existing files.</li>
                <li>Form with multiple fields to record seedling details (health status, arrival date, identification, origin, description, stage, storage, withdrawal date, reason for withdrawal, decontamination responsible, and notes).</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>QR Code Generation:</strong>
              <ul>
                <li>Automatic generation of unique QR codes for each registered plant.</li>
                <li>Option to print QR codes to stick on the corresponding plant boxes.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Real-Time Inventory and Tracking:</strong>
              <ul>
                <li>Inventory accessible at any time to check the status and number of seedlings.</li>
                <li>Scanning QR codes via a mobile application to quickly access plant information.</li>
                <li>Modifying plant information after scanning the QR code while keeping a history of changes.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>State and Status Management:</strong>
              <ul>
                <li>Dropdown menu for plant health status with color codes (Red, Orange, Yellow, Green).</li>
                <li>Active/inactive status based on the withdrawal date, with automatic status change when the withdrawal date is entered.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Automatic Calculations:</strong>
              <ul>
                <li>Automatic calculation of the total number of active seedlings (value of the Active/Inactive column equals 1).</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Modification History:</strong>
              <ul>
                <li>Keeping a history of modifications for each plant, including modification dates.</li>
              </ul>
            </li>
            <hr className="separator" />
          </ul>
          <h3>Technological Environment:</h3>
          <ul>
            <li><strong>Accessibility:</strong>
              <ul>
                <li>Application available in desktop version for data entry and viewing on PC.</li>
                <li>Mobile version for scanning QR codes and managing information via mobile devices.</li>
                <li>Possible web version accessible via a browser, with the same features as the desktop version.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>User Interface:</strong>
              <ul>
                <li>Intuitive user form with dropdown menus and input fields tailored to facilitate information entry.</li>
                <li>Mobile interface for scanning QR codes and quickly modifying information.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Extensibility:</strong>
              <ul>
                <li>Ability to add new storages and decontamination responsibles via dedicated interfaces, which will then appear in the corresponding dropdown menus.</li>
              </ul>
            </li>
            <hr className="separator" />
            <li><strong>Data Security and Integrity:</strong>
              <ul>
                <li>Each line of the Excel file is uniquely recorded in the database to ensure traceability.</li>
                <li>Restriction on identification fields to avoid duplicates or the use of identifiers of withdrawn plants.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="element1-image">
          <Image src="/assets/images/Projet 1,3.png" alt="Project" width={500} height={300} />
          <Image src="/assets/images/Projet 1.png" alt="Project" width={500} height={300} />
          <Image src="/assets/images/Projet 1,2.png" alt="Project" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}

export default Element1;
