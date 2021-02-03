/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f6b1bb4f3fc35e672c0fddc577e434d7"],["/Just/Just.css","7e170cfd1d8cc1cc32645eaa435f6a61"],["/Just/Just.js","ea82e200d95e38bf8c42a380bb5eb6cd"],["/about/index.html","2820f86684769561219a1e0a1cfd9b72"],["/archives/2020/04/index.html","00bf3c1f2fac791d5b61820236638512"],["/archives/2020/05/index.html","10cf0046f8e78b49565d096b328a254b"],["/archives/2020/06/index.html","06fe0a60cd84207219111a022dce8a6a"],["/archives/2020/07/index.html","cda8432d5a968040b239096c398fd516"],["/archives/2020/08/index.html","fa5a9b5d5da2f96b9b56763ecaaa9a9d"],["/archives/2020/08/page/2/index.html","9cbe6ad8ce957a2681c5a977bac8d99e"],["/archives/2020/08/page/3/index.html","7219668c58279c3c23255b164e2c69fc"],["/archives/2020/09/index.html","0732f79b0fcfbac4be45fab65ac47e51"],["/archives/2020/12/index.html","b69500672d40908d9ba5ffbc1e0c2b7b"],["/archives/2020/12/page/2/index.html","dead32d521b98e8596bd338017504fa9"],["/archives/2020/12/page/3/index.html","a701338a3d701344a651f279f36a9e23"],["/archives/2020/index.html","4312a428190d426438efbcd6d64a03c7"],["/archives/2020/page/2/index.html","5add5351d32fb697933351307fcfc357"],["/archives/2020/page/3/index.html","2a42d93169a4e2b6e7c0f9350670327a"],["/archives/2020/page/4/index.html","91dc7fbdb6ddc45c22ef7d3596c88018"],["/archives/2020/page/5/index.html","94f11c2cfe23bbe1f69556aa519e00a9"],["/archives/2020/page/6/index.html","3a50edbf274f2a7015b10a7dde2d0743"],["/archives/2020/page/7/index.html","585d5a62e39c5364a8596e088c452d09"],["/archives/2020/page/8/index.html","a2c82fcfff2ecd4a4493fc9fd598f609"],["/archives/2021/01/index.html","c7444bc47ea7d821963b8464f04f5392"],["/archives/2021/index.html","195129a88624153e6a4c2c3125ca1059"],["/archives/index.html","229d16796c9e0206c587bf4910d2a420"],["/archives/page/2/index.html","6519a6cfdba9a96b373f6a7a826c5b61"],["/archives/page/3/index.html","9279a910a83dea2fa4603e6357b1c330"],["/archives/page/4/index.html","38f9c31dea5b5ea780dc89ab19afb2e0"],["/archives/page/5/index.html","cc0c7015e7d9ce56eedbdd19f9989d82"],["/archives/page/6/index.html","50761baa25be9c4854c42d32c0a9daa4"],["/archives/page/7/index.html","7b28998628218f451f67b1684a5d7902"],["/archives/page/8/index.html","c97829ec102085dd647287732c84a522"],["/archives/page/9/index.html","a4aa54dcc2a8f001611421f28fac9cdb"],["/books/index.html","658d2e4291ef3c310f830dafabd039d9"],["/categories/C/index.html","ace5b7df3a245ed3ccba2266e224d18a"],["/categories/C/扫雷破解/index.html","a4aea525a0ec48a8cd265c6efa210832"],["/categories/C/读-写文件/index.html","23bf88e7b6e16180868e77fd3f2b36b0"],["/categories/C/递归/index.html","abf35ecb0eeec869d6f292b5ebdbc25e"],["/categories/Java/BeanUtils/index.html","73cb26bb4998333279bb9cfcd52770ff"],["/categories/Java/IO/index.html","28ea35590081dac79f67b9e68f8de06f"],["/categories/Java/Maven/index.html","2f61fd6d4ad61d1874b3b1d4cced45cc"],["/categories/Java/index.html","440b24c7a77364db2e0ca66b66ea832c"],["/categories/Java/动态代理/index.html","c2bfc41a272f59946180a4e515e0dac9"],["/categories/Java/反射/index.html","47882a937a8072ebf44d1b74083b2584"],["/categories/Java/耦合与解耦/index.html","fbc1603f81e67a46df6a3a3faed13483"],["/categories/Java/集合/index.html","df7162613d9654f77f40ed9d86a9fb8e"],["/categories/Mysql/JDBC/index.html","66a46ac8b8ce1f9484b975b1642ec874"],["/categories/Mysql/index.html","a22d2127dbaa92fcdc93cf0ffbe762d2"],["/categories/Mysql/数据库连接池/index.html","d52571603ea2cd5d226fbe095573f7e7"],["/categories/Python/index.html","9541c63cb9a1384f321eb92cab99fe3f"],["/categories/Python/内置函数/index.html","431970c6c6afefcdee67a2e9ebd83eb7"],["/categories/Python/函数/index.html","60d735ae23c46354b02c0eee547e1299"],["/categories/Spring/AOP/XML/index.html","c84c88e81bc07378a65d003b87101533"],["/categories/Spring/AOP/index.html","8b9104fd3d8f6671f9927b2a4aa33872"],["/categories/Spring/AOP/注解/index.html","320a6ca53385edddd963ce3895cc6c97"],["/categories/Spring/CRUD/index.html","572c099808413aaa112ef422950cd629"],["/categories/Spring/IOC/index.html","7e6b26cb9a53c7ddd9363e00645e9d36"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","57f97279d0e03cdd6a7d8b9bcc879cb0"],["/categories/Spring/IOC/耦合与解耦/index.html","4c8d6ed1e3906c631580c9a811cc9bb6"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","2ca9d2650d5371544ec0bce8187b8f08"],["/categories/Spring/JDBC/Mysql/index.html","532ba5661227ffdd5fc2a6bbf9d509bf"],["/categories/Spring/JDBC/index.html","006805495b3f8d44922296e872faf99e"],["/categories/Spring/SSM/index.html","a199cd2a0c48c682c2fc06c1319e3210"],["/categories/Spring/index.html","d8d5cdea9ddc233b4985665ab9503a7c"],["/categories/Spring/page/2/index.html","8bf4911bf8975f4eee75a7254d372f36"],["/categories/Spring/事务控制/AOP/index.html","bd110cdfbdcb17cdbd2e9aa83b4f168c"],["/categories/Spring/事务控制/index.html","777f44f3363fa38dbef9c5771d2b58d3"],["/categories/Spring/依赖注入/index.html","3e873b1ce4c3bbe5fd22cc1b72ab19fb"],["/categories/Spring/概述/index.html","8e90d1a501a94b6fb943321dc88eab31"],["/categories/SpringBoot/Filter/index.html","c3f7b654022c1e4a57322538d70bd54d"],["/categories/SpringBoot/Logback/index.html","9810dd714eac85ff14a8fb01146c08f6"],["/categories/SpringBoot/Mybatis/index.html","5600ff129a071972624034cfb9dbf44b"],["/categories/SpringBoot/RESTFul/index.html","e6c66d25e7c974470a21c4c5daba96f3"],["/categories/SpringBoot/Redis/index.html","7ed79a9f1942b94bd83b82d503897b22"],["/categories/SpringBoot/Servlet/index.html","92e61be2f56e301f7565ebc3241322df"],["/categories/SpringBoot/Thymeleaf/index.html","b9e55d14936c3836d731ad5d3cf3fd86"],["/categories/SpringBoot/Transacation/index.html","756e0e76782837f09d41bd7e9081b530"],["/categories/SpringBoot/index.html","3d2b53132f576ef0e609f73d07d0010b"],["/categories/SpringBoot/page/2/index.html","b6f6677f5ca192bbf0e1d801ea0924f4"],["/categories/SpringBoot/字符编码/index.html","11f4b785bf826bda8b901a76979da966"],["/categories/SpringBoot/拦截器/index.html","0010d28f0c72b62a84b7d5310e83465a"],["/categories/SpringBoot/注解/index.html","afd05f290d4ad835d8f5749fdc964ab2"],["/categories/SpringMVC/index.html","b996bb87a14023bac7250a05e6bf6d30"],["/categories/SpringMVC/入门/index.html","4ecad325130efb84e555b94ca4bc9008"],["/categories/SpringMVC/参数绑定/index.html","cf566e6637fbe649e9836766ba3157af"],["/categories/SpringMVC/异常处理/index.html","2e24d1cdc5663b8803342048375818fb"],["/categories/SpringMVC/拦截器/index.html","3dfa89942bdbcfe5d738868b38fd3313"],["/categories/SpringMVC/数据-视图/index.html","c5e0746c0dbbf5507dba6cd890b1d0dd"],["/categories/SpringMVC/文件上传/index.html","5a757d454fe7e1d01cff89d4d4348a53"],["/categories/SpringMVC/概念/index.html","ef154a42e0f12d5e080c9b0aaf04b241"],["/categories/SpringMVC/注解/index.html","4b3d6d82a25ca953250532c9870ceb4a"],["/categories/Thymeleaf/index.html","e3c40434fe51aa1550f44b564c5e9808"],["/categories/Thymeleaf/字面量/index.html","49385b174216f926f52f9972d701f10c"],["/categories/Thymeleaf/运算符及表达式/index.html","11aebda1aba8eb4b0d8902edaca79198"],["/categories/Vue/index.html","2bea971cfc19231f7c7e0cd89c96224a"],["/categories/Vue/基础语法/index.html","846d771dd840a34240d1cde5a28875e7"],["/categories/Vue/生命周期/index.html","363c9058b74c697c9695f72af2772c37"],["/categories/Vue/组件化开发/index.html","9f800563ead1d7fbcc628f260d978048"],["/categories/Zookeeper/Shell/index.html","7c6f7ef5f063fbebb6f7638ea2febe43"],["/categories/Zookeeper/acl/index.html","4ef53552e32a825d6cbf4fd44faf71f3"],["/categories/Zookeeper/curator/index.html","46c8bc3672de4107dff3c020bdcaf8ae"],["/categories/Zookeeper/index.html","fb73b951ec521e9701710aa254dbe743"],["/categories/Zookeeper/javaAPI/index.html","5a1a06679cc238dbb210df366e1e1ea3"],["/categories/Zookeeper/page/2/index.html","477e2ea50de6bfdfbe316f4bc47c89f6"],["/categories/Zookeeper/taokeeper/index.html","80de065b194c7dd385f37c0e04dbea75"],["/categories/Zookeeper/zab协议/index.html","79fa8b2fa45481cbf04aff10e120a308"],["/categories/Zookeeper/zab协议/leader选举/index.html","944f6220fc8eaa5512ee166c80b43edb"],["/categories/Zookeeper/事件监听机制/index.html","99d3d40cbae9e67ab8f96fe8e1c091f2"],["/categories/Zookeeper/四字监控命令/index.html","1f76d7118c699e182d8e24d33c774404"],["/categories/Zookeeper/安装/index.html","90ed56ba4f2af253d0cd743152841fcf"],["/categories/Zookeeper/集群/index.html","877deb2f6b6b533df2fb2f513a8cb4ba"],["/categories/index.html","139a081e3249a07301437f5133d7d51f"],["/categories/mybatis/CRUD/index.html","a0ef9b1c7846371fca862e96a2700d6c"],["/categories/mybatis/Mysql/index.html","e0188033e634ffc38959f928d63533e9"],["/categories/mybatis/Mysql/多表联合/index.html","5ce6cddbfdcc8646e3343499befd78d8"],["/categories/mybatis/Mysql/多表联合/xml/index.html","e232106ab0226292a78e1f036e1c746e"],["/categories/mybatis/Mysql/多表联合/注解/index.html","d94be8866e98ce4ff9ff69668139d678"],["/categories/mybatis/Mysql/延迟加载/index.html","ad8a50f4d59afb4d0bfa449790b39655"],["/categories/mybatis/Mysql/缓存/index.html","132c3bf1ad0af937c81e9be9b8ab3637"],["/categories/mybatis/index.html","d1f8e3106682749906a890cb315e9bd5"],["/categories/mybatis/page/2/index.html","f2a07f66cec261b4d31dc77f7f650dff"],["/categories/mybatis/动态SQL/index.html","b6986a2e30e22a12edd3924b011179cf"],["/categories/mybatis/参数/index.html","9a1a23a48e7fcb888b22bb3551d39e8b"],["/categories/mybatis/框架/index.html","fb9e7e98a13d47395a9aff9cb5d497e5"],["/categories/mybatis/配置文件/index.html","4f7c03b27e5801cc45350ee00668782b"],["/categories/教程/CentOS/index.html","d21cbc665a405cc114239f3d727da21e"],["/categories/教程/CentOS/虚拟机/index.html","1a74464360b9e684be9f12255c94326d"],["/categories/教程/Jdk/Linux/index.html","d66e60a6f80c71d1008380172142c80d"],["/categories/教程/Jdk/Windows/index.html","10a4550909d64a32553d7ea473dcdf4d"],["/categories/教程/Jdk/index.html","9ef6bb4018a92988ad5ff93b22138d00"],["/categories/教程/MacOS/iTerm/index.html","3cef25aea14ccd24faf2c6c7541341b5"],["/categories/教程/MacOS/index.html","3e2c22c473781733c3ed7a111b0232dc"],["/categories/教程/Mysql/Linux/index.html","be2ecebd049b5ad29031f858afb69ab3"],["/categories/教程/Mysql/Windows/index.html","50b404b29c3d792725d3b35291671afd"],["/categories/教程/Mysql/index.html","cc0c13488ae3fd34a8c9448a1a441d53"],["/categories/教程/Redis/index.html","c32fe83601221fd1247d81d93b8125ee"],["/categories/教程/Tomcat/index.html","322b79bf18cbe8d532e0913cf5880d65"],["/categories/教程/gcc-g/Windows/index.html","bb8f13c9614373bb36914dd153982312"],["/categories/教程/gcc-g/index.html","9d1f2de6c5ca70d03aea4cdbfc7fbeed"],["/categories/教程/index.html","813330abfdcf4674ea581a0abc276ed0"],["/categories/教程/vscode/index.html","d689ba58e776de85263a1976d0822740"],["/contact/index.html","1763895d5617b33b4a82b448e2dc169b"],["/css/index.css","1af10641a3db73cbf800f13b8ffc29d9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","5929325e17f6ee72b5e3825d5f1f1883"],["/home/index.html","cc95cc067d2aa9282c97c12d09a28593"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","4bc8ce4a06b134c276505728e9f58d18"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","e6701086b0715225ca70cf793e592a5a"],["/movies/index.html","5ba93338f59924b6882de0c9b8d3b4c1"],["/music/index.html","88f49453f4367560d6e52235437fbf1b"],["/page/2/index.html","eddf016ad07d8e537af5d800df2421ce"],["/page/3/index.html","b2174fb84eef5f79ddc40e405e539b9e"],["/page/4/index.html","632c5be1327f0a7dc431100075af191c"],["/page/5/index.html","f7b55b505584d905552e9d91f212e5ed"],["/page/6/index.html","a6c54ba8c8017bc72a09d8b1162a58a6"],["/page/7/index.html","70afccbf9a594cb7e99b31f52ceb2a74"],["/page/8/index.html","132244cda0396a975eb265fe8477289f"],["/page/9/index.html","d2fecf63e67b28ae661a3a43d79041af"],["/posts/Aop_aoptx.html","cbcee2125eec685ed0f82baf4b39117b"],["/posts/Jdbc_study.html","116ce877325c5097590efcc0444560f8"],["/posts/Maven_study.html","edb520d01b192b1694afb223ce89bd92"],["/posts/SpringBoot_Interceptor.html","a57efd563bec2199f5690e8a0ab53cdf"],["/posts/SpringBoot_ano.html","75060e05e5384a0fe74d0259832bb55b"],["/posts/SpringBoot_myabtis.html","60ea5a7c2271ef0a837c87fbece485cc"],["/posts/SpringBoot_start.html","f770914ac64a581e043c271bf4d8a029"],["/posts/SpringBoot_tran.html","c7cf02cce023637a0b4df56f568fe91a"],["/posts/SpringIoc_XML.html","0b2abd141d7b29f6e0543e42632be3d3"],["/posts/SpringIoc_anno.html","fa8ccf6c1931a6b56bdc28ddd037ed14"],["/posts/SpringIoc_yilai.html","ad08727a5f62777c3597a31e74faac13"],["/posts/SpringMVC_con.html","488ecf23597552b83ecffd42559d49d1"],["/posts/SpringMVC_data_view.html","1c47eeeb7730fe872ae2c71e4625a3a7"],["/posts/SpringMVC_interceptor.html","7eb6e63ac03ccab002d76cda40e326ae"],["/posts/SpringMVC_start.html","23c0b2b5de9e31ff8f405f07b164e7b4"],["/posts/SpringMvc_anno.html","a3125cec7fe1cffee7a52b5c1af47b34"],["/posts/SpringMvc_exception.html","dbd47242ca34545a75008f63ea8fbb78"],["/posts/SpringMvc_para.html","76f8ae49aaec6a69d13e3c3cf02d6d73"],["/posts/Spring_Aop_anno.html","388acca0fa69314bf3eb83cf1aceee6a"],["/posts/Spring_Aop_xml.html","65d2bf90a358c11ae1586d35ae06e359"],["/posts/Spring_CRUD_XML.html","31cfb06a4179ca1eb9b4c317a73c10ab"],["/posts/Spring_CRUD_anno.html","9b0e57ec0c3f95c3d1b508769610ee4e"],["/posts/Spring_aoptx.html","614a9db2663008520628baea436319f9"],["/posts/aop.html","570909b025e2efba3677b9b535452166"],["/posts/beanutils_to.html","c1ea1a40141bc27e7a575a9c0a1c58fa"],["/posts/c_file.html","1175fa7a92ecf814ec138d5df7679d5b"],["/posts/coupling.html","173ab97c7437a9f3562fc012c48ad7c3"],["/posts/database_link.html","6b96c99e3dc70ad04c3135f30d33992f"],["/posts/java_io.html","7436f5858d8c9f2b8e2a1e4ea900ee8a"],["/posts/java_list.html","8c5956bb462e13bfadf760fd02a537c3"],["/posts/java_proxy.html","28faf92dd7120e2d509398682e3138eb"],["/posts/java_re.html","a55e3c235a8cbe7300e48fc5a0efa231"],["/posts/linux_jdk.html","eb3b7ddef5b6c576ab9fc922f1a98305"],["/posts/linux_tomcat.html","94a55e40e0068833fe462afb53f0f5c3"],["/posts/macOS_shell.html","09e86f4d5c1e8bab7bd4e5e291a6221e"],["/posts/mine_Crack.html","97b68f2462a091caafd7c14075fc52ca"],["/posts/mybatis.html","5eb6433bb0a9c4aad74ecebb29e36502"],["/posts/mybatis_cache.html","d387557d2afffcbcef6735bff4208fba"],["/posts/mybatis_crud.html","a28664eb6bba4a0911703769457e13c5"],["/posts/mybatis_deploy.html","1b796bb0001cdf42a942f82cc003d567"],["/posts/mybatis_dyn.html","6dcb8604a55c257064aa27301019e0ce"],["/posts/mybatis_en.html","27cfe81efb652e5e55d5e20e01091def"],["/posts/mybatis_lazy.html","1383ac816d2a4ef56a6f6ea36c64869a"],["/posts/mybatis_para.html","1ce06dfb798e130fb14baa8a5f11278e"],["/posts/mybatis_res.html","32d4f2c0875bc00194e390181ddde509"],["/posts/mybatismany_anno.html","bd0c5f3a4d2dbbdeb862154ae4898bb6"],["/posts/mybatismany_xml.html","37b18f1941aa63ce47d30b37ae4d01e9"],["/posts/one_web.html","409f7cd2b64078b62451627fa667a316"],["/posts/python_Built.html","b07e98a88ef9a86287942439ffa8d9b7"],["/posts/python_functions.html","8a866b83d7247593cff8d32e30b3d2be"],["/posts/recursion.html","58df21d68bad07c9b2ab0d8c1f50561f"],["/posts/redis_dw.html","e43c41dfac7aa9ec8daabe0a659cdaec"],["/posts/springMvc_.html","71b9e1433d3d3714f6c0c72c83439357"],["/posts/spring_jdbc.html","37d935883d3efbfded4568cebe15d39f"],["/posts/spring_sum.html","d4c086cba3a293c2dd80e5af87d82734"],["/posts/springboot_character.html","638479b5186fffc71a06d98479541a19"],["/posts/springboot_filter.html","1e869572cd567ba19a7c58a82d7da0dc"],["/posts/springboot_logback.html","366ed1658731a7203be3442aa6805918"],["/posts/springboot_restful.html","4afb1a4c55d1fbafb82df7935baa9e2e"],["/posts/springboot_servlet.html","85a9ddee237263fdc90d22b98fa4619d"],["/posts/springboot_thymeleaf.html","8c60fab21e8526e103279a878c0faa97"],["/posts/ssm.html","4fdeaf736cd78d63b3868653fe663192"],["/posts/thymeleaf_attribute.html","baedd5c3c8529770f15cb75ecde7b629"],["/posts/thymeleaf_literal.html","4c385ddbf86817e1bc2a10a643f0fe1a"],["/posts/tomcat_ins.html","2ff032db964926b1d899813500db5fdd"],["/posts/vm_centos.html","36a5fe6b8b0ad2cd6e26ca870335d2f3"],["/posts/vscode_c.html","5fab3f9dc93307e74989b327fc2a6505"],["/posts/vue_com_dev.html","d6add3f7f16e2b598329a0cd3bdabdf5"],["/posts/vue_grammar.html","536cc7eb8d2a4d4d3cca0e773d0d46fe"],["/posts/vue_sm.html","4b966ff6350c9f6b7d3e4a05fed5e05c"],["/posts/vue_start.html","656428bd457af7d997badf4db6b67922"],["/posts/windows_gcc.html","b9b1da9eeffb9ab88455fec7f4ea82e8"],["/posts/windows_jdk.html","952b71d70631b42e357d48f38169adaa"],["/posts/windows_mysql8.html","cfbc9ac61f8921e4601121d5cdbd5b1b"],["/posts/zookeeper_acl.html","7b2d8a1001a877977f5293061c453313"],["/posts/zookeeper_colony.html","e05206a19c1d40f6c903b485e2007ba3"],["/posts/zookeeper_command.html","4849c42e5d1b875209568c8f20481755"],["/posts/zookeeper_curator.html","dd9c0bb2bda8c24468bf5468bbdf429d"],["/posts/zookeeper_dpkg.html","065a78e1ff1e4563a36b4fb83867c53f"],["/posts/zookeeper_introduce.html","3ab9df92b5a7b68139d5184e89879c3d"],["/posts/zookeeper_javaapi.html","abfacb7a884c0d9e1d864d62c510483d"],["/posts/zookeeper_shell.html","54faa298c931aae7d82709fa4d9dd2bd"],["/posts/zookeeper_taokeeper.html","e4e8077ecfed55d7a7d95a303e69a05e"],["/posts/zookeeper_watcher.html","7e5c181b547ba791bc284f8c6c413b01"],["/posts/zookeeper_zapandlea.html","ff3d25d11b06341c6eba754489b5b80e"],["/sw-register.js","212d4e8ec2c355e6fa1d5a66308b91eb"],["/tags/AOP/index.html","46a1d8b6069b3b406fd61e25cc3f57c1"],["/tags/BeanUtils/index.html","6a6dbc0b33ad83304fc2c42bb832072a"],["/tags/C/index.html","c2b26a9fb0ae6eef3f9d400755ac1bfb"],["/tags/CRUD/index.html","a633989836de22b0e55b4106c06883f0"],["/tags/CentOS/index.html","e1e02fc9cfc3b8cc4e73c9bbef330d5d"],["/tags/Filter/index.html","f078215d9209a7adeacaf7f80e20dba2"],["/tags/IO/index.html","677fd24ffb8eabe3f07be731547cb784"],["/tags/IOC/index.html","09557399320bf24b1aac7874c40b1642"],["/tags/JDBC/index.html","84f5444aac4af70c7f7dc7f4a15f52cc"],["/tags/Java/index.html","93ec0392aed21dc821e6172165c7720b"],["/tags/Jdk/index.html","15f7ebbc40ef2eaec7251ab6353946a6"],["/tags/Linux/index.html","77a5718a68eb0c1215abdf06d0d0bbb2"],["/tags/Logback/index.html","08c82207788697a4d635f591614207e9"],["/tags/MacOS/index.html","f3227008fc705547843ebfc78a900854"],["/tags/Maven/index.html","f4659a8649af9910e66141f223f7e694"],["/tags/Mysql/index.html","232833b6cd43233d2bd3b629cf2867c8"],["/tags/Python/index.html","fea806b0ab9e58bdfa2fa381b166d01f"],["/tags/RESTFul/index.html","307c33356c8767c14ad6009ad117be90"],["/tags/Redis/index.html","a8ba2d8db9d2bdbd0a407b67353ea576"],["/tags/SSM/index.html","292d96ae479e45061db5e64e132c621e"],["/tags/Servlet/index.html","53267bc87d886cb444ed07bfc1bd9de0"],["/tags/Shell/index.html","bdd0674ff138b44a805ee2c563ebc036"],["/tags/Spring/index.html","bff625c39773972ece93d717fdbf811d"],["/tags/Spring/page/2/index.html","3c65f763a51d971ced4a990eddbec5b7"],["/tags/SpringBoot/index.html","555b0e56c835f89edef3efc5ae93b7db"],["/tags/SpringBoot/page/2/index.html","b572b67663f01ac18cc5b9c905b0b21f"],["/tags/SpringMVC/index.html","7997e000a8bf9c24085e26b2d438ad21"],["/tags/Thymeleaf/index.html","4fa082e4b1d6fcd13ca47bf3e0c86493"],["/tags/Tomcat/index.html","e146d7f772a68343f4a9bdad53714f65"],["/tags/Transacation/index.html","063149ac25875b0246777cd18475b6d9"],["/tags/Vue/index.html","ad84815ce87f5d3af8a4934b1fc030cb"],["/tags/Windows/index.html","f611dcb24e694655c440c8d38f647c3a"],["/tags/Windwos/index.html","ef85e3395060bad99ff89c18b89857f1"],["/tags/XML/index.html","3e1d8fe7637e9902baa32de7fca1eb64"],["/tags/Zookeeper/index.html","3737ee1e150ece819484ee4344e69a2e"],["/tags/Zookeeper/page/2/index.html","c835a6ddce7a115b2b23094ca9632105"],["/tags/acl/index.html","47282aaf7228fe336acc6d69313dd73a"],["/tags/curator/index.html","e641d449df1f4442450734ce6442573a"],["/tags/gcc-g/index.html","94b2859cc1d97fdffb53346b93ed522c"],["/tags/iTerm/index.html","64babd5f0c4240b32dc188de1efa9dea"],["/tags/index.html","6fc28ba58b5f662bd98d86bbf7027896"],["/tags/javaAPI/index.html","eed2c6a5fe3dcf3c540e9971ff42d812"],["/tags/leader选举/index.html","8699086b149e98759a98b1d7ca649b8f"],["/tags/mybatis/index.html","a4cd8e0672404bc3f5c4b526b8011b9b"],["/tags/mybatis/page/2/index.html","09058e9174cf299816aa5dff1a6b3550"],["/tags/taokeeper/index.html","4fc195704c06b94714e3472ccf0ce344"],["/tags/vscode/index.html","28903a8e282732a7eae4bef965e33b0c"],["/tags/zab协议/index.html","c766001956a21fee82638563c0a30d41"],["/tags/事件监听机制/index.html","7debb1524429241b54201ae793208e36"],["/tags/事务控制/index.html","012e77981c1d99aac1d374cb85d65be7"],["/tags/依赖注入/index.html","9e821e211d71124809747296955a3237"],["/tags/入门/index.html","f1eb02a653b2a955add32e9368517726"],["/tags/内置函数/index.html","f5b2044d8919118324d332b9bc28e7d3"],["/tags/函数/index.html","591ffc45701fc669b4d59a5a3187b711"],["/tags/动态SQL/index.html","4222e6d6cd8699b59cd31a1185f6145a"],["/tags/动态代理/index.html","2d9ebb89bb8e1637499862cad23c31db"],["/tags/参数/index.html","20800ce667a69eaa2f2519297c0cedd0"],["/tags/参数绑定/index.html","546afd4497ba1738c78a81689454af1a"],["/tags/反射/index.html","20b52be8e56483af0f4ffbb81f5ec2f9"],["/tags/四字监控命令/index.html","30d646575dbddc1ba6ffd12ed3bf4ddb"],["/tags/基础语法/index.html","75e4a6dc0aa6abe1df95cf852b07a3b2"],["/tags/多表联合/index.html","146da863e1e8bfbf28b55537ab622bc1"],["/tags/字符编码/index.html","2b2c907f5c67f2174ca60317bedb8090"],["/tags/字面量/index.html","0ea7f8fa2054b3838d25a8c387d65ddc"],["/tags/安装/index.html","8629ccb16d50fe621bdd8426d29cb569"],["/tags/延迟加载/index.html","8d3be206ae5a80dc7cc62fed4623d10f"],["/tags/异常处理/index.html","0db739ca7ed78b4874e7b737b86733a7"],["/tags/扫雷破解/index.html","1fa7712db5adb756b22a76ded559f074"],["/tags/拦截器/index.html","d39c0e6bf8a42772d3e4e02546942508"],["/tags/教程/index.html","a1f71e998d989c58ec8f96d81b84b447"],["/tags/数据-视图/index.html","8be435eb32d9cc2221f4581fb5172f77"],["/tags/数据库连接池/index.html","7e232d488bf602eaf7220c2d8eba37de"],["/tags/文件上传/index.html","1b256a17390e7aad630020df8004610f"],["/tags/框架/index.html","c1a30e546f15788158cf3849fd279047"],["/tags/概念/index.html","f7c3a025825b5cd944e760e470e7d288"],["/tags/概述/index.html","dc7823e730995002d1fae72e2d2d9fe3"],["/tags/注解/index.html","703635f8079c355d443f5f0388657549"],["/tags/生命周期/index.html","53d8d5f72acabe1b403945d7c741a93b"],["/tags/组件化开发/index.html","cea4c9da47532ce5f4136b3dca4d090c"],["/tags/缓存/index.html","2529e3e675c4237a37bf09cb700def44"],["/tags/耦合与解耦/index.html","fee7c900c47f0f3abad982ba164f20e2"],["/tags/虚拟机/index.html","119596cae2a5634693751cd2a284ee06"],["/tags/读-写文件/index.html","e4cce072fbec13703b4e26aebc9ff8a6"],["/tags/运算符及表达式/index.html","6d538c44394857e5360f62ed3d3fd1d4"],["/tags/递归/index.html","c459ed08b7b32fe7ccd32a8685544e74"],["/tags/配置文件/index.html","e80878ab64fe9763d55f4482a2979ab2"],["/tags/集合/index.html","75f64c4c2be31d67dcfc2f0ba95d5b83"],["/tags/集群/index.html","84fdbdad1ef6dfec86de0024740b6746"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/npm/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
