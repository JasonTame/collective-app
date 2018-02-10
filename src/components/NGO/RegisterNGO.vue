<template>
<section class="hero collective-bg is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-5 is-offset-4">
        <h3 class="title has-text-white">Register as an NGO</h3>
        <p class="subtitle has-text-white">Lorem ipsum</p>
        <div class="box">
          <div class = "field">
            <form-wizard color="#dc9602" error-color="#a94442" title = " " subtitle = " ">
              <tab-content title="NGO details" icon="fa fa-user">
                <tcNgoPersonal></tcNgoPersonal>
              </tab-content>
              <tab-content title="Categories" icon="fa fa-heart">
                <tcNgoCategories></tcNgoCategories>
              </tab-content>
              <tab-content title="Skills Required" icon="fa fa-lightbulb-o">
                <tcNgoSkills></tcNgoSkills>
              </tab-content>
            </form-wizard>
          </div>
        </div>
        <p class="has-text-white">
          <a href="../">Need Help?</a>
        </p>
      </div>
    </div>
  </div>
</section>
</template>

<script>

// Form Wizard import
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

// Form component import
import NgoPersonalForm from './RegisterNgoPersonal.vue'
import NgoSkillsForm from './RegisterNgoSkills.vue'
import NgoCategoriesForm from './RegisterNgoCategories.vue'

export default {
  components: {
    FormWizard,
    TabContent,
    tcNgoPersonal: NgoPersonalForm,
    tcNgoSkills: NgoSkillsForm,
    tcNgoCategories: NgoCategoriesForm
  },
  data () {
    return {
    }
  }
}
</script>

<style>

.field span, li {
  color: #363636;
}

.field i {
  color: #dc9602
}
.collective-bg {
  background-color: #273065;
  color: #fff;
}

.collective-bg a {
  color: #fff
}


</style>
