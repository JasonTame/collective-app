<template>
<section class="hero collective-bg is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-5 is-offset-4">
        <h3 class="title has-text-white">Register as a Volunteer</h3>
        <p class="subtitle has-text-white">Lorem ipsum</p>
        <div class="box">
          <div class = "field">
            <form-wizard color="#dc9602" error-color="#a94442" title = " " subtitle = " ">
              <tab-content title="Personal details" icon="fa fa-user">
                <tcVolPersonal></tcVolPersonal>
              </tab-content>
              <tab-content title="Passions" icon="fa fa-heart">
                <tcVolPassions></tcVolPassions>
              </tab-content>
              <tab-content title="Skill Set" icon="fa fa-lightbulb">
                <tcVolSkills></tcVolSkills>
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
import VolunteerPersonalForm from './RegisterPersonal.vue'
import VolunteerSkillsForm from './RegisterSkills.vue'
import VolunteerPassionsForm from './RegisterPassions.vue'

export default {
  components: {
    FormWizard,
    TabContent,
    tcVolPersonal: VolunteerPersonalForm,
    tcVolSkills: VolunteerSkillsForm,
    tcVolPassions: VolunteerPassionsForm
  },
  data () {
    return {
    }
  }
}
</script>

<style>




</style>
