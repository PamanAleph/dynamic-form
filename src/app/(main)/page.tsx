import CardGreetings from "@/components/CardGreetings";
import CardForm from "@/components/form/CardForm";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
        <CardGreetings />
        <CardForm />
      </div>
    </>
  );
}
