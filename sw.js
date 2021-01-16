/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","28b421b6331d7babbd56038bad184c62"],["/about/index.html","fea0b326a5df1506ce5469e4821ac7fe"],["/archives/2020/04/index.html","db16b8af966f7de39ba5c4b336131e41"],["/archives/2020/05/index.html","c1f8f3bf899f9cfe1b471ea7965984d9"],["/archives/2020/06/index.html","746d6654e5f8f8d50d3bd2befb9ccd89"],["/archives/2020/07/index.html","9c409d4cdce8c3240175c922f9e69bbe"],["/archives/2020/08/index.html","d2a670c947c1e9e67384bd4b82917031"],["/archives/2020/08/page/2/index.html","8483879e7b0ad9d28d9c9b57b39c31af"],["/archives/2020/08/page/3/index.html","bde138fd7550abc9fcc765740bda2fa7"],["/archives/2020/09/index.html","6bad40a49f3bd4d575405eecf684d319"],["/archives/2020/12/index.html","f1ce9e44838d418f0355e70f6a059368"],["/archives/2020/12/page/2/index.html","c93b107ce357a7a2bdac085593e31ed1"],["/archives/2020/12/page/3/index.html","a5b613f656fcd582fa8562d250c1b84f"],["/archives/2020/index.html","96b6863aa7efd46201aa1231f0c9da08"],["/archives/2020/page/2/index.html","da76bc0a2e1a7cdf0bc53140d6975df0"],["/archives/2020/page/3/index.html","4087a3596b3ee8327fb24458cded9e9e"],["/archives/2020/page/4/index.html","8d01c4dcf83fb0a09123c9d4565fd774"],["/archives/2020/page/5/index.html","3bb13e56d30c883032259a5613f7dd87"],["/archives/2020/page/6/index.html","b9cdd975e6a14dd26fc92a1ab2ba4392"],["/archives/2020/page/7/index.html","bb61cff879a0fcf0cd1b12a277d2587a"],["/archives/2020/page/8/index.html","dd77f8dd49b39c0aaf1649d2f2b5d731"],["/archives/2021/01/index.html","711d05e22986e4b50602cdb29bd93de0"],["/archives/2021/index.html","bea5534d39ac1ef2cbaae5020b2d2152"],["/archives/index.html","67d09c3d71f3f600ff4c21876e3b0466"],["/archives/page/2/index.html","43971c6bfba7df2176e9a29b5a31db0b"],["/archives/page/3/index.html","c0602a3fd19ec9a2c0d15fd379120605"],["/archives/page/4/index.html","f9757e672d5fc64c789ecababdcc6d25"],["/archives/page/5/index.html","1cad7c21d90b26969b3421e95178aecf"],["/archives/page/6/index.html","634a19785acf938db2c49a9864afc33c"],["/archives/page/7/index.html","b0062976f6d1d9c1b2821b4413f90b4b"],["/archives/page/8/index.html","0f92b9281e78868f578290463965f6a5"],["/archives/page/9/index.html","24853d7df67ed7a5832af864deb09c8a"],["/books/index.html","842ee04f449d7f7b1bf1e82c2406843f"],["/categories/C/index.html","d4d42d7cdfb199f74c1cfd55e936aaf5"],["/categories/C/扫雷破解/index.html","daaf482e9a9ca1292676fab930f12160"],["/categories/C/读-写文件/index.html","b010c3de2f961ff6b27b585fdebeca8c"],["/categories/C/递归/index.html","a807eade4c479ea1da33957ac8afc4d7"],["/categories/Java/BeanUtils/index.html","22c69392794f1e40e0eca09dec48e4c0"],["/categories/Java/IO/index.html","343a581b80f7c1c0968757baa4a0fa57"],["/categories/Java/Maven/index.html","3e5f91082a93564422f58a26681661a6"],["/categories/Java/index.html","2e1acfc1690554bf722cddd25b6463fb"],["/categories/Java/动态代理/index.html","b9d1debdb66677a6388a397fc27c84ff"],["/categories/Java/反射/index.html","ba8202970b0e56c1e386e712785d9276"],["/categories/Java/耦合与解耦/index.html","009f2c309475215c83d56cb100b4464e"],["/categories/Java/集合/index.html","3f059b44a7528ef949b9a250c9c365a7"],["/categories/Mysql/JDBC/index.html","50841ef624495912d87a4942f8c4f02b"],["/categories/Mysql/index.html","90393e8a2241850af32e084c6c69f529"],["/categories/Mysql/数据库连接池/index.html","c0cd4409bf6a06bc595a4b1a9546cbc9"],["/categories/Python/index.html","683e9b5689b84fc697a9083eb78cc945"],["/categories/Python/内置函数/index.html","b9e8a61f7b93f5819ded8a4b6a303faf"],["/categories/Python/函数/index.html","6b90b23a0e55ae257228eef46cfa472e"],["/categories/Spring/AOP/XML/index.html","7fbd799c10bd6377bc85934550e32cfc"],["/categories/Spring/AOP/index.html","fd7db988a99b9820fcc6d321c2bb2cf1"],["/categories/Spring/AOP/注解/index.html","aa0e5c8aa47b92ea6ed2c99d735a0da6"],["/categories/Spring/CRUD/index.html","83958c1f02ab9eeb8bf1c5d918c1c49c"],["/categories/Spring/IOC/index.html","a741949c4f5dbbe5021a1b8aab17ffa1"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","da1c34ef2d2d3f0eb6f39b4356e1ada7"],["/categories/Spring/IOC/耦合与解耦/index.html","eab4d5fdc33917c954c9bf1d5faae945"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","449dc04ae5d6b1207beda4698400bd5b"],["/categories/Spring/JDBC/Mysql/index.html","b3212a683388dc84e501a59fc53534e6"],["/categories/Spring/JDBC/index.html","68327cf1d3b74ff1170d99305c1f99f3"],["/categories/Spring/SSM/index.html","b0c3afca78706124daedbcfff081b5b2"],["/categories/Spring/index.html","6b2c426f79b5bbd03adf3d346a1cda0d"],["/categories/Spring/page/2/index.html","6b9e0cde905f44a078e0b529cd0f8c43"],["/categories/Spring/事务控制/AOP/index.html","336f760c06983343ebaf9c716402f43a"],["/categories/Spring/事务控制/index.html","aba463e5decb956f7e4556c7a3060000"],["/categories/Spring/依赖注入/index.html","2daccb6ac15a05bbbc8e603cdb76d1bd"],["/categories/Spring/概述/index.html","621235729fc68d237bd030d11af50a91"],["/categories/SpringBoot/Filter/index.html","1c67363c51e1f3d352d330fe6aecfa23"],["/categories/SpringBoot/Logback/index.html","e16acf3640c7b2788802fd498d982078"],["/categories/SpringBoot/Mybatis/index.html","d2ed5bdedc373641a58dbaf7755164ec"],["/categories/SpringBoot/RESTFul/index.html","d45e4630b5c2c64d7199f1d9a86e1b70"],["/categories/SpringBoot/Redis/index.html","dd8cbcfb75a19ece97c2818a0030bf02"],["/categories/SpringBoot/Servlet/index.html","79572c202928c8d697b2e448be896e21"],["/categories/SpringBoot/Thymeleaf/index.html","fd0a063978bb519376a0bd538f028f85"],["/categories/SpringBoot/Transacation/index.html","deba8e132f6a2c10f95235a1f03ef054"],["/categories/SpringBoot/index.html","8024f9831ee9a62e081aa2cd808d5ca8"],["/categories/SpringBoot/page/2/index.html","83875158b608af99dee6d02b3fcffe0a"],["/categories/SpringBoot/字符编码/index.html","421bd57c4b92b802d2db5494a60f4c2d"],["/categories/SpringBoot/拦截器/index.html","fd759798051d1a717ffbac8ed626ddfb"],["/categories/SpringBoot/注解/index.html","1483f4b06448dcb90c7373c6f39ceb20"],["/categories/SpringMVC/index.html","e476d95705280d287c9a70913cfe4ee0"],["/categories/SpringMVC/入门/index.html","4ef6bce5a2b21c04b398065cefc8e89d"],["/categories/SpringMVC/参数绑定/index.html","b10bca69687d46620dee1b480cfb5309"],["/categories/SpringMVC/异常处理/index.html","011cad7500f54507a14e731de76fe2c2"],["/categories/SpringMVC/拦截器/index.html","9f02c178e1a07dcef07ce145198f68b2"],["/categories/SpringMVC/数据-视图/index.html","181139e654004c2d9cafbb75a736a512"],["/categories/SpringMVC/文件上传/index.html","ebb778660e02808a46ee931bc3bd4c3e"],["/categories/SpringMVC/概念/index.html","29c5e3cc3ff43f310b174d6b8529ac24"],["/categories/SpringMVC/注解/index.html","41bd1ceee1742964f8013d3bab64c8a7"],["/categories/Thymeleaf/index.html","ffab603a333b8266e92e7600e8498464"],["/categories/Thymeleaf/字面量/index.html","4c0700582089d9c0645c55f5a12dcc5d"],["/categories/Thymeleaf/运算符及表达式/index.html","d618f64c9d496b6d1658394792f7c21e"],["/categories/Zookeeper/Shell/index.html","2108afb92beef06f82f0abc31be51330"],["/categories/Zookeeper/acl/index.html","213dd23b29b9e270ed93229d563840c7"],["/categories/Zookeeper/curator/index.html","5da9adbb20c141a508496a65499177e9"],["/categories/Zookeeper/index.html","cca94f5f2de0b570457525d302318900"],["/categories/Zookeeper/javaAPI/index.html","862159e37b8a4a396e1328ca74b1967c"],["/categories/Zookeeper/page/2/index.html","80aa31406a28c1a1cd3837231c594ae9"],["/categories/Zookeeper/taokeeper/index.html","9634a1170fd908b3b43532b082310800"],["/categories/Zookeeper/zab协议/index.html","db3788dade9bd195ab63242449f9badc"],["/categories/Zookeeper/zab协议/leader选举/index.html","70c55287a0d9d37972aa9b1f73ba5256"],["/categories/Zookeeper/事件监听机制/index.html","4527f58f76424b46aa930484f5beba87"],["/categories/Zookeeper/四字监控命令/index.html","832b7b955f79028316834311cf544b63"],["/categories/Zookeeper/安装/index.html","45efa75aef8cb2b1af536b15af3e1dd9"],["/categories/Zookeeper/集群/index.html","5829a1656fd7497ffad0e5c0a8f80056"],["/categories/index.html","f0696db1ef4a69bab0f62e8c80c126ad"],["/categories/mybatis/CRUD/index.html","2283134b2844b4ccfcc4d0c59bb5a99e"],["/categories/mybatis/Mysql/index.html","5b4583879cb2324dfc50c4197864b3d6"],["/categories/mybatis/Mysql/多表联合/index.html","d97886c765111e7eec4310c2d20a6381"],["/categories/mybatis/Mysql/多表联合/xml/index.html","3d1981da9b1d5bd4d4b2900b9fcb89fd"],["/categories/mybatis/Mysql/多表联合/注解/index.html","dc980a6b2cf02916ae1574983dd8f709"],["/categories/mybatis/Mysql/延迟加载/index.html","95408ede657589ba4bc71286d3692988"],["/categories/mybatis/Mysql/缓存/index.html","d23cd867ea3b1f0db8bcbf51b6b64057"],["/categories/mybatis/index.html","2ca0e5b3bb4d8a8b6c7d1c0958cf1c9d"],["/categories/mybatis/page/2/index.html","ad61b53acf7572b1cabfd44375ad8f06"],["/categories/mybatis/动态SQL/index.html","36a3cdead4f2e2b0a8b2e48a54062191"],["/categories/mybatis/参数/index.html","5fbaa69d9a11c6a73ff2135b02263da9"],["/categories/mybatis/框架/index.html","da8788298640d056f5bb91f67eb66d55"],["/categories/mybatis/配置文件/index.html","5a17edaa32de5ceedd7bc60f244ce51e"],["/categories/教程/CentOS/index.html","c91e1441b35639ee692aa4f9148ed4fa"],["/categories/教程/CentOS/虚拟机/index.html","345846fa7a0a19e6b0f98f68a8e547c2"],["/categories/教程/Jdk/Linux/index.html","a2a1726a07170e4a95938b305d4aa32f"],["/categories/教程/Jdk/Windows/index.html","9b9206783683174a7ba6f21c2b1fe215"],["/categories/教程/Jdk/index.html","995b38a59cac2255d3dccfd29444b445"],["/categories/教程/MacOS/iTerm/index.html","473c01ade781ce24d511cf881f5a3e19"],["/categories/教程/MacOS/index.html","57d7af022c1dda09028b1549ad12a71c"],["/categories/教程/Mysql/Linux/index.html","e05122cd88692ff6e60e376ee5c7a496"],["/categories/教程/Mysql/Windows/index.html","337d9f68dcfd3b343662b594ccfcd6f8"],["/categories/教程/Mysql/index.html","1dea787ee024031fc0538e3a691b521f"],["/categories/教程/Redis/index.html","f8178f9b836a0ad659a4feeedab6a71a"],["/categories/教程/Tomcat/index.html","022c0113c8fe0506ef297621f0429ffb"],["/categories/教程/gcc-g/Windows/index.html","9b0f5f1cbd8042c038aa2e5b2dabd823"],["/categories/教程/gcc-g/index.html","f99980ee1427b8a7ece9bfa2349b6325"],["/categories/教程/index.html","2f93cb92e6116ec67dbd1700269b036d"],["/categories/教程/vscode/index.html","e2963b15fe51e0aaf2e22258d668e32a"],["/contact/index.html","10ae921605f2b12926641b313f3dc682"],["/css/font_icon.css","39c73f2fdfd575d03a382922f26301f5"],["/css/index.css","afa47d8a6fc5cf1db3034f114fe723a9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","674e49b6fece70540693cf8bf7e212c0"],["/home/index.html","cf6a3db52d46c5c1ed509a3da4b1a068"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","53ca777b5a9e50a335a666e3584dc817"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","f45405539fd4af241aa922e458664e59"],["/movies/index.html","b928e6f5cde9aa86d97fb3b5cb01732a"],["/music/index.html","6e0eb40f5a58909c56c1286d28b86e50"],["/page/2/index.html","c96ab2db86d96620dd42513445c7041f"],["/page/3/index.html","9856230d3724a124da05f88e82df65b5"],["/page/4/index.html","6ef298790b8d0e8754f7109095fc684b"],["/page/5/index.html","99e4ab9e599fc3896be5b89b8c9989ec"],["/page/6/index.html","777c58e0d388f1e9c7bc48a6c99c6656"],["/page/7/index.html","4d38eb41f319de2caf25d456f47e1861"],["/page/8/index.html","09aabfe7c5cf4c873fb3f89ad37c9207"],["/page/9/index.html","84f826d420c6b0fe2fcbcee7406c363c"],["/posts/1304884562.html","3e50faf9c393be395f45bbcaa00efd90"],["/posts/190540348.html","ac45a1c9b6bbb4cf17625621102c52fa"],["/posts/2205990951.html","1fa4b62f650c7d9a227bf85883474955"],["/posts/2296141139.html","6bba0fc0abdbc6c1a940096b16d1d26b"],["/posts/2322029606.html","f0de0e85805d0559612bedf8cab5e004"],["/posts/3300220287.html","488286c6ee19a8203f6b3a43e3d127b0"],["/posts/3328524930.html","f85f5f744534b1796230b10d87db0cad"],["/posts/3502553385.html","5d5046431fa42e1cc49e81de36c23546"],["/posts/3841896169.html","afbea953b79afc5588f534cdebc6b89f"],["/posts/4226563224.html","3c28a8397341864195b3cb1b40d809db"],["/posts/4292261589.html","a6be536b4a1e4af539c33c0feea7b6f5"],["/posts/663709621.html","5d712cf81fe510d50743aa4f41e66732"],["/posts/72389457.html","ce4320ad2114b9602b0b9f1c06100aa7"],["/posts/Aop_aoptx.html","419196df2ccbc932f79cf9881a43b256"],["/posts/Jdbc_study.html","e8b2ac914f56f082471e534fe1aba1ba"],["/posts/Maven_study.html","710fa352acbd448a1a518aa0d8b0f234"],["/posts/SpringBoot_Interceptor.html","625044b59ec0a9b5f964ae8eac33d6f2"],["/posts/SpringBoot_ano.html","52748708cf68cc4c0bc449932d5a9db1"],["/posts/SpringBoot_myabtis.html","adabf8cbb401c7493b13d2a1bf5dc64a"],["/posts/SpringBoot_start.html","4ded2422606c0d7c2180e74381ebdeb2"],["/posts/SpringBoot_tran.html","e51d42e6a89a22b4ccfed1f1f4e95a22"],["/posts/SpringIoc_XML.html","49d51ac9813e7017340bf3f653d7b213"],["/posts/SpringIoc_anno.html","13398b904f65ed3aa3119e46a2b88f8f"],["/posts/SpringIoc_yilai.html","efa5fd065a1c3bc6bfabfee42376c358"],["/posts/SpringMVC_con.html","f166ef734b812fceef57616e75a47760"],["/posts/SpringMVC_data_view.html","47a8d03f62ccbe86f5feb8c3ef1f4cb5"],["/posts/SpringMVC_interceptor.html","a46efb92f135851d2dcff204bc51278e"],["/posts/SpringMVC_start.html","24655688e8aee3402d7c1f23917c5ff7"],["/posts/SpringMvc_anno.html","58941bbb810ae88f7fc6d923c1a6f320"],["/posts/SpringMvc_exception.html","476014406a0f8bb87373ac39968abe12"],["/posts/SpringMvc_para.html","51fb1f36693ecb0681650abb8fb0cb38"],["/posts/Spring_Aop_anno.html","9fa50056f3c3e739b0334cb9a406af7e"],["/posts/Spring_Aop_xml.html","e4fc798a3054b811d8b3aa090c0a7d98"],["/posts/Spring_CRUD_XML.html","706aa8327b3b2ed175897c79c5668614"],["/posts/Spring_CRUD_anno.html","0f5f9b1f59f0a9ffe22e7497a1e646a3"],["/posts/Spring_aoptx.html","7dccefd60b66b82e076aa55f6e9d7be2"],["/posts/aop.html","0253fce096b6d4c6a000a41ea81ccad0"],["/posts/beanutils_to.html","8b89db366c67b9132176d25deb30aa28"],["/posts/c_file.html","cb0afd075d4cb13100a8539a7839f7a0"],["/posts/coupling.html","b6b1097e02767ae11d962544a5c974c5"],["/posts/database_link.html","095aeac3c823d7f2156957d982455a0a"],["/posts/java_proxy.html","57823d831e93ce91a08bfce576d5eae4"],["/posts/java_re.html","dffe8db797c19af12f7b4d2f6ca035b7"],["/posts/mybatis.html","998f9d5b27ae47b0248afa721f93ef46"],["/posts/mybatis_cache.html","cae9334001b346cb27d933263aefc8d1"],["/posts/mybatis_crud.html","e608bbca00be09ab514f9a2f299d3c34"],["/posts/mybatis_deploy.html","96cc3a3c76e471d5faea3b5c59cbe021"],["/posts/mybatis_dyn.html","d78659b1817a025a12c57bbf9b904da9"],["/posts/mybatis_en.html","60b08abe828e797b19a5ec6ba2240204"],["/posts/mybatis_lazy.html","b2a3a04c9368737168807c9bf2b2fe9b"],["/posts/mybatis_para.html","b7b5d822a1bdabef95f40848ca1bc499"],["/posts/mybatis_res.html","f22b5b22d1a94d8e797418252bbdf7cd"],["/posts/mybatismany_anno.html","367c4ad91653f29c1fef0abbb474e334"],["/posts/mybatismany_xml.html","59ace643b076ca6989a9b19420cbfd6b"],["/posts/one_web.html","344f47e1b4afccb0c61464f870830c14"],["/posts/redis_dw.html","210a3426859017729dea1d11a3586169"],["/posts/springMvc_.html","e6281fee3b54b9d97b3c064ab9ec4236"],["/posts/spring_jdbc.html","2f429970b971594d93bd2f717f5c66df"],["/posts/spring_sum.html","df93b3f58f345b8edcc72ca06546d8f1"],["/posts/springboot_character.html","4fc50d88e207d43fef43558cd5d6d5e5"],["/posts/springboot_filter.html","cc6106928eac0571e8d26c5feffc1952"],["/posts/springboot_logback.html","ae70effae052f7f3ef4c37de74c33fbe"],["/posts/springboot_restful.html","af79a6c3cf3d035f69f45f4c178aa26c"],["/posts/springboot_servlet.html","0deec1a7cf30f4dba747a503861676cd"],["/posts/springboot_thymeleaf.html","0bb08b689f9843e8ca2d77b41cc823e8"],["/posts/ssm.html","05e7210ef00e5ce16dd0105f764305a3"],["/posts/thymeleaf_attribute.html","d68943ab48f5ca84cafffb2facc0bec2"],["/posts/thymeleaf_literal.html","397d5d6753a8854b4d9edb3f2cd1c3bf"],["/posts/tomcat_ins.html","938aaac474f5449398aa0e2fafb19787"],["/posts/vm_centos.html","3cf86131eecc38fe681ff40ea2469c2e"],["/posts/zookeeper_acl.html","ccc8dbe81318fc69e0583bd8ece96afe"],["/posts/zookeeper_colony.html","1e2b5c39356c80f3f7b32f196af178de"],["/posts/zookeeper_command.html","143cc0ad085f72857483adf3386ea474"],["/posts/zookeeper_curator.html","5d987fc6d78b25f7d06b30c3c2cdb620"],["/posts/zookeeper_dpkg.html","f7f3b543e15830dfe507933d1b51d2d6"],["/posts/zookeeper_introduce.html","01742438f87af1319e4c90a75c210593"],["/posts/zookeeper_javaapi.html","7b8fe4994239c8faa8fbfdf7b53b5964"],["/posts/zookeeper_shell.html","f75d81f6b7683772b8b769e7df8df0fa"],["/posts/zookeeper_taokeeper.html","1afc0ffbb14309fd82ca5983d8fb768a"],["/posts/zookeeper_watcher.html","30b086b8d00712ab5fea4a5c0a0e2104"],["/posts/zookeeper_zapandlea.html","c8ff491a0564e8e15dc186bc50ad9287"],["/sw-register.js","fd66e9fbf61fea4cdbc0d5b12161026d"],["/tags/AOP/index.html","f0bd8d52793b82b6afb5987aecfb5a74"],["/tags/BeanUtils/index.html","e07a618317fdad0b3161d4b3a59ff480"],["/tags/C/index.html","e3b3922bedc3af3db519b640cb4fa06f"],["/tags/CRUD/index.html","2c6235d984ae8b8f68494b57becee9d5"],["/tags/CentOS/index.html","4fdd610f6132825ac41c04a951e7c719"],["/tags/Filter/index.html","9425bdf4e0b00cdbd65b0bad5f031d53"],["/tags/IO/index.html","eb470d6c08e5776f9f2e6befb5d2ec44"],["/tags/IOC/index.html","e18852cee10c72a59ce52c2f9bba5425"],["/tags/JDBC/index.html","777df9efff6af3be1562f3e48721ee09"],["/tags/Java/index.html","159b3bce0fc9224e045b337144c69f90"],["/tags/Jdk/index.html","d900eef160ed99e12a91ce47349df926"],["/tags/Linux/index.html","3f899e1ed0105ef3d6a4e1cfd0c6dc79"],["/tags/Logback/index.html","6dfa62711a60b67b1f477e5d0e730e68"],["/tags/MacOS/index.html","bea98f551fba1fb8e7c82da9e898abc4"],["/tags/Maven/index.html","714f0a5bec2df76138176204f60cdfe3"],["/tags/Mysql/index.html","d2d53fb44ffaf3e5557db64d3e35efcd"],["/tags/Python/index.html","7e480483ced9b2a0fa30951a511aeecf"],["/tags/RESTFul/index.html","647cb7bc44a04805f755082eeb2f65ff"],["/tags/Redis/index.html","207654ab299262876f30aab1fc0fa7c9"],["/tags/SSM/index.html","50f88ea4bbbc57a7ef0737d1aeb3eebb"],["/tags/Servlet/index.html","a36906e5f55736b797ce9cbca14c0c69"],["/tags/Shell/index.html","edd1e46370d77c04507fc54535f8d5bb"],["/tags/Spring/index.html","71a0295a6df29340c666ec4eac53a075"],["/tags/Spring/page/2/index.html","36a1c7585e0e13cb0637aee921c63aa2"],["/tags/SpringBoot/index.html","5239e543c0fce01de828d9a662b77476"],["/tags/SpringBoot/page/2/index.html","b50c0b5b91df534f13177117f2535110"],["/tags/SpringMVC/index.html","651ca3a79236cecd6968065ce1e5fef5"],["/tags/Thymeleaf/index.html","a1d3df231620cce6d8e16cca868abaf9"],["/tags/Tomcat/index.html","c70f60f08938e5a043102f0cbc1d6159"],["/tags/Transacation/index.html","13c2a74459d90c79ed2a5416d34513cf"],["/tags/Windows/index.html","32a334d8350012476206557187e753e4"],["/tags/Windwos/index.html","d97e22626c60336a74d68a748847d97b"],["/tags/XML/index.html","d7592bfa6c5b46cc8d597c6162d74b1c"],["/tags/Zookeeper/index.html","2d1777d9ea7db19c30f9276f9f92d022"],["/tags/Zookeeper/page/2/index.html","cb05499753ace521990f46a7544bc69e"],["/tags/acl/index.html","b97a529816005230f9b9090c9305fa40"],["/tags/curator/index.html","b1edde7009242d5b51db0882caed3c2e"],["/tags/gcc-g/index.html","da559e4fdade47e12f33e8c5438577a5"],["/tags/iTerm/index.html","46d96545e97f551309a1d780e0fbc518"],["/tags/index.html","ba1be85b2393769e9542db3360c6349e"],["/tags/javaAPI/index.html","da9b850e353606a1dabd5096ceb69862"],["/tags/leader选举/index.html","c45df6974744689fe2d2a8e2be80bf5d"],["/tags/mybatis/index.html","ce141fc111474c58b9cb444368a658ec"],["/tags/mybatis/page/2/index.html","e52d62697aa943b2aebe108dd1c89502"],["/tags/taokeeper/index.html","3b4aab843f3fcf4f8058c0bab2045325"],["/tags/vscode/index.html","d2afa29e644c34d3f25aa8d21e23a98c"],["/tags/zab协议/index.html","2595612cf06a66d6a87ee5b4aa7b51be"],["/tags/事件监听机制/index.html","bd78f3806a3207aedc722f8c2fb970a3"],["/tags/事务控制/index.html","a547ee2a47f740db10124367aeb83ef5"],["/tags/依赖注入/index.html","a7bdf2af5667fc0263ee9405731f694f"],["/tags/入门/index.html","e84e77f3fd734522fefe3735f74098cf"],["/tags/内置函数/index.html","acbe7ff3f971b1ff633b6723046ab2db"],["/tags/函数/index.html","e3615fbc4c1d96d4ac2f6c1308c0db08"],["/tags/动态SQL/index.html","9a77ba01a83c40247d67917e0315401b"],["/tags/动态代理/index.html","8270851dd1e4ea761bfe7778ed99f065"],["/tags/参数/index.html","579f6592c9ffa28c4cb0c1b20f465f00"],["/tags/参数绑定/index.html","ead68ecb24217afb9024e2d156f99877"],["/tags/反射/index.html","02fb141040c1c56318f2f9d6eee68a36"],["/tags/四字监控命令/index.html","069dcb576f09166f412059b2f1659b01"],["/tags/多表联合/index.html","2976aff5ce4e34c91b2faed52d619b16"],["/tags/字符编码/index.html","58019835bf0b75e1e30fd50bceb39bd4"],["/tags/字面量/index.html","7ec7a038eca3cc85c9016e173584fa55"],["/tags/安装/index.html","dc8d4a828f60a63a92670f210a5846ab"],["/tags/延迟加载/index.html","79ce9b4cfeeb58ba692f6195c206fc08"],["/tags/异常处理/index.html","4fd68b58baf0de638be0ac9e7d692b33"],["/tags/扫雷破解/index.html","116c9a3af717befe0cd9bc475971bb8d"],["/tags/拦截器/index.html","5e10dc5145f5a0fb5c23aaae13f37233"],["/tags/教程/index.html","0773cb0ed5e4d3be78e611c68f729f48"],["/tags/数据-视图/index.html","40661496c7964c2ffa79c4ff24604214"],["/tags/数据库连接池/index.html","abcea21631cfb18d4436f91880084c65"],["/tags/文件上传/index.html","5cd41ea1b8d1b4c8121e00629ff351ae"],["/tags/框架/index.html","e1c08ffa6111d61aff5561466788002c"],["/tags/概念/index.html","e2e574007da783b40ee6c36cd5164b5c"],["/tags/概述/index.html","479ac31df673e59aedd283645b1e2886"],["/tags/注解/index.html","8598ab47964ba5447ccfc5ffb78c5e93"],["/tags/缓存/index.html","650d9f3c7d5a9c1e792040d7aea52de5"],["/tags/耦合与解耦/index.html","dae8e522990c934608d448c6b11fb034"],["/tags/虚拟机/index.html","26ca2ccb1da8792ec0ad41a2c879beb3"],["/tags/读-写文件/index.html","bd36d3a34cc520e7bd0f5f7f303d602a"],["/tags/运算符及表达式/index.html","98f538ea11fe40aef34af24ed74e97eb"],["/tags/递归/index.html","19bd00cf30d235ba96ff9664ca418c60"],["/tags/配置文件/index.html","03db14ec0ecbc6feb612457a420a42d7"],["/tags/集合/index.html","e62a92f245243aa92002fcc8322bf9b9"],["/tags/集群/index.html","f0a2b4abc20a804ba466d042c98b48c7"]];
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
