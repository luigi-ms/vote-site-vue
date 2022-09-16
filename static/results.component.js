export default {
	data() {
		return {
			candslist: [],
			jsonFile: candidates
		}
	},
	created() { console.log("Created") },
	mounted() {
		this.candslist = this.jsonFile;
	},
	template: `<tr v-for='cand in candslist' :key='cand'>
		<td>{{ cand.id }}</td>
		<td>{{ cand.name }}</td>
		<td>{{ cand.party }}</td>
		<td>{{ cand.totalVotes }}</td>
	</tr>`
}
