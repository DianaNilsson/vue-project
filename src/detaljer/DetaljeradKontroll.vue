<!--vbase-->

<template>
  <div class="details">
    <div class="search-details">
      <select
        @change="onChangedProduct"
        name="select-products"
        v-model="produktUrl"
        v-if="storeProducts"
      >
        <option
          v-for="product in storeProducts.produkter"
          :key="product.produktNamn"
          :value="product"
        >{{product.produktNamn}}</option>
      </select>

      <select
        @change="onChangedAnalyte"
        name="select-analytes"
        v-model="analytUrl"
        v-if="storeAnalytes"
      >
        <option
          v-for="analyte in storeAnalytes.analyter"
          :key="analyte.analytId"
          :value="analyte"
        >{{analyte.namn}}</option>
      </select>

      <button @click="onClick">Sök</button>
    </div>

    <p
      class="tips"
    >Tips: välj ris (livsmedel) och acetamiprid (analyt) för exempel på hur ett giltligt resultat kan se ut.</p>

    <div class="result-details" v-if="details">
      <h3>Resultat</h3>
      <div v-if="details.resultat.length>0">
        <p>Livsmedel: {{details.resultat[0].prodText}}</p>
        <p>Analyt: {{details.resultat[0].paramText}}</p>
        <p>Livsmedel producerad i: {{details.resultat[0].origCountry}}</p>
        <p>Produktionsform (t.ex. konventionellt- ekologiskt odlad): {{details.resultat[0].prodProdMeth}}</p>
        <p>Framställningstekniker av produkten (t.ex. torknig, malning etc): {{details.resultat[0].prodTreat}}</p>
        <p>År provet togs: {{details.resultat[0].sampY}}</p>
        <p>År provet analyserades: {{details.resultat[0].analysisY}}</p>
        <p>Uppmätt halt: {{details.resultat[0].resVal}} {{details.resultat[0].resUnit}}</p>
        <p>Gällande gränsvärde: {{details.resultat[0].resLegalLimit}}</p>
      </div>

      <p v-else>Finns ingen tillgänglig data på vald analyt och livsmedel</p>
    </div>

    <div class="e-post">
      <p>Håll dig uppdterad via mejl:</p>
      <input v-model="email" placeholder="e-post" />
      <p>Din ifyllda e-post är: {{email}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //vdata, vprops, vmethods etc.
  data() {
    return {
      produktUrl: null,
      analytUrl: null,
      details: ""
    };
  },
  name: "DetaljeradKontroll",
  computed: {
    storeProducts() {
      return this.$store.state.storeProducts;
    },
    storeAnalytes() {
      return this.$store.state.storeAnalytes;
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      }
    }
  },
  methods: {
    onChangedProduct() {
      this.produktUrl = "&produkt=" + this.produktUrl.produktKod;
      console.log(this.produktUrl);
    },
    onChangedAnalyte() {
      this.analytUrl = "?analyt=" + this.analytUrl.analytId;
      console.log(this.analytUrl);
    },
    onClick() {
      this.fetchDetails();
    },

    fetchDetails() {
      console.log(this.produktUrl);
      fetch(
        "http://www7.slv.se/pestapi/resultat" + this.analytUrl + this.produktUrl
      )
        .then(response => response.json())
        .then(result => {
          this.details = result;
          console.log(this.details.resultat);
          // console.log(this.details.resultat.length);
        });
    }
  }
};
</script>


<style scoped>
.details {
  width: 80vw;
  margin: 4rem auto;
}

.search-details select {
  width: 12rem;
  margin-right: 2rem;
  padding: 0.2rem 1rem 0.2rem 0.2rem;
  border: 1px solid #c94c4c;
  border-radius: 2px;
  cursor: pointer;
}

.search-details button {
  font-size: 1em;
  padding: 0.2rem 1rem;
  border: 1px solid #78996c;
  border-radius: 2px;
  background-color: #78996c;
  color: #fff;
  cursor: pointer;
}

.tips {
  margin: 1rem 0;
  font-style: italic;
}

.result-details {
  width: 80vw;
  margin-top: 2rem;
  padding: 2rem;
  border: 1px solid #e6e6e5;
  border-left: 8px solid #c94c4c;
  border-radius: 4px;
  background-color: #e6e6e5;
}

.result-details h3 {
  font-size: 1.4rem;
  padding: 0.5rem 0;
}

.result-details p {
  line-height: 1.8em;
}

.e-post {
  margin: 2rem 0;
  padding: 1rem 2rem;
  width: 20rem;
  background-color: #e6e6e5;
  order: 1px solid #e6e6e5;
  border-left: 8px solid #c94c4c;
  border-radius: 4px;
}

.e-post input {
  margin: 0.5rem 0;
  padding: 0.2rem 1rem;
  border: 1px solid #c94c4c;
  border-radius: 2px;
  font-size: 1em;
}
</style>