
axios基于promise用于浏览器和nodejs的http客户端

特点：
    支持浏览器和nodejs
    支持promise
    能拦截请求和响应
    能转换请求和响应数据
    能取消请求
    自动转换JSON数据
    浏览器端支持防止CSRF（跨站请求伪造）

安装
    npm： npm install axios

例子
GET请求
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

// Optionally the request above could also be done as
axios.get('/user', {
params: {
ID: 12345
}
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

POST请求
axios.post('/user', {
firstName: 'Fred',
lastName: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

同时发起多个请求
function getUserAccount() {
return axios.get('/user/12345');
}

function getUserPermissions() {
return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));


axios API
通过导入相关配置发起请求
// 发起一个POST请求
axios({
method: 'post',
url: '/user/12345',
data: {
firstName: 'Fred',
lastName: 'Flintstone'
}
});
// 获取远程图片
axios({
method:'get',
url:'http://bit.ly/2mTM3nY',
responseType:'stream'
})
.then(function(response) {
response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});

axios(url[,config])
// 发起一个GET请求（GET是默认的请求方法）
axios('/user/12345');

请求方法别名
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
当使用以上别名方法时，url，method和data等属性不用在config重复声明。

同时发生的请求
axios.all(iterable)
axios.spread(callback)
使用
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
// Both requests are now complete
}));


创建一个实例
创建一个拥有通用配置的axios实例
axios.create({config})
var instance = axios.create({
baseURL: 'https://some-domain.com/api/',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});

实例方法
axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#options(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])

请求配置
{
// `url` 是请求的接口地址
url: '/user',

// `method` 是请求的方法
method: 'get', // 默认值

// 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
// 用来区分不同环境，建议使用
baseURL: 'https://some-domain.com/api/',

// 用于请求之前对请求数据进行操作
// 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
// 最后一个函数需return出相应数据
// 可以修改headers
transformRequest: [function (data, headers) {
// 可以对data做任何操作

return data;
}],

// 用于对相应数据进行处理
// 它会通过then或者catch
transformResponse: [function (data) {
// 可以对data做任何操作

return data;
}],

// `headers` are custom headers to be sent
headers: {'X-Requested-With': 'XMLHttpRequest'},

// URL参数
// 必须是一个纯对象或者 URL参数对象
params: {
ID: 12345
},

// 是一个可选的函数负责序列化`params`
// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
paramsSerializer: function(params) {
return Qs.stringify(params, {arrayFormat: 'brackets'})
},

// 请求体数据
// 只有当请求方法为'PUT', 'POST',和'PATCH'时可用
// 当没有设置`transformRequest`时，必须是以下几种格式
// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// - Browser only: FormData, File, Blob
// - Node only: Stream, Buffer
data: {
firstName: 'Fred'
},

// 请求超时时间（毫秒）
timeout: 1000,

// 是否携带cookie信息
withCredentials: false, // default

// 统一处理request让测试更加容易
// 返回一个promise并提供一个可用的response
// 其实我并不知道这个是干嘛的！！！！
// (see lib/adapters/README.md).
adapter: function (config) {
/* ... */
},

// `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
// This will set an `Authorization` header, overwriting any existing
// `Authorization` custom headers you have set using `headers`.
auth: {
username: 'janedoe',
password: 's00pers3cret'
},

// 响应格式
// 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
responseType: 'json', // 默认值是json

// `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
xsrfCookieName: 'XSRF-TOKEN', // default

// `xsrfHeaderName` is the name of the http header that carries the xsrf token value
xsrfHeaderName: 'X-XSRF-TOKEN', // default

// 处理上传进度事件
onUploadProgress: function (progressEvent) {
// Do whatever you want with the native progress event
},

// 处理下载进度事件
onDownloadProgress: function (progressEvent) {
// Do whatever you want with the native progress event
},

// 设置http响应内容的最大长度
maxContentLength: 2000,

// 定义可获得的http响应状态码
// return true、设置为null或者undefined，promise将resolved,否则将rejected
validateStatus: function (status) {
return status >= 200 && status < 300; // default
},

// `maxRedirects` defines the maximum number of redirects to follow in node.js.
// If set to 0, no redirects will be followed.
// 最大重定向次数？没用过不清楚
maxRedirects: 5, // default

// `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
// and https requests, respectively, in node.js. This allows options to be added like
// `keepAlive` that are not enabled by default.
httpAgent: new http.Agent({ keepAlive: true }),
httpsAgent: new https.Agent({ keepAlive: true }),

// 'proxy' defines the hostname and port of the proxy server
// Use `false` to disable proxies, ignoring environment variables.
// `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
// supplies credentials.
// This will set an `Proxy-Authorization` header, overwriting any existing
// `Proxy-Authorization` custom headers you have set using `headers`.
// 代理
proxy: {
host: '127.0.0.1',
port: 9000,
auth: {
username: 'mikeymike',
password: 'rapunz3l'
}
},

// `cancelToken` specifies a cancel token that can be used to cancel the request
// (see Cancellation section below for details)
// 用于取消请求？又是一个不知道怎么用的配置项
cancelToken: new CancelToken(function (cancel) {
})
}

