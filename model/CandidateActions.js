import CandidateDAO from './CandidateDAO.js';

export default class CandidateActions {
	static async signUp(name, party, digits, password){
		const cand = new CandidateDAO();

		cand.name = name;
		cand.party = party;
		cand.digits = digits;
		cand.password = password;

		try{
			const insertion = await cand.create();
			return Promise.resolve(insertion);
		}catch(err){
			return Promise.reject(err);
		}
	}
}
