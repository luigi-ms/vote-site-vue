<template>
	<v-row>
		<v-col cols=12 md=8>
			<h1>Sign Up</h1>
		</v-col>
		<v-col cols=12 md=8>
			<v-form>
				<v-container>
					<v-row>
						<v-col cols=10 md=7>
							<v-text-field outlined label="Name" required/>
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field outlined label="Party" required />
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field outlined label="Digits" required />
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field outlined label="Password" required />
						</v-col>
						<v-col cols=6 md=4>
							<v-btn color="primary">SignUp</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>
  export default {
		name: 'SingUpView',
		props: {
			candidate: Object
		}
  }
</script>
