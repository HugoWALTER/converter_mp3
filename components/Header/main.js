import Avatar from 'ant-design-vue/lib/avatar'
import Icon from 'ant-design-vue/lib/icon'
import Menu from 'ant-design-vue/lib/menu'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Avatar,
    Icon,
    Menu,
    MenuItem: Menu.Item,
    MenuDivider: Menu.Divider
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    onSearch() {

    }
  }
}
