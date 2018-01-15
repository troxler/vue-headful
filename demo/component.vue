<template>
<div>
    <vue-headful
            :title="title"
            description="vue-headful description"
            keywords="example, head, javascript"
            image="http://example.com/preview.png"
            :lang="lang"
            ogLocale="en-GB"
            url="http://localhost:4000/"
            :html="{
                body: {id: 'aPageId', 'data-remove-me': undefined},
                h1: {'data-foo': 'bar'},
            }"
            :head="{
                'meta[charset]': {charset: 'utf-8'},
            }"
    />
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'vue-headful title',
            lang: 'en-US',
        };
    },
    mounted() {
        setTimeout(() => {
            // dummy async operation to show watcher on properties
            this.title = 'vue-headful title (updated)';
            this.lang = 'de-DE';
        }, 3000);
    },
};
</script>
