Vue.component('padre', {
    template:`
        <!--  **** DE FORMA ESTATICA ****
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre</h2>
            
            <!--Eso de numero es un dato o datos que pasamos desde el componenete padre al componenete hijo
            y por lo tanto en el hijo tenemos que añadir la propiedad PROPS.-->
           
            <hijo numero="5"></hijo>
        </div>
        -->


        <!--**** DE FORMA DINAMICA ****-->
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            <hijo :numero="numeroPadre"></hijo>
        </div>
    `,
    data(){
        return{
            numeroPadre: 0
        }
    }
})