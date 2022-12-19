import React from "react";
import { useEffect, useState, useRef } from "react";

export function getFlagEmoji(countryCode: any) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char: any) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function getPercentage(portion: number, total: number) {
	return Math.trunc((portion * 100) / total);
}

// export function useComponentVisible(initialIsVisible: any) {
// 	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
// 	const ref = useRef(null);
  
// 	const handleHideDropdown = (event: KeyboardEvent) => {
// 	  if (event.key === "Escape") {
// 		setIsComponentVisible(false);
// 	  }
// 	};
  
// 	const handleClickOutside = (event:any) => {
// 	  if (ref.current && !ref.current.contains(event.target)) {
// 		setIsComponentVisible(false);
// 	  }
// 	};
  
// 	useEffect(() => {
// 	  document.addEventListener("keydown", handleHideDropdown, true);
// 	  document.addEventListener("click", handleClickOutside, true);
// 	  return () => {
// 		document.removeEventListener("keydown", handleHideDropdown, true);
// 		document.removeEventListener("click", handleClickOutside, true);
// 	  };
// 	});
  
// 	return { ref, isComponentVisible, setIsComponentVisible };
//   }

export const useOutsideClick = (callback: any) => {
	const ref = useRef<HTMLDivElement>(null);
  
	React.useEffect(() => {
	  const handleClick = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
		  callback();
		}
	  };
  
	  document.addEventListener('click', handleClick, true);
  
	  return () => {
		document.removeEventListener('click', handleClick, true);
	  };
	}, [ref]);
  
	return ref;
  };