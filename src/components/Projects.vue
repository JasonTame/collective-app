<template>
<div class="projects">
  <div class="columns">
    <div class="column">
      <h1 class="is-size-1">Projects</h1>
      <br>
      <form>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <div class="select is-fullwidth is-large">
              <select>
                  <option>(0) Skills</option>
                  <option>Skill 1</option>
                  <option>Skill 2</option>
                </select>
            </div>
          </div>
          <div class="control">
            <div class="select is-fullwidth is-large">
              <select>
                  <option>(0) Passions</option>
                  <option>Passion 1</option>
                  <option>Passion 2</option>
                </select>
            </div>
          </div>
          <p class="control">
            <a class="button is-warning is-large">
              Filter
            </a>
          </p>
          <p class="control">
            <a class="button is-light is-large">
              Cancel
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
  <div class="columns">
    <div class = "column is-4" v-for = "project in projects">
      <div class ="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src = "project.image" alt="Placeholder image">
          </figure>
        </div>
        <div class = "card-content">
          <div class = "media">
            <div class = "media-content">
              <p class = "title is-4 has-text-centered">{{project.title}}</p>
            </div>
          </div>
          <br>
          <div class = "content">
            {{project.description}}
            <br>
            Skills: <a href = "#" v-for = "Skill in project.skills"> {{Skill}} </a>
            <br>
            Categories: <a href = "#" v-for = "Category in project.categories"> {{Category}} </a>
            <hr>
            <p class="control has-text-centered">
              <a target = "_blank" :href = "project.link" style = "font-size: 1.5rem; font-weight: bold;" class="button is-warning is-fullwidth">
                  Volunteer
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        projects: {
          demo1: {
            title: "Genetic Alliance South Africa",
            image: "src/assets/example_1.jpeg",
            link: "https://goo.gl/forms/MrN7FjS6pMQLO3yj1",
            description: "Help Genetic Alliance South Africa with 5 volunteers for 4-8 hours for Layout/design of bi-monthly e-newsletter in Mail Chimp",
            skills: {
              1: "IT",
              2: "Web Design",
            },
            categories: {
              1: "Health",
              2: ""
            }
          },
          demo2: {
            title: "DOCKDA Rural Development Agency",
            image: "src/assets/example_2.jpeg",
            link: "https://goo.gl/forms/MrN7FjS6pMQLO3yj1",
            description: "Help DOCKDA Rural Development Agency with 1 volunteer for 4-8 hours for Servicing of organisation vehicle",
            skills: {
              1: "Mechanical",
              2: "",
            },
            categories: {
              1: "Rural",
              2: "Development"
            }
          },
          demo3: {
            title: "The Rays of Hope Children's Centre NGO",
            image: "src/assets/example_3.jpeg",
            link: "https://goo.gl/forms/MrN7FjS6pMQLO3yj1",
            description: "Help Rays of Hope with 5 volunteers for 1-4 hours for data consolidation using Microsoft Excell and Access",
            skills: {
              1: "Excel",
              2: "IT"
            },
            categories: {
              1: "Children",
              2: ""
            }
          }
        }
      }
    }
  }
</script>
