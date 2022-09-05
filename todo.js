var app = new Vue({
  el: "#app",
  data: {
    att: 0,
    carregando: false,
    message: "Olá Vue!",
    tasks: [],
    tasksFilter: [],
    parametroFilter: '',
    taskCreation: {
      title: "",
      dueTo: null,
      project: "",
      usuario: "",
    },
  },
  methods: {
    excluir(id) {
      fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(
        () => {
          this.getTasks()   
        },
        
      );
    },
    create() {
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.taskCreation),
      }).then(()=> {
        this.getTasks() 
      });
    },
    update() {
      fetch(`http://localhost:3000/tasks/${this.att}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.taskCreation),
      }).then(() => {
        att = 0;
        this.getTasks()
      });
    },
    getTasks() {
      this.carregando =true
      this.tasks = [];
      let appendTasks = fetch("http://localhost:3000/tasks");
      appendTasks.then((resolucao) => {
        resolucao.json().then((body) => {
          body.forEach((elementJson) => {
            this.tasks.push(elementJson);
            this.carregando = false
            filtragem()
          });
        });
      });
      
    },
    filtragem() {
      uepa = app.tasks.filter( tarefinha => tarefinha.title.includes(this.parametroFilter))

    },
    atualizador(id) {
      this.att = id;
      console.log(this.att);
    },
  },
  // fabricio editou isso e  me ensinou q tudo dentro da funcao created é executada uma vez apenas assim q o site roda
  created() {
    this.getTasks()
  },
});

const elemsModal = document.querySelectorAll(".modal");
const instancesModal = M.Modal.init(elemsModal);

// app.tasks.filter( tarefinha => tarefinha.title.includes('uepa'))