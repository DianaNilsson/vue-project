<template>
  <div class="overview">
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
    <div v-if="$route.params.more == 'Gränsvärden'" class="gransvarden">
      <header>
        <h2>{{$route.params.more}}</h2>
      </header>
      <div class="information-text">
        <p>
          Inom EU finns gemensamma gränsvärden för hur mycket rester av bekämpningsmedel som får finnas kvar i maten. Gränsvärdena för enskilda substanser är satta så lågt som möjligt, och med god säkerhetsmarginal för att inte påverka hälsan negativt för några grupper, även vegetarianer, barn och gravida.
          Gränsvärdena är också så lågt satta att det inte innebär någon långsiktig risk om man utsätts för flera bekämpningsmedel samtidigt, den så kallade cocktaileffekten. Inom EU pågår arbete för att ta fram bättre metoder för att kunna bedöma den sammanlagda effekten av bekämpningsmedel och ta hänsyn till det när man fastställer gränsvärden.
        </p>
      </div>
    </div>
    <div v-if="$route.params.more == 'Behörighetsklasser'" class="behorighetsklasser">
      <header>
        <h2>{{$route.params.more}}</h2>
      </header>
      <div class="information-text">
        <p>I Sverige har vi ett system med behörighetsklasser för kemiska bekämpningsmedel och biologiska bekämpningsmedel som innehåller mikroorganismer. Behörighetsklassen visar vem som får använda ett bekämpningsmedel. Medel i klass 1 och 2 får bara användas yrkesmässigt. Medel i klass 3 får användas av alla, det vill säga även av privatpersoner.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info {
  width: 80vw;
  margin: 3rem auto;
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

/* More info
---------------------------------------------------------*/
.gransvarden {
  width: 80vw;
  margin: 3rem auto;
  display: flex;
  background-color: #78996c;
  border: 1px solid #78996c;
  border-radius: 2px;
}

.behorighetsklasser {
  width: 80vw;
  margin: 3rem auto;
  display: flex;
  background-color: #78996c;
  border: 1px solid #78996c;
  border-radius: 2px;
}

.information-text {
  width: 70%;
  background-color: #fff;
  border: 2px solid #78996c;
  border-radius: 5px;
  padding: 1rem;
}
header {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header h2 {
  color: #fff;
  font-size: 1.6em;
}
</style>