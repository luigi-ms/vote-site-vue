<template>
	<v-row>
		<v-col cols=12 md=8>
			<h1>Ranking</h1>
		</v-col>
		<v-col cols=12 md=8>
			<v-simple-table fixed-header>
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-left">Nome</th>
							<th class="text-left">Sigla</th>
							<th class="text-left">Votos</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="c in candidates" v-bind:key="c">
							<td>{{ c.name }}</td>
							<td>{{ c.party }}</td>
							<td>{{ c.totalVotes }}</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</v-col>
	</v-row>
</template>

<script>
  export default {
    name: 'HomeView',
		data: () => ({
			candidates: []
		})
  }
</script>
