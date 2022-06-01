<template>
  <v-app>
		<v-app-bar dense app>
			<v-toolbar-title>Voting Site</v-toolbar-title>

			<template v-slot:extension>
				<v-tabs>
					<v-tab to="/">Homepage</v-tab>
					<v-tab to="/vote">Vote</v-tab>
					<v-tab to="/signIn">SignIn</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>

		<v-main>
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
