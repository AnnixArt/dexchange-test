"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen text-gray-700">
      Redirection vers la page d'authentification...
    </div>
  );
}
