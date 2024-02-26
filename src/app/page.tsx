'use client'
import TodoList from "@/components/TodoList";
import UseStatePractice from "@/components/UseStatePractice";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <UseStatePractice />
      <TodoList/>
    </main>
  );
}
