<template>
  <v-app>
		<v-app-bar 
			dense 
			color="deep-purple darken-4"
			dark
			app>
			<v-toolbar-title>Voting Site</v-toolbar-title>

			<template v-slot:extension>
				<v-tabs>
					<v-tab to="/">Homepage</v-tab>
					<v-tab to="/vote">Vote</v-tab>
					<v-tab to="/profile">My Profile</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>

		<v-main color="indigo lighten-5">
			<v-container fluid>
				<router-view/>
			</v-container>
		</v-main>
  </v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		//
	})
};
</script>

<style>
</style>
