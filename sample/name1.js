var namespaceGlobal = {
    name: 'global'
};

(function(window) {
    var namespace1 = {
        name: 'namespace1'
    };
    window.namespace1 = namespace1;
})(window);

console.log(namespace1);
