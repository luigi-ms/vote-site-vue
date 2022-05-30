<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
			<router-link to="/">Homepage</router-link>
			<router-link style="color: black" to="/about">About</router-link>
    </v-app-bar>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
