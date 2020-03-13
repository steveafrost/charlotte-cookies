<template>
  <form class="form" name="purchase" netlify>
    <div class="form__field">
      <label class="form__field__label" for="full-name">
        Your Name
      </label>
      <input id="full-name" class="form__field__input form__field__input--text" type="text" name="customer-name">
    </div>
    <div class="form__field">
      <label class="form__field__label" for="scout-name">
        Scout Name
      </label>
      <div class="form__field__input form__field__input--select">
        <select id="scout-name" name="scout-name">
          <option>Addison Frank</option>
          <option>Adelynn Stram</option>
          <option>Charlotte Goodrich</option>
          <option>Claire Jolly</option>
          <option>Elizabeth Brandon</option>
          <option>Ella King</option>
          <option>Emily Pace</option>
          <option>Evelyn Kanopsky</option>
          <option>Georgiana (Gigi)</option>
          <option>Isla Stewart</option>
          <option>Jennah Awdi</option>
          <option>Jillian Woods</option>
          <option>Katherine O’Loughlin</option>
          <option>Leia Turner</option>
          <option>Lily Conner</option>
          <option>Lily Itauma</option>
          <option>Lizzie Wist</option>
          <option>Maddie Haddad</option>
          <option>Mae Ogger</option>
          <option>Marena Eplin</option>
          <option>Melanie Swasey</option>
          <option>Milena Testa</option>
          <option>Natalie Brosky</option>
          <option>Riley Falloni</option>
          <option>Sophia Rowe</option>
          <option>Stella Sweeney</option>
        </select>
      </div>
    </div>

    <button class="form__button" type="button">
      Purchase
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
.form {
  max-width: 400px;
  margin: 0 auto;
}

.form__field {
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
}

.form__field__label {
  font-size: 20px;
  font-weight: 300;
}

.form__field__input {
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  height: 50px;
}

.form__field__input--text {
  padding: 10px 15px;
}

.form__field__input--select {
  background: #ffffff;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.form__field__input--select:after {
    top: 50%;
    right: 20px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(0, 0, 0, 0);
    border-top-color: #000000;
    border-width: 5px;
    margin-top: -2px;
    z-index: 100;
}

.form__field__input--select select {
  border: none;
  box-shadow: none;
  background: transparent;
  background-image: none;
  -webkit-appearance: none;
  padding: 10px 15px;
  width: 100%;
  height: 50px;
}

.form__button {
  display: inline-block;
  border-radius: 5px;
  border: 1px solid #00AE58;
  color: #00AE58;
  text-decoration: none;
  padding: 10px 30px;
  width: 100%;
}

.form__button:hover {
  color: #ffffff;
  background-color: #00AE58;
}
</style>
