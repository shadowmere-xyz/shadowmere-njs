export interface Proxies {
	count: number;
	total_pages: number;
	current_page: number;
	results: Proxy[];
}

export interface Proxy {
	id: number;
	url: string;
	location: string;
	location_country_code: string;
	location_country: string;
	ip_address: string;
	is_active: boolean;
	last_checked: string;
	last_active: string;
	times_checked: number;
	times_check_succeeded: number;
	port: number;
}
