1、pron文件增加 <dependency> <groupId>net.sourceforge.nekohtml</groupId> <artifactId>nekohtml</artifactId> <version>1.9.22</version> </dependency> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-thymeleaf</artifactId> </dependency>

2、resources增加 static文件夹      将 vue build出来的 dist 文件夹 放到static里 配置 application spring: thymeleaf: prefix: classpath:/static/ suffix: .html mode: LEGACYHTML5

3、controller配置      新增page controller @Controller public class pageController { @GetMapping("/") public String index() { return "dist/index"; } }
