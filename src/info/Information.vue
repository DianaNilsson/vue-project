<template>
  <div class="info">
    <aside>
      <h2>Bekämpningsmedel</h2>
      <p>Bekämpningsmedel är kemiska eller biologiska produkter som är till för att förhindra att djur, växter eller mikroorganismer orsakar skada på egendom eller skadar människors eller djurs hälsa. De egenskaperna gör att bekämpningsmedel också kan orsaka skada på hälsan eller miljön. Därför är det viktigt att bekämpningsmedel är godkända och används på rätt sätt.</p>
    </aside>
    <div class="router-button-container">
      <router-link
        class="router-button"
        tag="button"
        to="/Information/Gränsvärden"
        exact
      >Gränsvärden</router-link>
      <router-link
        class="router-button"
        tag="button"
        to="/Information/Behörighetsklasser"
        exact
      >Behörighetsklasser</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Information"
};
</script>

<style scoped>
.info {
  width: 80vw;
  margin: 5rem auto;
  display: flex;
  background-color: #c94c4c;
  border: 1px solid #c94c4c;
  border-radius: 2px;
}

aside {
  width: 70%;
  background-color: #fff;
  border: 2px solid #c94c4c;
  border-radius: 5px;
  padding: 1rem;
}

.info h2 {
  font-size: 1.5em;
  padding: 0.5rem 0 1rem;
}

.info p {
  padding-bottom: 1rem;
}

.router-button-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.router-button {
  width: 12rem;
  padding: 0.5rem 1rem;
  /*display: block;*/
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  margin: 0.5rem;
  cursor: pointer;
  font-size: 1em;
}
</style>