响应组成
{
// 服务端返回的数据
data: {},

// 服务端返回的状态码
status: 200,

// 服务端返回的状态信息
statusText: 'OK',

// 响应头
// 所有的响应头名称都是小写
headers: {},

// axios请求配置
config: {},

// 请求
request: {}
}

axios.get('/user/12345')
.then(function(response) {
console.log(response.data);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers);
console.log(response.config);
});

默认配置
全局修改axios默认配置
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

实例默认配置
// 创建实例时修改配置
var instance = axios.create({
baseURL: 'https://api.example.com'
});

// 实例创建之后修改配置
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

配置优先级
配置项通过一定的规则合并，request config > instance.defaults > 系统默认，优先级高的覆盖优先级低的。


// 创建一个实例，这时的超时时间为系统默认的 0
var instance = axios.create();

// 通过instance.defaults重新设置超时时间为2.5s，因为优先级比系统默认高
instance.defaults.timeout = 2500;

// 通过request config重新设置超时时间为5s，因为优先级比instance.defaults和系统默认都高
instance.get('/longRequest', {
timeout: 5000
});


拦截器

可以在then和catch之前拦截请求和响应


// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
// Do something before request is sent
return config;
}, function (error) {
// Do something with request error
return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
// Do something with response data
return response;
}, function (error) {
// Do something with response error
return Promise.reject(error);
});
如果之后想移除拦截器你可以这么做

var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

你也可以为axios实例添加一个拦截器


var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});


错误处理


axios.get('/user/12345')
.catch(function (error) {
if (error.response) {
// 发送请求后，服务端返回的响应码不是 2xx
console.log(error.response.data);
console.log(error.response.status);
console.log(error.response.headers);
} else if (error.request) {
// 发送请求但是没有响应返回
console.log(error.request);
} else {
// 其他错误
console.log('Error', error.message);
}
console.log(error.config);
});


可以用validateStatus定义一个http状态码返回的范围


axios.get('/user/12345', {
validateStatus: function (status) {
return status < 500; // Reject only if the status code is greater than or equal to 500
}
})


取消请求
通过cancel token来取消请求

const CancelToken = axios.CancelToken;const source = CancelToken.source();axios.get('/user/12345', {cancelToken: source.token}).catch(function(thrown) {if (axios.isCancel(thrown)) {console.log('Request canceled', thrown.message);} else {// 处理错误}});axios.post('/user/12345', {name: 'new name'}, {cancelToken: source.token})// 取消请求（message 参数是可选的）source.cancel('Operation canceled by the user.');

还可以通过传递一个 executor 函数到 CancelToken 的构造函数来创建 cancel token：


const CancelToken = axios.CancelToken;let cancel;axios.get('/user/12345', {cancelToken: new CancelToken(function executor(c) {// executor 函数接收一个 cancel 函数作为参数cancel = c;})});// cancel the requestcancel();


使用 application/x-www-form-urlencoded format
默认情况下，axios将JavaScript对象序列化为JSON。 要以application / x-www-form-urlencoded格式发送数据，您可以使用以下选项之一。

浏览器


在浏览器中，您可以使用URLSearchParams API，如下所示：


const params = new URLSearchParams();params.append('param1', 'value1');params.append('param2', 'value2');axios.post('/foo', params);

或者，您可以使用qs库编码数据：


const qs = require('qs');axios.post('/foo', qs.stringify({ 'bar': 123 }));

或者以另一种方式（ES6），


import qs from 'qs';const data = { 'bar': 123 };const options = {method: 'POST',headers: { 'content-type': 'application/x-www-form-urlencoded' },data: qs.stringify(data),url,};axios(options);






