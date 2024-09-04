import CardForm from "@/components/CardForm";
import CardGreetings from "@/components/CardGreetings";
import React from "react";

export default function page() {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
        <CardGreetings />
        <CardForm />
      </div>
    </section>
  );
}
