import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-500 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 &nbsp;
          <a
            href="https://github.com/muhammadderic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500"
          >
            muhammadderic
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
