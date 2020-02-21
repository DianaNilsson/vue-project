<template>
  <div class="home">
    <!--SelectAnalyte komponent -->
    <!--Custum Event & Props-->
    <SelectAnalyte v-if="products" @analyt-selected="onAnalytSelected" :count="products.produkter" />

    <!--Table-->
    <div v-if="products" class="overview-table">
      <b-table :data="products.produkter" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
import SelectAnalyte from "@/home/SelectAnalyte.vue";
export default {
  name: "HomePage",
  components: {
    SelectAnalyte
  },
  created() {
    this.fetchProducts();
  },
  data() {
    return {
      products: null,
      analytUrl: "",
      //Buefy-table
      columns: [
        {
          field: "produktNamn",
          label: "Livsmedel"
        },
        {
          field: "antal",
          label: "Mätningar"
        },
        {
          field: "overskridanden",
          label: "Överskridande"
        }
      ]
    };
  },
  methods: {
    onAnalytSelected(analyt) {
      this.analytUrl = "?&analyt=" + analyt.id;
      this.fetchProducts();
    },

    fetchProducts() {
      fetch("http://www7.slv.se/pestapi/produkter" + this.analytUrl)
        .then(response => response.json())
        .then(result => {
          this.products = result;
        });
    }
  }
};
</script>


<style scoped>
.overview-table {
  width: 80vw;
  margin: 2rem auto;
  padding: 1rem;
  border-top: 10px solid #c94c4c;
  border-left: 2px solid #c94c4c;
  border-bottom: 2px solid #c94c4c;
}
</style>


