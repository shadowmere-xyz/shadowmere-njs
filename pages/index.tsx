import React, { useState, useEffect } from "react";
import Pagination from "../components/pagination";
import ServersList from "../components/serversList";

export default function Home() {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return (
		<>
			<div className="lista-servers-vpns col-span-12 xl:col-span-9 w-full h-full flex flex-col gap-4">
				<Pagination isVisible={true} />
					<ServersList />
				<Pagination isVisible={true} />
			</div>
		</>
	);
}
