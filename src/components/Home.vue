<template>
  <section>
    <div class="hero collective-bg is-fullheight">
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
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h2 class="is-size-2">Collective</h2>
        <p><b>y<u>o</u>ur change</b></p>
        <p>Collective matches your skill-set to purpose based projects allowing you to show and grow your skill-set through meaningful work. All this whilst building your purpose CV. </p>
      </div>
    </div>
    <div class="columns features">
      <div class="column is-4" v-for="step in steps">
        <div class="card">
          <div class="has-text-centered">
            <h3 class="is-size-3">{{step.num}}</h3>
          </div>
          <div class="card-content">
            <div class="content">
              <h4 class="is-size-4">{{step.title}}</h4></div>
            <p>{{step.text}}</p>
            <p><a href="#">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="projects">
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
      quotes: [{
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
        }
      ],
      quoteNum: 0,
      projects: [{
          Name: "",
          image: "",
          description: "",
          skills: ['skill1', 'skill2', 'skill3', 'skill4'],
          category: 'category'
        },
        {
          Name: "",
          image: "",
          description: "",
          skills: ['skill1', 'skill2', 'skill3', 'skill4'],
          category: 'category'
        },
        {
          Name: "",
          image: "",
          description: "",
          skills: ['skill1', 'skill2', 'skill3', 'skill4'],
          category: 'category'
        }
      ],
      steps: [{
          num: 1,
          title: "Skill-Set/Areas of Expertise",
          text: "Filter dropdown menu to select your  areas of expertise."
        },
        {
          num: 2,
          title: "Your Passion Points",
          text: "Then filter projects by  your passion points"
        },
        {
          num: 3,
          title: "Meaningful Volunteer Work",
          text: "Reach out to enquire  more and Begin!"
        }
      ]
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
