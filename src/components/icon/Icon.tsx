import IconsSpryte from "../../assets/logo/svg-sprites.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
    >
      <use xlinkHref={`${IconsSpryte}#${props.iconId}`} />
    </svg>
  );
};
