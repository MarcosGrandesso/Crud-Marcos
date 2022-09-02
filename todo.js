var app = new Vue({
  el: "#app",
  data: {
    att: 0,
    message: "Olá Vue!",
    tasks: [],
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
          console.log("passo 3");
          return false;
        }
      );
    },
    create() {
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.taskCreation),
      });
    },
    update() {
      fetch(`http://localhost:3000/tasks/${this.att}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.taskCreation),
      }).then(() => {
        att = 0;
      });
    },

    atualizador(id) {
      this.att = id;
      console.log(this.att);
    },
  },
  // fabricio editou isso e  me ensinou q tudo dentro da funcao created é executada uma vez apenas assim q o site roda
  created() {
    console.log("passo 2.1 - render");
    this.tasks = [];
    let appendTasks = fetch("http://localhost:3000/tasks");
    console.log("passo 2.2");
    appendTasks.then((resolucao) => {
      resolucao.json().then((body) => {
        // console.log(body);
        console.log("passo 2.3");
        body.forEach((elementJson) => {
          this.tasks.push(elementJson);
        });
        console.log("passo 2.4");
      });
    });
  },
});

const elemsModal = document.querySelectorAll(".modal");
const instancesModal = M.Modal.init(elemsModal);
