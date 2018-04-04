import headful from 'headful';

export default {
    name: 'vue-headful',
    props: Object.keys(headful.props),
    watch: {
        '$props': {
            handler: (props) => headful(getPassedProps(props)),
            deep: true,
            immediate: true,
        },
    },
    render() {
    },
};

function getPassedProps(props) {
    return Object.keys(props).reduce((passedProps, propKey) => {
        if (props[propKey] !== undefined) {
            passedProps[propKey] = props[propKey];
        }
        return passedProps;
    }, {});
}
