<script>
    export default {
        data() {
            return {
                greeting: "Xin chào bạn, tôi tên là Quang Thọt",
                title: "Quang Thọt nè",
                changed() {
                    this.title = "title đổi rồi nè ní!";
                }
            };
        },
        methods: {
            changeGreeting() {
                this.greeting = "Hello, world!";
                this.title = "heheehe";
            },
        }
    }
</script>

<template>
    <h1>{{ greeting }}</h1>
    <a href="" v-bind:title="title">Bấm vào đây!</a>
    <button v-on:click="changeGreeting">nút đổi tile nè</button>
</template>