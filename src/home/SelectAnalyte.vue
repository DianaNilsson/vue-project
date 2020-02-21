<template>
  <div class="select-analyte-section">
    <div v-if="analytes">
      <b-select
        @input="onChange"
        placeholder="Filtrera på analyter"
        v-model="chosedAnalyt"
        class="select-analyte"
      >
        <option
          v-for="analyte in analytes.analyter"
          :value="analyte"
          :key="analyte.analytId"
        >{{ analyte.namn }}</option>
      </b-select>
    </div>
    <div v-if="chosedAnalyt" class="chosed-analyt">
      <p>
        <span>&#10006;</span>
        {{chosedAnalyt.namn}}
      </p>
    </div>
    <div :props="count" class="count">
      <p>Livsmedel: {{count.length}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectAnalyte",
  created() {
    this.fetchAnalytes();
  },
  data() {
    return {
      analytes: null,
      chosedAnalyt: null
    };
  },
  methods: {
    fetchAnalytes() {
      fetch("http://www7.slv.se/pestapi/analyter")
        .then(response => response.json())
        .then(result => {
          this.analytes = result;
        });
    },
    onChange() {
      this.$emit("analyt-selected", {
        id: this.chosedAnalyt.analytId,
        analytnamn: this.chosedAnalyt.namn
      });
    }
  },
  props: {
    count: Array
  }
};
</script>

<style scoped>
.select-analyte-section {
  display: flex;
  align-items: center;
  margin: 2rem 8rem 3rem;
}
.select-analyte {
  width: 250px;
  border: 2px solid #c94c4c;
  border-radius: 5px;
  margin-right: 3rem;
}
.chosed-analyt {
  width: 250px;
  height: 30px;
  border: 2px solid #c94c4c;
  background-color: #c94c4c;
  border-radius: 5px;
  margin-right: 3rem;
}
.chosed-analyt p,
.chosed-analyt span {
  color: white;
}

.chosed-analyt span {
  margin: 0 16px 0 8px;
}
.count {
  width: 150px;
  height: 30px;
  border: 2px solid #78996c;
  background-color: #78996c;
  border-radius: 5px;
}

.count p {
  color: white;
  margin: 0 16px 0 8px;
}
</style>

<!--Watcher-->
<!--Custum Events--> 
<!--@change-->