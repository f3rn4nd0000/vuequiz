import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/Header'
// import QuestionBox from '@/components/QuestionBox'
// import SearchBar from '@/components/SearchBar'
// import DropDownButton from '@/components/DropDownButton'
import NavigationBar from '@/components/NavigationBar'
import ProcessesArea from '@/components/ProcessesArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      components: {
        navbar: NavigationBar,
        // header: Header,
        // qbox: QuestionBox,
        procarea: ProcessesArea
        // sbar: SearchBar,
        // ddown: DropDownButton
      }
    }
  ]
})
