export default function Svg(props: {
  width: number;
  height: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_40_2305)">
        <path
          d="M13.5763 8.47124C13.7013 8.34622 13.7715 8.17668 13.7715 7.9999C13.7715 7.82313 13.7013 7.65359 13.5763 7.52857L9.80496 3.75724C9.74346 3.69356 9.6699 3.64277 9.58856 3.60784C9.50723 3.5729 9.41975 3.55451 9.33123 3.55374C9.24271 3.55297 9.15492 3.56983 9.07299 3.60336C8.99106 3.63688 8.91663 3.68638 8.85403 3.74897C8.79144 3.81157 8.74193 3.886 8.70841 3.96793C8.67489 4.04986 8.65802 4.13765 8.65879 4.22617C8.65956 4.31469 8.67795 4.40217 8.71289 4.48351C8.74783 4.56484 8.79862 4.63841 8.86229 4.6999L11.4956 7.33324H2.66696C2.49015 7.33324 2.32058 7.40347 2.19555 7.5285C2.07053 7.65352 2.00029 7.82309 2.00029 7.9999C2.00029 8.17671 2.07053 8.34628 2.19555 8.47131C2.32058 8.59633 2.49015 8.66657 2.66696 8.66657H11.4956L8.86229 11.2999C8.74085 11.4256 8.67366 11.594 8.67518 11.7688C8.6767 11.9436 8.74681 12.1108 8.87041 12.2344C8.99402 12.3581 9.16123 12.4282 9.33603 12.4297C9.51082 12.4312 9.67922 12.364 9.80496 12.2426L13.5763 8.47124Z"
          fill="#1C1C1C"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_2305">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(0 1 -1 0 16 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}