<template>
  <section class="hero collective-bg is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to Collective
        </h1>
        <br>
        <h2 class="subtitle">
          <blockquote>
            <p>{{quotes[quoteNum].quoteText}}</p>
            <p><em>-{{quotes[quoteNum].quoteAuthor}}</em></p>
          </blockquote>
        </h2>
        <br>
        <div class="field is-grouped">
          <p class="control">
            <router-link :to="{ name: 'registerNGOLink' }" tag = "div"><a class="button is-link is-medium">
              Register as NGO
            </a></router-link>
          </p>
          <p class="control">
            <router-link :to="{ name: 'registerVolunteerLink' }" tag = "div"><a class="button is-link is-medium">
              Register as Volunteer
            </a></router-link>
          </p>
        </div>
        <div class = "login">
          <router-link :to="{ name: 'loginLink' }" tag = "div"><a class="button is-success is-large">
            Login
          </a></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        quotes: [
          {
            quoteText: '“It is not enough to be industrious; so are the ants. What are you industrious about?',
            quoteAuthor: "Henry David Thoreau"
          },
          {
            quoteText: 'You can do anything, but not everything.',
            quoteAuthor: "David Allen"
          },
          {
            quoteText: 'Do not seek to follow in the footsteps of the men of old; seek what they sought.',
            quoteAuthor: "Matsuo Basho"
          }],
        quoteNum: 0
      }
    },
    mounted() {
      this.randomQuote();
    },
    methods: {
      randomQuote() {
        this.quoteNum = Math.floor(Math.random() * Math.floor(3));
        return this.quoteNum;
      }
    }
  }
</script>

<style>

.field.is-grouped {
  justify-content: center;
}

.login {
  justify-content: center;
}

.collective-bg {
  background-color: #273065;
  color: #fff;
}

.collective-bg .title {
  color: #fff;
}

.collective-bg .subtitle {
  color: #fff;
}
</style>
