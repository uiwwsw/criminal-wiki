import Cookie from 'js-cookie';
import Crypto from 'crypto-js';
import moment, { DurationInputArg1, DurationInputArg2 } from 'moment';
const SESSION_KEY = import.meta.env.VITE_SESSION_KEY;
const LOCALSTORAGE_KEY = 'SESSIONKEY';

export interface ObjectValue {
	expires?: string;
	value: string;
	key: string;
	browser?: true;
}
export default class Session {
	// static setKey(keys: Set<string>): void {
	// 	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(Array.from(keys)));
	// }
	// static addKey(key: string): void {
	// 	const keys = Session.getKeys();
	// 	keys.add(key);
	// 	Session.setKey(keys);
	// }
	// static getKeys(): Set<string> {
	// 	const keys = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
	// 	return new Set(keys);
	// }
	// static hasKey(key: string): boolean {
	// 	return Session.getKeys().has(key);
	// }

	static decryptValue(value: string): any {
		const bytes = Crypto.AES.decrypt(value, SESSION_KEY);
		return JSON.parse(bytes.toString(Crypto.enc.Utf8));
	}
	static encryptValue(value: any): string {
		return Crypto.AES.encrypt(JSON.stringify(value), SESSION_KEY).toString();
	}

	static getItem(key: string): any {
		// if (!Session.hasKey(key)) {
		// 	console.log(`${key}가 존재하지 않습니다.`);
		// 	return '';
		// }
		const objectValue = JSON.parse(sessionStorage.getItem(key) || localStorage.getItem(key));
		if (!objectValue) {
			console.log(`${key}의 value가 존재하지 않습니다.`);
			return '';
		}

		if (objectValue.expires && moment(objectValue.expires).diff(moment()) < 0) {
			console.log(`${key}의 expires가 만료되었습니다.`);
			return '';
		}

		return Session.decryptValue(objectValue.value);
	}
	static setItem({
		key,
		value,
		expires,
		browser = false
	}: {
		key: string;
		value: any;
		expires?: { value: DurationInputArg1; DurationInputArg2; type: DurationInputArg2 };
		browser?: boolean;
	}): void {
		const session = browser ? sessionStorage : localStorage;
		const objectValue = {
			value: Session.encryptValue(value),
			expires: expires ? moment().add(expires.value, expires.type) : false
		};
		// Session.addKey(key);
		session.setItem(key, JSON.stringify(objectValue));
	}
	static removeItem(key: string): void {
		// const keys = Session.getKeys();
		// keys.delete(key);
		// Session.setKey(keys);
		localStorage.removeItem(key);
		sessionStorage.removeItem(key);
	}
}
