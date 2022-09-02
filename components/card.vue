<template>
                    <div class="card-stacked">
                    <div class="card-content">
                        <div class="d-flex spcbtn">
                            <h4>{{tarefa.title }}</h4>
                            <div class="d-flex">
                                <div class="exc" @click="excluir(tarefa.id)"> <i class="fas fa-trash trash-hover"></i> </div>
                                <div class="exc modal-trigger" href="#meu-modal2" @click=" atualizador(tarefa.id)"> <i class="fa-solid fa-pen-to-square"></i> </div>

                            </div>
                        </div>

                        <p>Tarefa id: {{tarefa.id}}</p>
                    </div>
                    <div class="card-action">
                        <p>Tarefa Criada por &nbsp;{{tarefa.usuario}}  e Deve ser feita até o dia {{tarefa.dueTo.slice(0,10)}}</p>
                    </div>
                </div>
</template>