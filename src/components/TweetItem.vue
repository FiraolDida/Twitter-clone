<template>
    <div class="tweet-item" @click="favouriteTweet(tweet.id)">
        <div class="user-profile__tweet">
            <div class="tweet-item__user">
                @{{ username }}
            </div>
            <div class="tweet-item__content">
                {{ tweet.content }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TweetItem',
        props: {
            username: {
                type: String,
                required: true
            },
            tweet: {
                type: Object,
                required: true
            }
        },
        methods: {
            favouriteTweet(id) {
                this.$emit('favourite', id)
            }
        }
    }
</script>

<style lang="scss" scoped>
.tweet-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .tweet-item__user {
        font-weight: bold;   
    }
}
</style>