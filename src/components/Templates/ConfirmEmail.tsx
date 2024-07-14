import React from "react";

interface EmailTemplateProps {
  username: string;
}

export const ConfirmEmail: React.FC<Readonly<EmailTemplateProps>> = ({ username }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="logo_gradient text-3xl font-semibold">build.io</h1>
      <h1 className="m-3 text-[22px]">
        Welcome, <span className="italic font-medium">{username}</span>!
      </h1>
      <p>Yes we know. An email to confirm an email.</p>
      <button className="capitalize text-white bg-secondary p-3 rounded font-semibold">
        confirm your email
      </button>
    </div>
  );
};

export default ConfirmEmail;
