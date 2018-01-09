<template>
<div>
    <vue-headful
            :title="title"
            description="vue-headful description"
            keywords="example, head, javascript"
            image="http://example.com/preview.png"
            :lang="lang"
            ogLocale="en-GB"
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
