export interface Menu {
	[key: string]: string;
}

export interface Gallery extends Menu {}

export interface Card {
	id: string;
	title: string;
	subtitle: string;
}
