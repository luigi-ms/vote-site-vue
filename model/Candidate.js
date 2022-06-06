export default class Candidate {
	constructor(){
		this.name = "";
		this.party = "";
		this.digits = 0;
		this.password = "";
		this.id = this.name + this.digits;	
	}

	get name(){
		return this._name;
	}

	get party(){
		return this._party;
	}
	
	get digits(){
		return this._digits;
	}

	get password(){
		return this._password;
	}

	get id(){
		return this._id;
	}

	set name(newName){
		this._name = newName;
	}
	
	set party(newParty){
		this._party = newParty;
	}
	
	set digits(newDigits){
		this._digits = newDigits;
	}
	
	set password(newPassword){
		this._password = newPassword;
	}

	set id(newId){
		this._id = newId;
	}
}
