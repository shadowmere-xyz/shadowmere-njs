import React, { useEffect, useState } from "react";

export default function useMousePosition(el: any) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateMousePosition = (ev: any) => {
			const localX = ev.clientX - ev.target.offsetLeft;
			const localY = ev.clientY - ev.target.offsetTop;
            
			setMousePosition({ x: localX, y: localY });
		};
		el?.addEventListener("mousemove", updateMousePosition);
		return () => {
			el?.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return mousePosition;
}
