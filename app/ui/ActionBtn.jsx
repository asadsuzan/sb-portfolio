import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

function ActionBtn({
  text = "download cv", // Default text
  href = "/", // Default href
  Icon = IoMdArrowDropdown, // Default icon
  widthClasses = "w-48", // Default Tailwind width classes
  heightClasses = "h-10", // Default Tailwind height classes
}) {
  return (
    <Link
      href={href}
      className={`
       bg-gradient-to-r from-[#70ba65] to-[#9ed286]
        
        shadow-prt-shadow flex gap-3 justify-center uppercase tracking-wider text-xs font-bold text-[#fff] items-center whitespace-nowrap rounded-[30px] ${widthClasses} ${heightClasses} transition duration-500 ease-linear hover:scale-[1.02]`}
    >
      <span>{text}</span>
      <Icon className="size-5" />
    </Link>
  );
}

export default ActionBtn;
