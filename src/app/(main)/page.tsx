import CardGreetings from "@/components/CardGreetings";
import CardForm from "@/components/form/CardForm";
import React from "react";
import { greetings } from '@/app/lib/data'

export default function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
      {greetings.description && <CardGreetings />}
        <CardForm />
      </div>
    </>
  );
}
