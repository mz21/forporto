<template lang="jade">
.container
  .todo_section
    TodoCard
</template>

<script>
import TodoCard from '@/components/TodoCard'

export default {
  name: 'PageTodo',
  components: {
    TodoCard
  }
  // data () {
  // }
}
</script>

<style scoped lang="sass">
  .container
    height: 85%
  .todo_section
    margin-top: 45%
    height: 55%
</style>
