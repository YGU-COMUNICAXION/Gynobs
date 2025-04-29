/** @jsxImportSource react */
import { useState } from "react";

interface Testimonial {
  text: string;
  author: string;
}

interface Props {
  testimonials: Testimonial[];
  color: string;
}

export default function TestimonialCarousel({ testimonials, color }: Props) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className={`rounded-xl p-6 relative ${color}`}>
      <h3 className="font-title text-lg mb-4">Testimonios</h3>
      <p className="font-text text-sm md:text-base  italic">
        {testimonials[index].text}
      </p>
      <p className="font-text text-sm md:text-base lg:text-lg italic">
        {testimonials[index].text}
      </p>
      <p className="font-text text-sm mt-4 font-semibold">
        {testimonials[index].author}
      </p>

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:cursor-pointer ${
              i === index ? "bg-white w-5" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
