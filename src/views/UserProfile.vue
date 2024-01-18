<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ state.user.username}}</h1>
        <div v-if="state.user.isAdmin" class="user-profile__admin-badge">
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTweetPanel @add-tweet="addTweet" />
    </div>
      <div class="user-profile__tweets-wrapper">
        <TweetItems 
          v-for="tweet in state.user.tweets" 
          :key="tweet.id" 
          :username="state.user.username" 
          :tweet="tweet" 
        />
      </div>
  </div>
</template>

<script>
  import TweetItems from '../components/TweetItem.vue';
  import CreateTweetPanel from '../components/CreateTweetPanel.vue';
  import { reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { users } from '@/assets/users';

  export default {
    name: 'UserProfile',
    components: {
      TweetItems,
      CreateTweetPanel
    },

    setup() {
      const route = useRoute()
      const userId = computed(() => route.params.userId)

      const state = reactive({
        followers: 0,
        user: users[userId.value - 1] || users[0]
      })

      function addTweet(tweet) {
        state.user.tweets.unshift({
          id: state.user.tweets.length + 1,
          content: tweet
        })
      }

      return {
        state,
        addTweet,
        userId
      }
    }
  }
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: purple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile__create-tweet {
      border-top: 1px solid #DFE3E8;
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: red;
        border-color: red;

        button {
          background-color: red;
          border: none;
          color: white;
        }
      }
    }
  }

  .user-profile__tweets-wrapper {
    display: grid;
    grid-gap: 10px;
  }
}
</style>