<template>

  <section>
    <div class = "hero collective-bg is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Collective
          </h1>
          <br>
          <h2 class="subtitle">
            “It is not enough to be industrious; so are the ants. What are you industrious about?” - <em>Henry David Thoreau</em>
          </h2>
          <br>
        </div>
      </div>
    </div>
    <div class="columns features">
      <div class="column is-4">
        <div class="card">
          <div class="card-image has-text-centered">
            <i class="fa fa-paw"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Tristique senectus et netus et. </h4>
              <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-image has-text-centered">
            <i class="fa fa-id-card"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4>Tempor orci dapibus ultrices in.</h4>
              <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="card">
          <div class="card-image has-text-centered">
            <i class="fa fa-rocket"></i>
          </div>
          <div class="card-content">
            <div class="content">
              <h4> Leo integer malesuada nunc vel risus.  </h4>
              <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
              <p><a href="#">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "projects">
      <tc-projects></tc-projects>
      <tc-blog></tc-blog>
    </div>
  </section>

</template>


<script>
  import Projects from './Projects.vue'
  import Blog from './Blog.vue'

  export default {

    components: {
      tcProjects: Projects,
      tcBlog: Blog
    },
    data() {
      return {
        projects: [
          {Name: "", image: "", description: "", skills: ['skill1', 'skill2', 'skill3', 'skill4'], category: 'category'},
          {Name: "", image: "", description: "", skills: ['skill1', 'skill2', 'skill3', 'skill4'], category: 'category'},
          {Name: "", image: "", description: "", skills: ['skill1', 'skill2', 'skill3', 'skill4'], category: 'category'}
        ]
      }
    }
  }
</script>

  <style>
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
     /*The svg CSS makes no sense..*/
    .features svg {
      font-size: 46px;
      padding: 10px;
      color: #dc9602;
    }

    .features, .projects {
      margin: 20px
    }
  </style>
