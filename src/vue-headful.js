import headful from 'headful';

export default {
    name: 'vue-headful',
    props: Object.keys(headful.props),
    created() {
        headful(getPropsData(this));
    },
    watch: extendPropFunctionsWithPropList(headful.props),
    render() {
    },
};

/**
 * Extends the prop functions for the watcher with a list of declared props on the component.
 * That is necessary so that, for example, a later change to `lang` does not overwrite `ogLocale`.
 */
function extendPropFunctionsWithPropList(headfulProps) {
    return Object.keys(headfulProps).reduce((watchers, propName) => {
        return Object.assign({}, watchers, {
            [propName]: function (newPropValue) {
                // add list of props to avoid overwriting other head properties
                return headfulProps[propName](newPropValue, getPropsData(this));
            },
        });
    }, {});
}

function getPropsData(vueInstance) {
    return vueInstance.$options.propsData;
}
