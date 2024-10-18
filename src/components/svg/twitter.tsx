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
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M12.9533 0.595745H15.4595L9.98546 6.86843L16.4256 15.4043H11.3836L7.43431 10.2264L2.91516 15.4043H0.407928L6.26291 8.69447L0.0852051 0.595745H5.25593L8.82529 5.32732L12.9533 0.595745ZM12.075 13.9009H13.4639L4.50018 2.02043H3.01116L12.075 13.9009Z"
        fill="white"
      />
    </svg>
  );
}
