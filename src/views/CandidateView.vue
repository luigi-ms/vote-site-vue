<template>
	<v-row>
		<v-col cols=12 md=8>
			<h1>My Profile</h1>
		</v-col>
		<v-col cols=12 md=8 color="blue-grey darken-4" dark>
			<v-card class="mx-auto" dark> 
				<v-list disabled>
					<v-subhead>{{ user.name }}</v-subhead>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>Party: {{ user.party }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>Digits: {{ user.digits }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>Total of votes: {{ user.totalVotes }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
  export default {
		name: 'CandidateView',
		data: () => {
			return {
				user: {
					name: "Fulano",
					party: "Partido",
					digits: 0,
					totalVotes: 0
				}
			};
		}
  }
</script>
