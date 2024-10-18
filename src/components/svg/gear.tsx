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
        d="M16.5841 10.5503C16.4505 10.3982 16.3768 10.2027 16.3768 10.0003C16.3768 9.79789 16.4505 9.60239 16.5841 9.45031L17.6507 8.25031C17.7683 8.11921 17.8413 7.95423 17.8592 7.77907C17.8772 7.60391 17.8392 7.42755 17.7507 7.27531L16.0841 4.39198C15.9965 4.23992 15.8631 4.11938 15.703 4.04755C15.5429 3.97573 15.3642 3.95628 15.1924 3.99198L13.6257 4.30865C13.4264 4.34984 13.2188 4.31664 13.0423 4.21531C12.8658 4.11399 12.7324 3.95155 12.6674 3.75865L12.1591 2.23365C12.1032 2.06813 11.9966 1.92437 11.8546 1.82268C11.7125 1.721 11.5421 1.66653 11.3674 1.66698H8.03406C7.85234 1.6575 7.67251 1.70775 7.52203 1.81008C7.37156 1.9124 7.25871 2.06116 7.20073 2.23365L6.73406 3.75865C6.66906 3.95155 6.5357 4.11399 6.35915 4.21531C6.18261 4.31664 5.97507 4.34984 5.77573 4.30865L4.16739 3.99198C4.00452 3.96897 3.83848 3.99467 3.69018 4.06585C3.54189 4.13703 3.41798 4.2505 3.33406 4.39198L1.66739 7.27531C1.57669 7.42586 1.53591 7.60122 1.55088 7.77633C1.56585 7.95145 1.6358 8.11735 1.75073 8.25031L2.80906 9.45031C2.94266 9.60239 3.01634 9.79789 3.01634 10.0003C3.01634 10.2027 2.94266 10.3982 2.80906 10.5503L1.75073 11.7503C1.6358 11.8833 1.56585 12.0492 1.55088 12.2243C1.53591 12.3994 1.57669 12.5748 1.66739 12.7253L3.33406 15.6086C3.42164 15.7607 3.55499 15.8813 3.7151 15.9531C3.87522 16.0249 4.05391 16.0443 4.22573 16.0086L5.79239 15.692C5.99174 15.6508 6.19927 15.684 6.37582 15.7853C6.55237 15.8866 6.68573 16.0491 6.75073 16.242L7.25906 17.767C7.31704 17.9395 7.42989 18.0882 7.58037 18.1906C7.73084 18.2929 7.91067 18.3431 8.09239 18.3336H11.4257C11.6004 18.3341 11.7709 18.2796 11.9129 18.1779C12.055 18.0763 12.1615 17.9325 12.2174 17.767L12.7257 16.242C12.7907 16.0491 12.9241 15.8866 13.1006 15.7853C13.2772 15.684 13.4847 15.6508 13.6841 15.692L15.2507 16.0086C15.4225 16.0443 15.6012 16.0249 15.7614 15.9531C15.9215 15.8813 16.0548 15.7607 16.1424 15.6086L17.8091 12.7253C17.8975 12.5731 17.9355 12.3967 17.9176 12.2216C17.8996 12.0464 17.8266 11.8814 17.7091 11.7503L16.5841 10.5503ZM15.3424 11.667L16.0091 12.417L14.9424 14.267L13.9591 14.067C13.3589 13.9443 12.7345 14.0462 12.2046 14.3535C11.6746 14.6607 11.2758 15.1518 11.0841 15.7336L10.7674 16.667H8.63406L8.33406 15.717C8.14227 15.1352 7.74354 14.6441 7.21356 14.3368C6.68358 14.0296 6.05924 13.9276 5.45906 14.0503L4.47573 14.2503L3.39239 12.4086L4.05906 11.6586C4.46902 11.2003 4.69567 10.6069 4.69567 9.99198C4.69567 9.37704 4.46902 8.78367 4.05906 8.32531L3.39239 7.57531L4.45906 5.74198L5.44239 5.94198C6.04258 6.06467 6.66692 5.96272 7.1969 5.65548C7.72688 5.34825 8.12561 4.85711 8.31739 4.27531L8.63406 3.33365H10.7674L11.0841 4.28365C11.2758 4.86545 11.6746 5.35658 12.2046 5.66381C12.7345 5.97105 13.3589 6.073 13.9591 5.95031L14.9424 5.75031L16.0091 7.60031L15.3424 8.35032C14.937 8.80761 14.7132 9.39755 14.7132 10.0086C14.7132 10.6197 14.937 11.2097 15.3424 11.667ZM9.70073 6.66698C9.04146 6.66698 8.39699 6.86248 7.84883 7.22875C7.30066 7.59502 6.87342 8.11562 6.62113 8.7247C6.36884 9.33379 6.30283 10.004 6.43144 10.6506C6.56006 11.2972 6.87753 11.8912 7.3437 12.3573C7.80988 12.8235 8.40382 13.141 9.05043 13.2696C9.69703 13.3982 10.3673 13.3322 10.9763 13.0799C11.5854 12.8276 12.106 12.4004 12.4723 11.8522C12.8386 11.3041 13.0341 10.6596 13.0341 10.0003C13.0341 9.11626 12.6829 8.26841 12.0577 7.64329C11.4326 7.01817 10.5848 6.66698 9.70073 6.66698ZM9.70073 11.667C9.37109 11.667 9.04886 11.5692 8.77478 11.3861C8.50069 11.203 8.28707 10.9427 8.16093 10.6381C8.03478 10.3336 8.00178 9.99847 8.06609 9.67516C8.13039 9.35186 8.28913 9.05489 8.52222 8.8218C8.7553 8.58872 9.05228 8.42998 9.37558 8.36567C9.69888 8.30136 10.034 8.33437 10.3385 8.46052C10.6431 8.58666 10.9034 8.80028 11.0865 9.07436C11.2696 9.34845 11.3674 9.67068 11.3674 10.0003C11.3674 10.4423 11.1918 10.8663 10.8792 11.1788C10.5667 11.4914 10.1428 11.667 9.70073 11.667Z"
        fill={`${props?.color}`}
      />
    </svg>
  );
}
