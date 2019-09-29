import headful from 'headful';

const handler = props => headful(getPassedProps(props));

export default {
    name: 'vue-headful',
    props: Object.keys(headful.props),
    watch: {
        '$props': {
            handler,
            deep: true,
            immediate: true,
        },
    },
    activated() {
        // required for keep-alive components https://vuejs.org/v2/api/#keep-alive
        handler(this.$props);
    },
    render() {},
};

function getPassedProps(props) {
    return Object.keys(props).reduce((passedProps, propKey) => {
        if (props[propKey] !== undefined) {
            passedProps[propKey] = props[propKey];
        }
        return passedProps;
    }, {});
}
