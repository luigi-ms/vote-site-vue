import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "./config.js";
import Candidate from "./Candidate.js";

export default class CandidateDAO extends Candidate{
	constructor(){
		super();
	}

	async create(){
		try {
			const created = await setDoc(doc(db, 'Candidates', this.name+this.digits), {
				name: this.name,
				party: this.party,
				digit: this.digits,
				password: this.password
			});

			return Promise.resolve(created);
		} catch (err) {
			return Promise.reject(err);
		}
	}

	async read(){
		try{
			const record = await getDoc(doc(db, "Candidates", this.id));

			if(record.exists()){
				return Promise.resolve(record.data());
			}else{
				return Promise.reject(`Candidato ${this.id} nao existe!`);
			}
		}catch(err){
			return Promise.reject(err);
		}
	}

	async getAll(){
		try{
			const allDocs = await getDoc(collection(db, "Candidates"));

			return Promise.resolve(allDocs);
		}catch(err){
			Promise.reject(err);
		}
	}

	async update(field, newValue){
		try{
			const updateRef = doc(db, "Candidates", this.id);
			let updated = "";

			if(field === "name"){
				updated = await updateDoc(updateRef, {
					name: newValue
				});
			}else if(field === "party"){
				updated = await updateDoc(updateRef, {
					party: newValue
				});
			}else if(field === "password"){
				updated = await updateDoc(updateRef, {
					party: newValue
				});
			}else{
				return Promise.reject(`Campo ${field} nao existe!`);
			}
			
			return Promise.resolve(updated);
		}catch(err){
			return Promise.reject(err);
		}
	}

	async remove(){
		try{
			const removed = await deleteDoc(doc(db, "Candidates", this.id));
			return Promise.resolve(removed);
		}catch(err){
			return Promise.reject(err);
		}
	}
}
