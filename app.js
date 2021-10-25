const App = {
    data() {
        return {
            placeholderString: 'Enter task',
            title: 'Список дел',
            inputValue:'',
            notes: ['Заметка 1','Заметка 2']
        }
    },
    methods: {
    intupChangeHandler(event){
        

        this.inputValue = event.target.value
    },
    addNewNote(){
        this.notes.push(this.inputValue)
        this.inputValue = ''
    },
    itemDelete(id, event){
       this.notes.splice(id,1)
       
    }
}
}

const app =Vue.createApp(App).mount('#app')
