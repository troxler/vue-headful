import headful from 'headful';

export default {
    name: 'vue-headful',
    props: Object.keys(headful.props),
    watch: {
        '$props': {
            handler: (props) => headful(props),
            deep: true,
            immediate: true,
        },
    },
    render() {
    },
};
