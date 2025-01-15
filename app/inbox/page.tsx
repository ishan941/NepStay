import React from "react";
import Conversion from "../components/inbox/Conversion";

const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h2 className="my-6 text-2xl">Inbox</h2>
      <Conversion />
      <Conversion />
      <Conversion />
    </main>
  );
};

export default InboxPage;
