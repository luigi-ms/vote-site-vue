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
				<v-btn class="navButton" to="/">
					<span>Home</span>
				</v-btn>
				<v-btn class="navButton" to="/vote">
					<span>Vote</span>
				</v-btn>
				<v-btn class="navButton" to="/profile/candidate">
					<span>Candidate</span>
				</v-btn>
			</v-bottom-navigation>
		</v-main>
  </v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		current: "home"
	})
};
</script>

<style>
#content {
	background-color: #212121;
	color: #F5F5F5;
}

.navButton {
	height: 17vh;
}
</style>
