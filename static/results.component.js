class Candidate {
	constructor(){
		this.name = "";
		this.totalVotes = 0;
		this.id = 0;
		this.party = "";
	}
}

export default {
	data() {
		return { datalist: [""] }
	},
	template: "<td>{{ message }}</td>"
}
