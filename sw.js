/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","406360bbfc3108dadae74d0b9130b0af"],["/about/index.html","c906edbdaa58c6f8328929e3b4c7b939"],["/archives/2020/04/index.html","e062d00046a876f41c50b182f830e8a4"],["/archives/2020/05/index.html","91373048defe77d617e2f5cbb5a7cc36"],["/archives/2020/06/index.html","d92d0bf227a4b7a844e61329102d4a6d"],["/archives/2020/07/index.html","5666e493a80eb16fed0d8c632eb8cd1a"],["/archives/2020/08/index.html","1a5431448b6b1eb4adb008946d30bdd5"],["/archives/2020/08/page/2/index.html","d6af33ed6372cc0d42b51cb34c3058cf"],["/archives/2020/08/page/3/index.html","e4f6ea8a798d38207e164b5e818e2dc7"],["/archives/2020/09/index.html","282a25f2471a3c8a8273e3ae37d123a2"],["/archives/2020/12/index.html","e9f0e9034055e55236c421e3aaa35a27"],["/archives/2020/12/page/2/index.html","2ef722e8330396a3d4b580c32175e70e"],["/archives/2020/12/page/3/index.html","2587d92a079f14e24f5ca8139d0ffe93"],["/archives/2020/index.html","397119e5d9c903d2ce5672ce106e78e8"],["/archives/2020/page/2/index.html","c6578daa0deeb184f74e4f8f1b093714"],["/archives/2020/page/3/index.html","d445f321a88d5c90688d07a8dfe21219"],["/archives/2020/page/4/index.html","4adaec860395d9505addd788e24d8483"],["/archives/2020/page/5/index.html","d0094ee7f2009072d816472985f14aaa"],["/archives/2020/page/6/index.html","ff15f43bb706adbbc5bc96570cd2e84c"],["/archives/2020/page/7/index.html","63a7966805c77e8ec4c9afa83068855c"],["/archives/2020/page/8/index.html","b509d5747aae27725053527898de909f"],["/archives/2021/01/index.html","399ffad1afbeff583ae6247154bd1b18"],["/archives/2021/index.html","6dc95dce67b65d0ee89b08fc182655b4"],["/archives/index.html","d9ea64fa88249bb4ad422b8564fc10c3"],["/archives/page/2/index.html","3ed03164bae67a959c1f7da6a8f836e0"],["/archives/page/3/index.html","aa0fcc6739e2009961bd95829628a7a8"],["/archives/page/4/index.html","bf25b855d4a8f919d5d24d02ad4af4e9"],["/archives/page/5/index.html","b8d9bfb14feb8e03802469d773e1b641"],["/archives/page/6/index.html","a3bb68fbc17547033a8a5b9f60340e71"],["/archives/page/7/index.html","d0612b3b85adb7c2b0ad5e4353e24ed6"],["/archives/page/8/index.html","afa38a28f9e3afe3a07438becb47de6a"],["/archives/page/9/index.html","91639a9fde57dd37030480f18810f5a6"],["/books/index.html","6503f28cad4963f7c6249cb4a12dda78"],["/categories/C/index.html","7bca1d3ca17c18366c2a18d9fd744c10"],["/categories/C/扫雷破解/index.html","aa65fd9071da9bbba8f245a0159fa73a"],["/categories/C/读-写文件/index.html","f669ae3f1a38e07b2105bfac0cdec38a"],["/categories/C/递归/index.html","b8461b535cdf7b3b02a9f913a71aa237"],["/categories/Java/BeanUtils/index.html","29973dfb4718ae3b52f90c609bd1f461"],["/categories/Java/IO/index.html","19bd57b225526a3da51a51c346c0a328"],["/categories/Java/Maven/index.html","ca304238830d38eba613b2644fc7d84c"],["/categories/Java/index.html","c52ef4cf3238b8752bf02ac1c2bc0a47"],["/categories/Java/动态代理/index.html","19e598faefcd6489fab295a10b7661e1"],["/categories/Java/反射/index.html","9632c70a487462d70c2349b8a84a0c2d"],["/categories/Java/耦合与解耦/index.html","7a2a872721303a3a1acad0e138d8dc9d"],["/categories/Java/集合/index.html","cfd143c5e7210140ba52e37e63ff575e"],["/categories/Mysql/JDBC/index.html","08387f3d4660c4033b0f149fdfc71c62"],["/categories/Mysql/index.html","f76673d34eedcfe1e1766067705f5eca"],["/categories/Mysql/数据库连接池/index.html","06505bb218c37bb4558e56b6545f3439"],["/categories/Python/index.html","eddedfd529b65ca74df94090a67fcd11"],["/categories/Python/内置函数/index.html","fa4d7bf97f5003242ca1e6a40fb2d486"],["/categories/Python/函数/index.html","3d543c5a1f393a42b576263cf3d1c7cc"],["/categories/Spring/AOP/XML/index.html","77915110c6a0f581a631eb8010c047d3"],["/categories/Spring/AOP/index.html","412691002f52b91dc18a0fbf1c23a91c"],["/categories/Spring/AOP/注解/index.html","8cb85b12360a04601eadc46e613764dc"],["/categories/Spring/CRUD/index.html","d0d99ef5cc697ed3489de938e962a9df"],["/categories/Spring/IOC/index.html","89d9b3996482f451120f8cb780041a20"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","ed3782d3fb3fb19854d8dcc648913bde"],["/categories/Spring/IOC/耦合与解耦/index.html","4c1118b29ffba6d9a1f11cd962972042"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","1d76672cd161fa8c7ac0daecdc0d72a8"],["/categories/Spring/JDBC/Mysql/index.html","51900838c795a586da18d33807cdbb09"],["/categories/Spring/JDBC/index.html","3faf32a87ecedff576b48cedaa47fb56"],["/categories/Spring/SSM/index.html","7ed584562de87846f8a80d31885f8e79"],["/categories/Spring/index.html","068287e138cb428f0fc327bb1f1be648"],["/categories/Spring/page/2/index.html","f34971b24987247885a206b04a1f50aa"],["/categories/Spring/事务控制/AOP/index.html","73ba031b70214f042bdfb1e616b156a0"],["/categories/Spring/事务控制/index.html","0a0d840b2787f6288fd693be8ddc28f0"],["/categories/Spring/依赖注入/index.html","f4cf61680c49004ade55fabda8757f31"],["/categories/Spring/概述/index.html","ad8f09c69c99b03a0324a122e5ef0810"],["/categories/SpringBoot/Filter/index.html","23cc38911ed2a3cddc4f6fb8d4c3ef7a"],["/categories/SpringBoot/Logback/index.html","d14d23a2180b3e80789ef682bf73c4b9"],["/categories/SpringBoot/Mybatis/index.html","e7fbea0144b1f6231f65671cc8259e96"],["/categories/SpringBoot/RESTFul/index.html","0a84a6bb79a890563df38df2371e196a"],["/categories/SpringBoot/Redis/index.html","a02dc822489991177952243842f76968"],["/categories/SpringBoot/Servlet/index.html","ce44eb00eb3866ccce37cc0684dd5168"],["/categories/SpringBoot/Thymeleaf/index.html","1fe991a32937ab7dcb90734d2bf36251"],["/categories/SpringBoot/Transacation/index.html","9e03c4eda8c3c4da82542d8664b3098c"],["/categories/SpringBoot/index.html","4998faa9e92042c437857423755ac1d7"],["/categories/SpringBoot/page/2/index.html","0f4d2d1571a3225541d2990b6eb0ea23"],["/categories/SpringBoot/字符编码/index.html","a8e209eb3fb36996585f17c8f78bd684"],["/categories/SpringBoot/拦截器/index.html","049567ae262ba2567b9cd0556d1f75c4"],["/categories/SpringBoot/注解/index.html","f5891b3fee6470ff55948dfadbda2eb9"],["/categories/SpringMVC/index.html","777aae389b4021f3420c7be76aafe576"],["/categories/SpringMVC/入门/index.html","0fa25e2abcae327b80ed8426a14ca4ec"],["/categories/SpringMVC/参数绑定/index.html","7329a4bb8a4e7c66209571e46a04205f"],["/categories/SpringMVC/异常处理/index.html","8816e04caa7fbc55e0178ef568d7cbf7"],["/categories/SpringMVC/拦截器/index.html","1052408514d5c96a39900f86d92a981e"],["/categories/SpringMVC/数据-视图/index.html","bfae33bfb2b05c53ee6ce11397befb8e"],["/categories/SpringMVC/文件上传/index.html","89cf10267a6fa1d2bf19ab50934f9bce"],["/categories/SpringMVC/概念/index.html","712dcd66f0441aa57174ffcdd72c876a"],["/categories/SpringMVC/注解/index.html","751c9dfcc5a1afea421d0db89a14d81d"],["/categories/Thymeleaf/index.html","675e3edf6cb561b3f0e1c217c99799ac"],["/categories/Thymeleaf/字面量/index.html","ad8eb278566d93051a8c126a209b6817"],["/categories/Thymeleaf/运算符及表达式/index.html","ab50eda19ebecc49f890011210a2ab50"],["/categories/Zookeeper/Shell/index.html","09f1c1c640295875a3666038bf3c0426"],["/categories/Zookeeper/acl/index.html","945e81bb3bc7f510f3f87a4ff7d9fb2b"],["/categories/Zookeeper/curator/index.html","d82e31f3cbb4265685869ef3494d70f5"],["/categories/Zookeeper/index.html","822cd4d27f79100869ec76d8c12903df"],["/categories/Zookeeper/javaAPI/index.html","18b6a506734525cf6ed8fb2a2cac9cb5"],["/categories/Zookeeper/page/2/index.html","48ac2c5c607193935d5f45a5b8f07ae1"],["/categories/Zookeeper/taokeeper/index.html","a129aefd9828c1bc0fee1be323857163"],["/categories/Zookeeper/zab协议/index.html","57ea29feb16139255e811005e7b637a6"],["/categories/Zookeeper/zab协议/leader选举/index.html","f62935f4893c7dba7dd5c6571b1e0b5d"],["/categories/Zookeeper/事件监听机制/index.html","b137e8f107bc7cdc6be9c0e2e296c889"],["/categories/Zookeeper/四字监控命令/index.html","0e5ecbf603ddbf058ad101b492ad494c"],["/categories/Zookeeper/安装/index.html","d966db540bf755a9f9acaef8940700ba"],["/categories/Zookeeper/集群/index.html","d64e9ff29d375da711cdf231cdccd65e"],["/categories/index.html","efbf42ab1363a52311f4049c43747ed9"],["/categories/mybatis/CRUD/index.html","0c4648e57379e0497e54eecc074edcf0"],["/categories/mybatis/Mysql/index.html","e9f56fdf4773eae5afd081b0aff240a8"],["/categories/mybatis/Mysql/多表联合/index.html","73e91fc3a708403264d7099c225b0c9f"],["/categories/mybatis/Mysql/多表联合/xml/index.html","b4bc1b94d931d9411572d4373fe4710b"],["/categories/mybatis/Mysql/多表联合/注解/index.html","2aa9b52c48b7497254d0b0b83c6d173b"],["/categories/mybatis/Mysql/延迟加载/index.html","fcbfaa852982a06e8787709126a0206e"],["/categories/mybatis/Mysql/缓存/index.html","75e72fe7474e2b3d1b2e90fd802599c3"],["/categories/mybatis/index.html","9a64db02ca26a526354930d4190d3c74"],["/categories/mybatis/page/2/index.html","5c615d86bfdace45a373df700cab489a"],["/categories/mybatis/动态SQL/index.html","99efac0cd09caf515d8ded81a314fc91"],["/categories/mybatis/参数/index.html","ec6e9399be1751d81f49a09db0ad38ef"],["/categories/mybatis/框架/index.html","cb49137382510493ad16926141f276fa"],["/categories/mybatis/配置文件/index.html","04696af3a7e1d2dab970d5359337e655"],["/categories/教程/CentOS/index.html","5ec96d203184eed623eea9ab15922aec"],["/categories/教程/CentOS/虚拟机/index.html","34c32002e49e2ea941453a904e60a17e"],["/categories/教程/Jdk/Linux/index.html","b4de91b2eb36c9bd79db684222022c03"],["/categories/教程/Jdk/Windows/index.html","d9fef5fedb621eb7400e333dfd8c0d09"],["/categories/教程/Jdk/index.html","da0436e6442baccbe0fcc8223c087377"],["/categories/教程/MacOS/iTerm/index.html","59bd7eb7f428af5ae91f90854c5db2c7"],["/categories/教程/MacOS/index.html","e2d56f84e4a5a9f3c911a9b8be2adb21"],["/categories/教程/Mysql/Linux/index.html","0da8d0cb08706bfedd0b81ec8eb1ddb5"],["/categories/教程/Mysql/Windows/index.html","f7498627dcf59ea9667cd0512389f468"],["/categories/教程/Mysql/index.html","5705479f263ed91ce0eff47d952868d9"],["/categories/教程/Redis/index.html","9db8f4114a24da9f7f741050c9ecd572"],["/categories/教程/Tomcat/index.html","cdd16013c23bfb57bedcc489316086ab"],["/categories/教程/gcc-g/Windows/index.html","e3bd9070bde27d7ac586329f533144bc"],["/categories/教程/gcc-g/index.html","e8641b3e776ee4930157dfa50be9cdd7"],["/categories/教程/index.html","bd84799cf4d6f0a54192bcfca3503de1"],["/categories/教程/vscode/index.html","89f3304a1960fb63c5c7c0b33a2b20ed"],["/contact/index.html","10ae921605f2b12926641b313f3dc682"],["/css/font_icon.css","39c73f2fdfd575d03a382922f26301f5"],["/css/index.css","17ac9f0fe48b78d93a94ef8bc6e4d0cc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","baff0d70ab7f8626bf7146b94536a2c4"],["/home/index.html","e38d54f3b031bdb23e30df517d74d11a"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","1aeae8a7eb49822eda49d369039805fd"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2defea46537f64399d5a9ac2d18163dc"],["/movies/index.html","afc7da5c649d26473b310b29a6224e1a"],["/music/index.html","c701bc972ffbd798f1201372118001bc"],["/page/2/index.html","1f4726f08708488c0e94ee8ed50499e7"],["/page/3/index.html","83258ab9b6528de6b4bb01b59c60d970"],["/page/4/index.html","c5531b3af5045e299a389e10312da836"],["/page/5/index.html","8d11662eaa9d30247e2ea3ac490a30b2"],["/page/6/index.html","b98fdb5a8d458af584c54d829601004f"],["/page/7/index.html","a70073f21f88098e62d8a8fb9dce1722"],["/page/8/index.html","e457f41923d962906c3757e513728a91"],["/page/9/index.html","2c2afeb63525560ce53224ca5a9cd1b8"],["/posts/1304884562.html","3e50faf9c393be395f45bbcaa00efd90"],["/posts/190540348.html","ac45a1c9b6bbb4cf17625621102c52fa"],["/posts/2205990951.html","1fa4b62f650c7d9a227bf85883474955"],["/posts/2296141139.html","6bba0fc0abdbc6c1a940096b16d1d26b"],["/posts/2322029606.html","f0de0e85805d0559612bedf8cab5e004"],["/posts/3300220287.html","488286c6ee19a8203f6b3a43e3d127b0"],["/posts/3328524930.html","f85f5f744534b1796230b10d87db0cad"],["/posts/3502553385.html","5d5046431fa42e1cc49e81de36c23546"],["/posts/3841896169.html","afbea953b79afc5588f534cdebc6b89f"],["/posts/4226563224.html","3c28a8397341864195b3cb1b40d809db"],["/posts/4292261589.html","a6be536b4a1e4af539c33c0feea7b6f5"],["/posts/663709621.html","5d712cf81fe510d50743aa4f41e66732"],["/posts/72389457.html","ce4320ad2114b9602b0b9f1c06100aa7"],["/posts/Aop_aoptx.html","419196df2ccbc932f79cf9881a43b256"],["/posts/Jdbc_study.html","e8b2ac914f56f082471e534fe1aba1ba"],["/posts/Maven_study.html","710fa352acbd448a1a518aa0d8b0f234"],["/posts/SpringBoot_Interceptor.html","625044b59ec0a9b5f964ae8eac33d6f2"],["/posts/SpringBoot_ano.html","52748708cf68cc4c0bc449932d5a9db1"],["/posts/SpringBoot_myabtis.html","adabf8cbb401c7493b13d2a1bf5dc64a"],["/posts/SpringBoot_start.html","4ded2422606c0d7c2180e74381ebdeb2"],["/posts/SpringBoot_tran.html","e51d42e6a89a22b4ccfed1f1f4e95a22"],["/posts/SpringIoc_XML.html","49d51ac9813e7017340bf3f653d7b213"],["/posts/SpringIoc_anno.html","13398b904f65ed3aa3119e46a2b88f8f"],["/posts/SpringIoc_yilai.html","efa5fd065a1c3bc6bfabfee42376c358"],["/posts/SpringMVC_con.html","f166ef734b812fceef57616e75a47760"],["/posts/SpringMVC_data_view.html","47a8d03f62ccbe86f5feb8c3ef1f4cb5"],["/posts/SpringMVC_interceptor.html","a46efb92f135851d2dcff204bc51278e"],["/posts/SpringMVC_start.html","24655688e8aee3402d7c1f23917c5ff7"],["/posts/SpringMvc_anno.html","58941bbb810ae88f7fc6d923c1a6f320"],["/posts/SpringMvc_exception.html","476014406a0f8bb87373ac39968abe12"],["/posts/SpringMvc_para.html","51fb1f36693ecb0681650abb8fb0cb38"],["/posts/Spring_Aop_anno.html","9fa50056f3c3e739b0334cb9a406af7e"],["/posts/Spring_Aop_xml.html","e4fc798a3054b811d8b3aa090c0a7d98"],["/posts/Spring_CRUD_XML.html","706aa8327b3b2ed175897c79c5668614"],["/posts/Spring_CRUD_anno.html","0f5f9b1f59f0a9ffe22e7497a1e646a3"],["/posts/Spring_aoptx.html","7dccefd60b66b82e076aa55f6e9d7be2"],["/posts/aop.html","0253fce096b6d4c6a000a41ea81ccad0"],["/posts/beanutils_to.html","8b89db366c67b9132176d25deb30aa28"],["/posts/c_file.html","cb0afd075d4cb13100a8539a7839f7a0"],["/posts/coupling.html","b6b1097e02767ae11d962544a5c974c5"],["/posts/database_link.html","095aeac3c823d7f2156957d982455a0a"],["/posts/java_proxy.html","57823d831e93ce91a08bfce576d5eae4"],["/posts/java_re.html","dffe8db797c19af12f7b4d2f6ca035b7"],["/posts/mybatis.html","998f9d5b27ae47b0248afa721f93ef46"],["/posts/mybatis_cache.html","cae9334001b346cb27d933263aefc8d1"],["/posts/mybatis_crud.html","e608bbca00be09ab514f9a2f299d3c34"],["/posts/mybatis_deploy.html","96cc3a3c76e471d5faea3b5c59cbe021"],["/posts/mybatis_dyn.html","d78659b1817a025a12c57bbf9b904da9"],["/posts/mybatis_en.html","60b08abe828e797b19a5ec6ba2240204"],["/posts/mybatis_lazy.html","b2a3a04c9368737168807c9bf2b2fe9b"],["/posts/mybatis_para.html","b7b5d822a1bdabef95f40848ca1bc499"],["/posts/mybatis_res.html","f22b5b22d1a94d8e797418252bbdf7cd"],["/posts/mybatismany_anno.html","367c4ad91653f29c1fef0abbb474e334"],["/posts/mybatismany_xml.html","59ace643b076ca6989a9b19420cbfd6b"],["/posts/one_web.html","344f47e1b4afccb0c61464f870830c14"],["/posts/redis_dw.html","210a3426859017729dea1d11a3586169"],["/posts/springMvc_.html","e6281fee3b54b9d97b3c064ab9ec4236"],["/posts/spring_jdbc.html","2f429970b971594d93bd2f717f5c66df"],["/posts/spring_sum.html","df93b3f58f345b8edcc72ca06546d8f1"],["/posts/springboot_character.html","4fc50d88e207d43fef43558cd5d6d5e5"],["/posts/springboot_filter.html","cc6106928eac0571e8d26c5feffc1952"],["/posts/springboot_logback.html","ae70effae052f7f3ef4c37de74c33fbe"],["/posts/springboot_restful.html","af79a6c3cf3d035f69f45f4c178aa26c"],["/posts/springboot_servlet.html","0deec1a7cf30f4dba747a503861676cd"],["/posts/springboot_thymeleaf.html","0bb08b689f9843e8ca2d77b41cc823e8"],["/posts/ssm.html","05e7210ef00e5ce16dd0105f764305a3"],["/posts/thymeleaf_attribute.html","d68943ab48f5ca84cafffb2facc0bec2"],["/posts/thymeleaf_literal.html","397d5d6753a8854b4d9edb3f2cd1c3bf"],["/posts/tomcat_ins.html","938aaac474f5449398aa0e2fafb19787"],["/posts/vm_centos.html","3cf86131eecc38fe681ff40ea2469c2e"],["/posts/zookeeper_acl.html","ccc8dbe81318fc69e0583bd8ece96afe"],["/posts/zookeeper_colony.html","1e2b5c39356c80f3f7b32f196af178de"],["/posts/zookeeper_command.html","143cc0ad085f72857483adf3386ea474"],["/posts/zookeeper_curator.html","5d987fc6d78b25f7d06b30c3c2cdb620"],["/posts/zookeeper_dpkg.html","f7f3b543e15830dfe507933d1b51d2d6"],["/posts/zookeeper_introduce.html","01742438f87af1319e4c90a75c210593"],["/posts/zookeeper_javaapi.html","7b8fe4994239c8faa8fbfdf7b53b5964"],["/posts/zookeeper_shell.html","f75d81f6b7683772b8b769e7df8df0fa"],["/posts/zookeeper_taokeeper.html","1afc0ffbb14309fd82ca5983d8fb768a"],["/posts/zookeeper_watcher.html","30b086b8d00712ab5fea4a5c0a0e2104"],["/posts/zookeeper_zapandlea.html","c8ff491a0564e8e15dc186bc50ad9287"],["/sw-register.js","d86625d7caf9cddde1023ca8fb48e76d"],["/tags/AOP/index.html","2e4ff0ecd75502371d189fcc2f3303ff"],["/tags/BeanUtils/index.html","742cdc086134af09a0bb8f005afd7294"],["/tags/C/index.html","e788abfb0e541e18ca07020b63dc338b"],["/tags/CRUD/index.html","a53a5b6197d8328df5546b9e26ef009d"],["/tags/CentOS/index.html","e0802d6384b8d05426a4f150ea9cc3c8"],["/tags/Filter/index.html","1b5e8fbdcbcee9e8e6b7047c20e4d59d"],["/tags/IO/index.html","3964aed36e99dc46a927820499946900"],["/tags/IOC/index.html","ea08e3f2e3e09c21470d9ce371686719"],["/tags/JDBC/index.html","9c0f7e3a039c4076908df8e33d4079ad"],["/tags/Java/index.html","df66b30eeaa6391329a496b83db2af02"],["/tags/Jdk/index.html","d7313b87b9e0bc0de88c6ab67da24036"],["/tags/Linux/index.html","ecdd37668c5d044581ba26ec3c0dd453"],["/tags/Logback/index.html","645ee8c1385ff4df571dca5c87eab67d"],["/tags/MacOS/index.html","595c4e06373f3fcd5357f3cedbd468df"],["/tags/Maven/index.html","174be20b0f98f27d0617ead1fc82aa56"],["/tags/Mysql/index.html","1d3dedf0cfd3ead624b897965dc7c0ed"],["/tags/Python/index.html","b7f94ee9b27588fda6b84cd3b986587e"],["/tags/RESTFul/index.html","0d3617189eaedeb0ad0aeb492eeda74c"],["/tags/Redis/index.html","54be46af55eba683b67d9a3a98c4f0e3"],["/tags/SSM/index.html","eb037570812e8f36bd9d2f6ec45bfeae"],["/tags/Servlet/index.html","48f56b2cf9c3befec9a0f113dd791336"],["/tags/Shell/index.html","e9f135d4e48ba479dd296f480f1af05b"],["/tags/Spring/index.html","029922d1db8b0f5c1fcf5da1f2830fe8"],["/tags/Spring/page/2/index.html","6e7f8d5400cf855021d9f9d02caeb26c"],["/tags/SpringBoot/index.html","72eac7859feff087ceb36fe5b1467421"],["/tags/SpringBoot/page/2/index.html","c47dfe23c5036079f5a4b3d44c59bff2"],["/tags/SpringMVC/index.html","5f32678ea5ab8f9fcf480df00dc9e066"],["/tags/Thymeleaf/index.html","b5624074096db868c1f7350bfafc50f5"],["/tags/Tomcat/index.html","800271785fc17c30f76d9bd8d83ac2da"],["/tags/Transacation/index.html","65d3b685138b8db737af799e18671754"],["/tags/Windows/index.html","d927d5bb7f99b37d8442a39d79ee1955"],["/tags/Windwos/index.html","cf651f9b43b4a56f573aaf6bc909cff3"],["/tags/XML/index.html","49b27bcac7679d66d8adac0dd29ea5f5"],["/tags/Zookeeper/index.html","3f1298175e7d1d020bd19d0adb030921"],["/tags/Zookeeper/page/2/index.html","a1aecdb6302521abe374ed8abc6e4a31"],["/tags/acl/index.html","78b2f4ea79271917490c21e1ad1c2535"],["/tags/curator/index.html","239729cb07e33fc111e44a00e025d1d7"],["/tags/gcc-g/index.html","197297b8b82513eca6b95fb96cd60e18"],["/tags/iTerm/index.html","f38faa6c73c39be7fbc72233913c15e5"],["/tags/index.html","573a82e6877cbef6b5f308e79a43a4bb"],["/tags/javaAPI/index.html","e40e826dacbbc191fb0e2053fc428b45"],["/tags/leader选举/index.html","01d4fc33fdf11b1dfbd6a09eeae768fd"],["/tags/mybatis/index.html","bdca1802730ae3f14e606063a92c10ab"],["/tags/mybatis/page/2/index.html","5b5e39f31f718d3d5c4bb9a5d3fc8207"],["/tags/taokeeper/index.html","11b8d6c6983a39657f736390a6697ad5"],["/tags/vscode/index.html","8522fddf7013ef4711b51f7295827401"],["/tags/zab协议/index.html","753ea24cb559f07d2e6d4237151a8e28"],["/tags/事件监听机制/index.html","b81ead768f838821fb2efe68942c3c01"],["/tags/事务控制/index.html","d6ba176124991e3768ccfd24d8825e9c"],["/tags/依赖注入/index.html","7fa87394843c587c249fa030da42c393"],["/tags/入门/index.html","edcb0c80cc01eb57c539b436c1e75219"],["/tags/内置函数/index.html","d8c51471a79811dfeaea4e5a9088d0fb"],["/tags/函数/index.html","ffcf4c66f09c2005a64b6cb0e52a0f23"],["/tags/动态SQL/index.html","c3c3f463a0649f49d22450f033b9ccf4"],["/tags/动态代理/index.html","9c2b090a03238b090aae3033a579414a"],["/tags/参数/index.html","b6011bb2b3e7c5e27db1f1c171659ede"],["/tags/参数绑定/index.html","09c9e60825c4434fa059f2398eb40561"],["/tags/反射/index.html","1ca79f85ad2d940263966145ae4f66a7"],["/tags/四字监控命令/index.html","7728190c32bc05d24e8377c5531161ac"],["/tags/多表联合/index.html","d4a1b9f054df142a77aef8a35e25b471"],["/tags/字符编码/index.html","dc20bb6013682c5a52cdfd21b70996f7"],["/tags/字面量/index.html","f15fd35b720d3c8e94ebb436f72bee33"],["/tags/安装/index.html","2f2662ba52ab7c4ce4ef3d744c89ccdd"],["/tags/延迟加载/index.html","fa35d3e41e1a3b63f28f6806cdd95473"],["/tags/异常处理/index.html","fe9e601d7795fc74fdc3d8e92880d53d"],["/tags/扫雷破解/index.html","92dfd98dfe48f1590e86ca2f314f35a1"],["/tags/拦截器/index.html","b77502369ea36069dd00073f9c0778f8"],["/tags/教程/index.html","2ce8ca847042c045dcf452592940cb9e"],["/tags/数据-视图/index.html","1307802e618209f11cea2d3f3597defa"],["/tags/数据库连接池/index.html","2d93fdccd0b6f79ef681e8681eb3fe44"],["/tags/文件上传/index.html","07b5d9eefc627bae2afa74101af67499"],["/tags/框架/index.html","80d0698031596e6f6d535285a6dc1326"],["/tags/概念/index.html","b7dfc1b477a381c69d19a50228e5681a"],["/tags/概述/index.html","e813ec3d6a0e433416f525c6a6495037"],["/tags/注解/index.html","a622f16b53f0f6738f4b9bdcf57418df"],["/tags/缓存/index.html","1af9a54dd4b24a37ebe1447778c448d3"],["/tags/耦合与解耦/index.html","d7cca4aa81d275156aa540c9efc00f4f"],["/tags/虚拟机/index.html","5b7bb2f8a6dfb2fe6040c2364e3947f9"],["/tags/读-写文件/index.html","e7d356c757fba8854017953978dc5a59"],["/tags/运算符及表达式/index.html","f73fe39a52fc77d476b7cbf0f35aeb83"],["/tags/递归/index.html","1ec688a90c879f5e750129ea62bd466d"],["/tags/配置文件/index.html","105096eb6028c108dbb2b30fa33290fa"],["/tags/集合/index.html","b4b13fb35b0bbefda595e6475e160b70"],["/tags/集群/index.html","4cbe0e72bffec7b31d1f5d52dcfd884d"]];
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
