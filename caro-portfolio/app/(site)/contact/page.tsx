import { Mail } from "lucide-react";
export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Contact</h1>
      <div className="flex-col space-x-1.5">
        <p>If you have any question please contact me!</p>
        <p className="flex">
          <Mail className="mr-1.5" />
          Mail: carovegam@gmail.com
        </p>
        <p>Instagram: carocaracol</p>
      </div>
    </div>
  );
}
