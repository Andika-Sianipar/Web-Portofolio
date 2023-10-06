const { createApp, ref } = Vue

  createApp({
    data() {
      return{
        todoList : [
            {text: 'belajar html', start: '07:00', end: '08:00', done: false},
            {text: 'belajar css', start: '08:00', end: '09:00', done: false},
            {text: 'belajar javascript', start: '09:00', end: '10:00', done: false},
            {text: 'belajar php', start: '11:00', end: '12:00', done: false},
        ],
        startTime:'',
        endTime:'',
        activity:''
      }
    },
    methods: {
        addTodo(){
            let newItem = {
                text: this.activity,
                start: this.startTime,
                end: this.endTime,
                done: false
            }
            this.todoList.push(newItem)
        },
        deleteTodo(index){
            this.todoList.splice(index, 1)
        },
        finishTodo(index){
            this.todoList[index].done = true
        }
    }
  }).mount('#app')
