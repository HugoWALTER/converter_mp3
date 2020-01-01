import Button from 'ant-design-vue/lib/button'
import Form from 'ant-design-vue/lib/form'
import Input from 'ant-design-vue/lib/input'
import Icon from 'ant-design-vue/lib/icon'
import Card from 'ant-design-vue/lib/card'
import Checkbox from 'ant-design-vue/lib/checkbox'
import notification from 'ant-design-vue/lib/notification'
import { Menu, Select } from 'ant-design-vue'
import * as ytdl from 'ytdl-core'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Conv',
  layout: 'blank',
  components: {
    Logo,
    Button,
    Form,
    FormItem: Form.Item,
    AInput: Input,
    AInputPassword: Input.Password,
    Icon,
    Card,
    Checkbox,
    AMenuItem: Menu.Item,
    ASelect: Select,
    ASelectOption: Select.Option
  },
  data() {
    return {
      form: this.$form.createForm(this),
      rules: {
        conv: [
          'conv',
          {
            rules: [{
              required: true,
              message: this.$t('conv.conv_required')
            }]
          }
        ]
      }
    }
  },
  computed: {
    hostname() {
      return window.location.hostname
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (err) {
          notification.error({
            message: this.$t('conv.error_conv'),
            description: this.$t('conv.conv_required')
          })
          return
        }
        if (!err) {
          const fs = require('fs')
          console.log('VALEUR RECUP:', values.conv)
          ytdl.getInfo(values.conv, (err, info) => {
            if (err) {
              throw err
            }
            const format = ytdl.chooseFormat(info.formats, { quality: '134' })
            if (format) {
              console.log('Format found!', format)
            }
          })
          ytdl(values.conv).pipe(fs.createWriteStream('video.flv'))
          /* ytdl.getInfo('https://www.youtube.com/watch?v=YQHsXMglC9A', function(info) {
            console.log(info.title) // "Adele - Hello"
          })
          */
        }
      })
    }
  },
  beforeMount() {
  }
}
