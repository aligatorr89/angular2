export interface I_blacklist {
	id: number;
	email: string;
	active: number;
	created: string;
}

export class C_blacklist implements I_blacklist {
	id = 0;
	email = "";
	active = 0;
	created = "";
}