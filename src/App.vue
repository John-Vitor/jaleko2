<!-- <template> -->
  
  <!--<div id="app"> -->

    <!-- <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube> -->
    <!-- <li v-for='(video, i) of videosComFiltro' :key='i'></li> -->

  <!-- </div> 

</template>


<script>



/* export default {
 data() {
    return {
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      }
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },

  computed: {
    player() {
      return this.$refs.youtube.player
    },

  created: function () {
        let promise = this.$http.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&q=Jaleko+Acadêmicos&maxResults=15&key=AIzaSyCryVVK892IN6ykTw3YGadIGFFtLX8f6dY')
    promise
    .then(res => res.json()) // quando recebe os dados / normalmente uma API REST devolve a resposta no padrao JSON (representacao textual de um objeto JavaScript)
    .then(videos => this.videos = videos, err => console.log(err)); // para possiveis erros caso de errado alguma coisa
  }

  },

  methods: {
    getId () {
      return this.$youtube.getIdFromUrl(this.video.url)
    }
  }

}
*/ 


</script>

<style>



</style>
