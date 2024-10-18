export default function Svg(props: {
  width: number;
  height: number;
  color: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox="0 0 20 23"
      fill="none"
    >
      <g clipPath="url(#clip0_40_2266)">
        <path
          d="M17.8385 7.23826C17.606 6.89632 17.3023 6.61815 16.952 6.42618C16.6018 6.23421 16.2146 6.13381 15.8218 6.13306H4.17847C3.78566 6.13381 3.39851 6.23421 3.04822 6.42618C2.69793 6.61815 2.3943 6.89632 2.1618 7.23826L0.455968 9.75196C0.0970256 10.2792 -0.0718495 10.9296 -0.0190916 11.5815C0.0336663 12.2335 0.304446 12.8423 0.742635 13.2944L10.0001 22.271L19.2885 13.2638C19.7157 12.8102 19.9768 12.2053 20.0238 11.5604C20.0708 10.9155 19.9005 10.2739 19.5443 9.75376L17.8385 7.23826ZM6.09097 12.4331L8.0118 17.9231L2.3468 12.4331H6.09097ZM12.1276 12.4331L10.0001 18.5144L7.87263 12.4331H12.1276ZM7.89764 10.6331L8.89764 7.93306H11.1026L12.1026 10.6331H7.89764ZM13.9093 12.4331H17.6518L11.9851 17.9231L13.9093 12.4331ZM16.4926 8.30116L18.0768 10.6331H13.8976L12.8976 7.93306H15.8218C15.9528 7.93301 16.082 7.96632 16.1988 8.03027C16.3156 8.09423 16.4169 8.18703 16.4943 8.30116H16.4926ZM3.5043 8.30116C3.58189 8.18679 3.68339 8.09383 3.80055 8.02987C3.9177 7.9659 4.04719 7.93273 4.17847 7.93306H7.10263L6.10263 10.6331H1.92347L3.5043 8.30116Z"
          fill={`${props.color}`}
        />
        <path
          d="M10.8334 0.733063H9.16675V4.33306H10.8334V0.733063Z"
          fill={`${props.color}`}
        />
        <path
          d="M15.1308 1.24572L13.4644 4.07446L14.871 5.04106L16.5375 2.21231L15.1308 1.24572Z"
          fill={`${props.color}`}
        />
        <path
          d="M4.86983 1.25357L3.46387 2.22018L5.13037 5.04752L6.53634 4.08092L4.86983 1.25357Z"
          fill={`${props.color}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_40_2266">
          <rect
            width="20"
            height="21.6"
            fill="white"
            transform="translate(0 0.733063)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}