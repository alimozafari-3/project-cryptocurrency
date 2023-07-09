<template>
  <div id="app" class="container">
     
    <div class="input-group flex-nowrap mb-5 mt-5 shadow-lg bg-body rounded">
      <input
        type="text"
        class="form-control border-info"
        placeholder="search"
       v-model="search"
      />
    </div>

    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col"># name</th>
          <th scope="col">price</th>
          <th scope="col">changepercentage</th>
          <th scope="col">marketcap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in Getdatamarket" :key="data">
          <th scope="row">{{data.market_cap_rank}} <img :src="data.image" alt="" width="23" /> {{ data.name }}</th>
          <td class="text">${{ data.current_price }}</td>
          <td class="text">{{ data.market_cap_change_percentage_24h }}%</td>
          <td class="text">{{ data.market_cap }}</td>
        </tr>
      </tbody>
    </table>
  
  </div>
</template>

<script>
export default {
 data() {
  return {
    search: '',
  
  };
 },
  computed: {
    Getdatamarket(){
    return  this.$store.getters.Getdatamarket
    }
  },
  created() {
    this.$store.dispatch("dataserverfrom");
  },
  watch: {
    Getdatamarket() {
      this.$store.dispatch("dataserverfrom");
    },
 
  },
};
</script>
 
 

<style>
.text {
  font-weight: bold;

}
.textlow {
  color: green;
}
</style>