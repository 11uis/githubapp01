<template>
  <div id="app">
    <pre>{{user}}</pre>
    Before Router VIEW
    <router-view></router-view>
    AFTER Router View
  </div>
</template>

<script>
  import {router} from './bootstrap.js';

  export default {
      name: 'GithubApplication',
      router,
      // store the user data
      data() {
        return {
            user: null,
        };
      },
      // define methods:
      methods: {
          fetchUser(username) {
              this.$http.get(`users/${username}`)
                  .then((res) => {
                      // the user (variable in data()) equals the response of data of the function
                      this.user = res.data;
                      console.log(res);
                  })
          }
      },

      // we define the method, when the component is completely loaded
      // it will call the github API, however, we define the mounted method in
      // the methods: property (fetchUser() method).
      mounted() {
        /*  this.$http.get('https://api.github.com/users/11uis')
              .then((res) => {
              console.log(res);
          })*/

        // call the the method fetchUser
          this.fetchUser('11uis');
      },
}
</script>
