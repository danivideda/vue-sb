Vue.component("tweet", {
  props: ['tweetText'],
  data: function () {
    return {
      tweetText: 'Hello world!',
      charactersRemaining: 280,
      commentText: '',
      liked: false
    }
  },
  methods: {
    countCharacters: function () {
      this.charactersRemaining = 280 - this.commentText.length;
    },
    toggleLike: function () {
      this.liked = !this.liked;
    }
  },
  template: `<div class="status">
  <div class="tweet-content">
    <img src="https://pbs.twimg.com/profile_images/1070775214370373633/borvu2Xx_400x400.jpg" class="logo" alt="Vue Vixens DC logo">
    <div class="tweet">
      <a href="https://twitter.com/vuevixensdc">Vue Vixens DC</a>
      <span>@VueVixensDC · Mar 20</span>
      <p class="tweet-text">
        {{ tweetText }}
      </p>
      <div class="reactions">
        <span v-on:click="toggleLike" class="like">
          <span v-if="liked">♥️</span>
          <span v-else>♡</span>
        </span>
      </div>
    </div>
  </div>
  <div class="comment-bar">
    <textarea placeholder="tweet your reply" v-model="commentText" v-on:input="countCharacters">
    </textarea>
    <span class="characters-remaining">
      {{ charactersRemaining }} characters remaining
    </span>
  </div>
</div>`
});

new Vue({ 
  el: "#app",
  data: {
    tweets: [
      {id: 1, tweetText: "Hello sekai! ガバってねこのままだ、大変ね"},
      {id: 2, tweetText: "We're fighting this together"}
    ]
  }
});