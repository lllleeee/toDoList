
const cpn2 = {
  template:'#cpn2',
  props: {
    cunf: {
      type: Array,
      default: ['322', '323']
    }
  },
  methods: {
    unfdel(index) {
      this.cunf.splice(index, 1)
      this.$emit('unfdel', this.cunf)
    },
    unfup(index) {
      let updateitem = this.cunf[index]
      this.cunf.splice(index, 1)
      this.$emit('unfup', [updateitem, this.cunf])
    }
  },
}


const cpn3 = {
  template:'#cpn3',
  props: {
    cfed: {
      type: Array,
      default: ['洗澡', '睡觉']
    }
  },
  methods: {
    feddel(index) {
      this.cfed.splice(index, 1)
      this.$emit('feddel', this.cfed)
    },
    fedup(index) {
      let updateitem = this.cfed[index]
      this.cfed.splice(index, 1)
      this.$emit('fedup', [updateitem, this.cfed])
    }
  }
}
function lengthsort(a, b) {
  return a.length - b.length
}
const app = new Vue({
  el: '#app',
  components: {
    cpn2,
    cpn3
  },
  data: {
    eventlist: [
      ['unfinish', '吃饭'],
      ['finished', '睡觉'],
      ['finished', '喝水'],
      ['unfinish', '洗漱']
    ],
    unf: [],
    fed: [],
    message: ''
  },
  methods: {
    delunf(cunf) {
      this.unf = cunf
    },
    upfed(update) {
      this.fed.push(update[0])
      this.fed.sort(lengthsort)
      this.unf = update[1]
    },
    delfed(cfed) {
      this.fed = cfed
    },
    upunf(update) {
      this.unf.push(update[0])
      this.unf.sort(lengthsort)
      this.fed = update[1]
    },
    submit() {
      this.unf.push(this.message)
      this.unf.sort(lengthsort)
    }
  },
  beforeCreate() {
    alert('实例创建完成')
  },
  mounted() {
    let el = this.eventlist
    for (let i = 0; i < el.length; i++) {
      if (el[i][0] === 'unfinish') {
        this.unf.push(el[i][1])
      } else {
        this.fed.push(el[i][1])
      }
    }
    this.unf.sort(lengthsort)
    this.fed.sort(lengthsort)
  },
})