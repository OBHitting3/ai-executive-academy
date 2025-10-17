export default function Ghost({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ghost body */}
      <path
        d="M100,20
           C50,20 20,50 20,100
           L20,200
           L40,185
           L60,200
           L80,185
           L100,200
           L120,185
           L140,200
           L160,185
           L180,200
           L180,100
           C180,50 150,20 100,20 Z"
        opacity="0.15"
      />

      {/* Eyes */}
      <circle cx="70" cy="90" r="12" fill="currentColor" opacity="0.3" />
      <circle cx="130" cy="90" r="12" fill="currentColor" opacity="0.3" />

      {/* Mouth */}
      <path
        d="M70,120 Q100,135 130,120"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.3"
      />
    </svg>
  );
}
