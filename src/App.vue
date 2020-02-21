<!--vbase-->
<template>
  <div id="app">
    <!--Header-->
    <header class="hero">
      <img src="./assets/Vector.png" alt="hero" class="hero-image" />
      <div class="hero-info-block">
        <h1>
          REN
          <span>Mat</span>
        </h1>
        <p>Bekämpningsmedelsrester kan förekomma i alla livsmedel som under odling, lagring eller transport behandlats med bekämpningsmedel.</p>
        <router-link class="home-button" :to="{name: 'Home'}" exact>
          <button>Kontrollera Livsmedel</button>
        </router-link>
      </div>
    </header>

    <!--Main-->
    <main>
      <div class="second-header">
        <h2>Rester av kemiska bekämpningsmedel i våra livsmedel?</h2>
        <p>Med denna tjänst kan du söka efter bekämpningsmedel i 30 av våra vanligaste livsmedel</p>
      </div>
      <nav>
        <router-link class="nav-link" :to="{name: 'Home'}" exact>Översikt</router-link>
        <router-link class="nav-link" to="/DetaljeradKontroll" exact>Detaljerad Kontroll</router-link>
        <router-link class="nav-link" to="/Information" exact>Information</router-link>
      </nav>
      <router-view></router-view>

      <!--Footer-->
      <footer>
        <p>Copyright &#9400;</p>
        <p>Creative Commons Erkännande 4.0 Internationella Publika Licens ("Publik Licens")</p>
        <p>Öppen data hämta i från Livsmedelsverket</p>
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* Fonts and reset
---------------------*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,800|Petit+Formal+Script&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Open Sans", sans-serif;
  color: black;
  text-decoration: none;
  overflow-x: hidden;
}

/* Header
--------------*/
.hero {
  position: relative;
  height: 663px;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    linear-gradient(180deg, #78996c 0%, rgba(120, 153, 108, 0) 100%);
  overflow-y: hidden;
  border-bottom: 3px solid #78996c;
}

.hero-image {
  height: 100%;
  max-width: 100%;
  position: absolute;
}

.hero-info-block {
  width: 40vw;
  height: 500px;
  position: absolute;
  top: 60%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.hero-info-block h1 {
  padding-top: 50px;
  font-weight: 800;
  font-size: 200px;
  color: #78996c;
  line-height: 50px;
  overflow-y: hidden;
}

.hero-info-block h1 span {
  font-family: Petit Formal Script;
  font-size: 140px;
  color: #c94c4c;
  margin-left: 200px;
  padding-top: 0;
  line-height: 120px;
}

.hero-info-block p {
  padding-top: 20px;
}

.hero-info-block button {
  background: #c94c4c;
  border: 1px solid #c94c4c;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  width: 240px;
  height: 52px;
  margin: 10px 0 0 230px;
  cursor: pointer;
}

/* Main
------------------------------*/
.second-header h2 {
  text-align: center;
  font-weight: 300;
  font-size: 36px;
  padding: 70px 0 10px;
}

.second-header p {
  text-align: center;
}

/* Navigation
-------------------*/
nav {
  width: 70vw;
  margin: 40px auto;
  display: flex;
  justify-content: space-evenly;
}

.nav-link {
  color: black;
  width: 33%;
  text-align: center;
}

.router-link-active {
  border-bottom: 2px solid #c94c4c;
  padding-bottom: 0.5rem;
}

.home-button {
  border-bottom: none;
}

/* Footer
---------------------------------------------------------------------*/
footer {
  margin-top: 100px;
  height: 200px;
  padding-top: 80px;
  text-align: center;
  background-color: #bfbfbb;
}
</style>
