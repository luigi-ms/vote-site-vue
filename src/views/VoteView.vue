<template>
	<v-row>
		<v-col cols=12 md=8>
			<h1>Vote Area</h1>
		</v-col>
		<v-col cols=12 md=8>
			<v-form>
				<v-container>
					<v-row>
						<v-col cols=10 md=6>
							<v-text-field 
								label="Voter number"
								required/>
						</v-col>
						<v-col cols=10 md=6>
							<v-text-field 
								label="Candidate number"
								required/>
						</v-col>
						<v-col cols=6 md=4>
							<v-btn depressed color="primary">
								Vote
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
		</v-col>
	</v-row>
</template>

<script>
  export default {
    name: 'VoteView',
  }
</script>
