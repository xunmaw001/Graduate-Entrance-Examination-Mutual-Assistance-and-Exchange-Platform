const base = {
    get() {
        return {
            url : "http://localhost:8080/phpl3663/",
            name: "phpl3663",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpl3663/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考研互助交流平台"
        } 
    }
}
export default base
