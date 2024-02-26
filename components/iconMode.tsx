import { IconDeviceImac, IconMoon, IconSun } from "@tabler/icons-react";

export default function Icon(props: {
  name: String | undefined;
  rotate: boolean;
}) {
  switch (props.name) {
    case "light": {
      return <IconSun className={`stroke-[#303030] dark:stroke-[#cfcfcf]`} />;
    }

    case "dark": {
      return <IconMoon className={`stroke-[#303030] dark:stroke-[#cfcfcf]`} />;
    }

    case "system": {
      return (
        <IconDeviceImac className={`stroke-[#303030] dark:stroke-[#cfcfcf]`} />
      );
    }

    default:
      return (
        <IconDeviceImac className={`stroke-[#303030] dark:stroke-[#cfcfcf]`} />
      );
  }
}
