
var projectName = '考研互助交流平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '院校信息',
	url: './pages/yuanxiaoxinxi/list.html'
}, 
{
	name: '备考经验',
	url: './pages/beikaojingyan/list.html'
}, 
{
	name: '考研政策',
	url: './pages/kaoyanzhengce/list.html'
}, 
{
	name: '课程资料',
	url: './pages/kechengziliao/list.html'
}, 
{
	name: '历年真题',
	url: './pages/linianzhenti/list.html'
}, 
{
	name: '考研倒计时',
	url: './pages/kaoyandaojishi/list.html'
}, 
{
	name: '测评信息',
	url: './pages/cepingxinxi/list.html'
}, 

{
	name: '交流论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '复试调剂',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/phpl3663/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"院校信息","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"备考经验","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"考研政策","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"课程资料","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"历年真题","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"考研倒计时","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"测评信息","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息管理"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","修改","删除","审核"],"menu":"在线测评","menuJump":"列表","tableName":"zaixianceping"}],"menu":"在线测评管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除"],"menu":"打卡信息","menuJump":"列表","tableName":"dakaxinxi"}],"menu":"打卡信息管理"},{"child":[{"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"交流论坛","tableName":"forum"}],"menu":"交流论坛"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"复试调剂","tableName":"news"},{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-list","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-full","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"院校信息列表","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"备考经验列表","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"考研政策列表","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策模块"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"课程资料列表","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"历年真题列表","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题模块"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看"],"menu":"考研倒计时列表","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","测评"],"menu":"测评信息列表","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","删除"],"menu":"在线测评","menuJump":"列表","tableName":"zaixianceping"}],"menu":"在线测评管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"打卡信息","menuJump":"列表","tableName":"dakaxinxi"}],"menu":"打卡信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"院校信息列表","menuJump":"列表","tableName":"yuanxiaoxinxi"}],"menu":"院校信息模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"备考经验列表","menuJump":"列表","tableName":"beikaojingyan"}],"menu":"备考经验模块"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"考研政策列表","menuJump":"列表","tableName":"kaoyanzhengce"}],"menu":"考研政策模块"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"课程资料列表","menuJump":"列表","tableName":"kechengziliao"}],"menu":"课程资料模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"历年真题列表","menuJump":"列表","tableName":"linianzhenti"}],"menu":"历年真题模块"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看"],"menu":"考研倒计时列表","menuJump":"列表","tableName":"kaoyandaojishi"}],"menu":"考研倒计时模块"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","测评"],"menu":"测评信息列表","menuJump":"列表","tableName":"cepingxinxi"}],"menu":"测评信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
