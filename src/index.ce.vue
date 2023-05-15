<style>
table{
	font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
table td, #customers th {
  border: 1px solid #ddd;
  padding: 0.8rem;
}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
	padding-left: 0.8rem;
  text-align: left;
  background-color: darkblue;
  color: white;
}

button{
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	background-color: darkblue;
	border: none;
	margin-bottom: 1rem;
	padding: 0.5rem;
}
</style>

<template>
	<div>
		<button @click="reloadList">Reload List</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	export default {
		tag: 'my-list-users',
		name: 'MyListUsers',
		data() {
    return {
      list: []
    };
  },
  async created() {
    await this.fetchListData();
  },
  methods: {
    async fetchListData() {
      // Fetch the list here and update the data
      // Example: using fetch API
      const response = await fetch('http://localhost:3000/usersUniqueName/getAll');
      const data = await response.json();
      this.list = data;
    },
    async reloadList() {
      await this.fetchListData();
    }
  }
	};
</script>

