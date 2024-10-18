export default function Svg(props: {
  width: number;
  height: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M2.6663 8.00004H7.99963M7.99963 8.00004H13.333M7.99963 8.00004V2.66671M7.99963 8.00004V13.3334"
        stroke={`${props?.color}`}
        strokeWidth="1.28571"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
