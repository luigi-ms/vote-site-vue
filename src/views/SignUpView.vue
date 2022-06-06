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
							<v-text-field dark
								outlined 
								label="Name" 
								v-model="name"
								required/>
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field dark
								outlined 
								label="Party" 
								v-model="party"
								required />
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field dark
								outlined 
								label="Digits" 
								v-model="digits"
								required />
						</v-col>
						<v-col cols=10 md=7>
							<v-text-field dark
								outlined 
								label="Password" 
								v-model="passwd"
								required />
						</v-col>
						<v-col cols=6 md=4>
							<v-btn 
								color="primary"
								v-on:click="signUp">SignUp</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>
import CandidateActions from '../../model/CandidateActions.js';

export default {
	name: 'SingUpView',
	data: () => {
		return {
			name: "",
			party: "",
			digits: "",
			passwd: ""
		};
	},
	methods: {
		signUp: function(){
			CandidateActions.signUp(this.name, this.party, this.digits, this.passwd)
				.then(res => {
					console.log(res);
					this.test = "Success!";
				})
				.catch(rej => {
					console.error(rej);
					this.test = "Error :(";
				});
		}
	}
}
</script>
