https://www.cnblogs.com/moqiutao/p/8682142.html

兼容性

响应式例子

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<title>测试页</title>
<style>
.header { grid-area: h; background: aqua; }
.menu { grid-area: m; background: aquamarine; }

.content { grid-area: c; background: bisque; }

.footer { grid-area: f; border: 1px solid #000; }

.wepper {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 350px 50px;
    grid-gap: 5px;
    grid-template-areas: " . h h h h h h h h h h . " " c c c c c c c c c c m m " " . f f f f f f f f f f . ";
}

@media screen and (max-width: 640px) {
    .wepper {
        grid-template-areas: "m m m m m m h h h h h h" "c c c c c c c c c c c c" "f f f f f f f f f f f f";
    }
}
</style>

</head>
<body>
</body>
```
