import Button from 'ant-design-vue/lib/button'
import Icon from 'ant-design-vue/lib/icon'
import Card from 'ant-design-vue/lib/card'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Error',
  layout: 'blank',
  components: {
    Logo,
    Button,
    Icon,
    Card
  },
  data() {
    return {
    }
  },
  computed: {
    hostname() {
      return window.location.hostname
    }
  },
  methods: {
    handleClick() {
      window.location.href = '/conv'
    }
  },
  beforeMount() {
  }
}
