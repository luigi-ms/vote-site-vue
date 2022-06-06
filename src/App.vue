<template>
  <v-app>
		<v-app-bar 
			dense 
			color="deep-purple darken-4"
			dark
			app>
			<v-toolbar-title>Voting Site</v-toolbar-title>
		</v-app-bar>

		<v-main id="content">
			<v-container fluid>
				<router-view />
			</v-container>

			<v-bottom-navigation fixed
				:value="current" 
				background-color="deep-purple darken-4"
				color="primary"
				dark
				grow>
				<v-btn to="/">
					<span>Home</span>
				</v-btn>
				<v-btn to="/vote">
					<span>Vote</span>
				</v-btn>
				<v-btn to="/profile/candidate">
					<span>Candidate</span>
				</v-btn>
			</v-bottom-navigation>
		</v-main>
  </v-app>
</template>

<script>
import CandidateActions from '../model/CandidateActions.js';

export default {
	name: 'App',
	data: () => ({
		current: "home",
		user: new CandidateActions()
	})
};
</script>

<style>
#content {
	background-color: #212121;
	color: #F5F5F5;
}
</style>
