<script type="text/javascript">
// Step two: create a dropin instance using that container (or a string
//   that functions as a query selector such as `#dropin-container`)
braintree.dropin.create({
  container: document.getElementById('dropin-container'),
  authorization: CLIENT_TOKEN_FROM_SERVER,
  container: '#dropin-container'
  // ...plus remaining configuration
}, (error, dropinInstance) => {
  // Use `dropinInstance` here
  // Methods documented at https://braintree.github.io/braintree-web-drop-in/docs/current/Dropin.html
});

</script>

<template>
 <div id="dropin-container">

 </div>
</template>

<style scoped lang="scss">
</style>