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
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
        stroke={`${props.color}`}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3333 7.50001C12.1824 7.23814 11.963 7.02226 11.6988 6.87547C11.4346 6.72868 11.1354 6.65651 10.8333 6.66668H9.16667C8.72464 6.66668 8.30072 6.84227 7.98816 7.15483C7.6756 7.46739 7.5 7.89132 7.5 8.33334C7.5 8.77537 7.6756 9.19929 7.98816 9.51185C8.30072 9.82442 8.72464 10 9.16667 10H10.8333C11.2754 10 11.6993 10.1756 12.0118 10.4882C12.3244 10.8007 12.5 11.2246 12.5 11.6667C12.5 12.1087 12.3244 12.5326 12.0118 12.8452C11.6993 13.1577 11.2754 13.3333 10.8333 13.3333H9.16667C8.86458 13.3435 8.56541 13.2713 8.30118 13.1245C8.03696 12.9778 7.81763 12.7619 7.66667 12.5M10 5.83334V14.1667"
        stroke={`${props.color}`}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
