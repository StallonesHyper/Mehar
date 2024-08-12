import Mehar from "../assets/Mehar.png";

const Footer = () => {
  return (
    <div>
      <div className="text-center mb-16 flex items-center justify-center flex-col gap-6">
        <img
          src={Mehar}
          alt="Mehar"
          className="w-48 h-18 md:h-18 md:w-62 mx-auto my-auto"
        />
        <div className="flex justify-center items-center flex-col md:flex-row ">
          <div className="flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 font-bold"
            >
              <path
                d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                stroke="#dc2626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-gray-500 text-sm md:text-lg font-semibold">
              info@meharconsultants.com
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-b border-gray-300 my-2 md:w-[600px]"></div>
        </div>
        <div className="flex justify-around items-center gap-4 px-4">
          <a
            href="/About"
            className="text-gray-500 text-sm font-semibold underline"
          >
            About
          </a>
          <a href="/" className="text-gray-500 text-sm font-semibold underline">
            Terms & Conditions
          </a>
          <a
            href="/Contact"
            className="text-gray-500 text-sm font-semibold underline"
          >
            Contact
          </a>
        </div>
        <p className="text-gray-500 text-sm font-semibold">
          125, State Bank Nagar, Paschim Vihar, New Delhi, 110063
        </p>
        <p className="text-gray-500 text-sm font-semibold">
          Office Hours: Mon - Fri (9:00 AM - 5:00 PM)
        </p>
        <p className="text-gray-500 text-sm font-semibold">
          Copyright © 2024 Mehar Consultants All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
