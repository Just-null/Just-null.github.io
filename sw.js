/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8917d985e7f1689d9874a8332cd77c20"],["/about/index.html","c4decfaeecfee5c1fbf21efbc85f2aba"],["/archives/2020/04/index.html","f855371b2780f6b0e1797a62da1a94df"],["/archives/2020/05/index.html","4a494f27549cfa42a7c46717fec381ba"],["/archives/2020/06/index.html","912ea1dd522c88e05b3f8f5f67b54681"],["/archives/2020/07/index.html","6995219227d0043d25fa3e5f1fadd493"],["/archives/2020/08/index.html","35c1493ae066138ce5ebd8ce1294b7e4"],["/archives/2020/08/page/2/index.html","e1b91c5de0a6bc617bc0b12e31f14ac7"],["/archives/2020/08/page/3/index.html","199dcb365679b4ca750b0c455f6a5beb"],["/archives/2020/09/index.html","7b61b465980730b00330cca3caa3fd0e"],["/archives/2020/12/index.html","df6a7001453d1ad87c512edf2b5665f3"],["/archives/2020/12/page/2/index.html","dc023758c0d08ad4705a4341272aabb7"],["/archives/2020/12/page/3/index.html","727b24fa6ffa77c8c4c30de6c00ab0c9"],["/archives/2020/index.html","66f91be98cfca735d9df61ef57a1c98f"],["/archives/2020/page/2/index.html","f323aa587a8ff9bdc68a608db0bc1e3a"],["/archives/2020/page/3/index.html","35dfe2217ebda6a68a69772a47497c47"],["/archives/2020/page/4/index.html","71b21f1efe60242774acbeef8bef28c7"],["/archives/2020/page/5/index.html","59a501b6ec486e4ae45a2540b865792c"],["/archives/2020/page/6/index.html","34add586d46fbb41bf421d405d65402f"],["/archives/2020/page/7/index.html","1128ea238760811e257ecf4e970f8e80"],["/archives/2020/page/8/index.html","957f49489d8e45d38ad0dc66ba1f4610"],["/archives/2021/01/index.html","7a486a074a3011a68f1e61ea19fe1d6a"],["/archives/2021/index.html","76b5fa5b7f1c848db36cdb3cc46ae467"],["/archives/index.html","b4470da533125b7bcd1a83c0e8c7253c"],["/archives/page/2/index.html","8d85020a80a057e9b0d31b1dd5fbc705"],["/archives/page/3/index.html","3d9fa0372eb8d102228c4898278bb0df"],["/archives/page/4/index.html","7445b65ee1e34b4049561c9cb581b3f1"],["/archives/page/5/index.html","5022ec3c9429b032e7d76b2a5a25d6d9"],["/archives/page/6/index.html","7b0cb8f5b95906f85e2463a5cd12feca"],["/archives/page/7/index.html","442204b2d5efe5edb75dbfad88c7c18b"],["/archives/page/8/index.html","ff177569371163a82459b34604a7c07c"],["/archives/page/9/index.html","37531a285cddd1d2d99ab450dd2bb264"],["/books/index.html","bb9ca3b8b07f35d9e48c3cd7d81b70a1"],["/categories/C/index.html","2425db76b74cc6a96e518eacb0c22b6e"],["/categories/C/扫雷破解/index.html","d65966a081b090f3b38dac5db7eba27c"],["/categories/C/读-写文件/index.html","847e5b6ffd795785090559bf87e76942"],["/categories/C/递归/index.html","3d2cf4212c5a55cf93128490ebdc6a40"],["/categories/Java/BeanUtils/index.html","4103bec61cf918afde215142c40efdfb"],["/categories/Java/IO/index.html","11d1fb4d68ffd04ca187fe7b6865fbea"],["/categories/Java/Maven/index.html","a8694636e3b50dc6b22bfa5833099204"],["/categories/Java/index.html","00bf7a1b00c0986273a550d086a0f873"],["/categories/Java/动态代理/index.html","8b42b9c00ac72b17de62ea7611a61f2c"],["/categories/Java/反射/index.html","38224935f7b422693200380e68834631"],["/categories/Java/耦合与解耦/index.html","af7af5dd53534e3fa27553e1c2c17bb3"],["/categories/Java/集合/index.html","d3033283d12a02820d6ad5c79cb0ec03"],["/categories/Mysql/JDBC/index.html","fb58a96ab088fd2899b3d0b50f851f50"],["/categories/Mysql/index.html","727adb9e5db0b39cbe69c4768feba27a"],["/categories/Mysql/数据库连接池/index.html","ef0d3947eb3bd2348fabc751a1d60a70"],["/categories/Python/index.html","4f3b51ae4338b8582584626b6981ed61"],["/categories/Python/内置函数/index.html","a08717f6368dcdfb15942d91aa8d3b10"],["/categories/Python/函数/index.html","245b7a4115acb3a3deac53a32b9b4b52"],["/categories/Spring/AOP/XML/index.html","737cf16b13a970991264e1f63839a0ea"],["/categories/Spring/AOP/index.html","c4ec20804ada482da96fdfb839e95f89"],["/categories/Spring/AOP/注解/index.html","02d57e44cc64681279cc0eb3002e3d2b"],["/categories/Spring/CRUD/index.html","84388495988a08c9692abb1d9eccdc59"],["/categories/Spring/IOC/index.html","d655d630316cde3766a685c228a9d678"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","fae48ab4368ba9740cc24654a03927ac"],["/categories/Spring/IOC/耦合与解耦/index.html","106b79070ba9f387678af599763b36d9"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","3e950b632bdeecc58762130028b6ef6e"],["/categories/Spring/JDBC/Mysql/index.html","d1bf8a15c7636c532402ab24a392ce42"],["/categories/Spring/JDBC/index.html","5118f4334f894eeec23ac99ad0e1b310"],["/categories/Spring/SSM/index.html","09d625471cdb49ed1c7b18bdd4a45aa0"],["/categories/Spring/index.html","44e55a016cd8b4988f8a68cb79098c47"],["/categories/Spring/page/2/index.html","1ee76961ec3f479b81050a8951735adb"],["/categories/Spring/事务控制/AOP/index.html","5803abfc25c9e50040e3f3ab02886341"],["/categories/Spring/事务控制/index.html","3ee81f58ee79624c3c3d1da4bcbaced2"],["/categories/Spring/依赖注入/index.html","d836405e222d6bc9f4997fdc8ae73245"],["/categories/Spring/概述/index.html","d508be2fe7466e56e668df0e66cad1f5"],["/categories/SpringBoot/Filter/index.html","30651a18e6e07e19b46af1890a7d53cb"],["/categories/SpringBoot/Logback/index.html","15af7f712b774c7762b382f1b7e245bb"],["/categories/SpringBoot/Mybatis/index.html","acb6c1a6cc5c31b6e4ca6631e9f00537"],["/categories/SpringBoot/RESTFul/index.html","302c45508cd48317dba08af2089e2759"],["/categories/SpringBoot/Redis/index.html","17a7e48e5c1e609baf3b328be01eb563"],["/categories/SpringBoot/Servlet/index.html","e1b9752a8be49097453876aab904b2f7"],["/categories/SpringBoot/Thymeleaf/index.html","380fc79a2aed5f0fd6c33556359eecb0"],["/categories/SpringBoot/Transacation/index.html","bf0bd2e67f848ebc28d285d7bf27e72a"],["/categories/SpringBoot/index.html","75082479b1071d2303e0cb5d2db5a9b0"],["/categories/SpringBoot/page/2/index.html","a39f2c2f8b6709deb635cd6a0535d445"],["/categories/SpringBoot/字符编码/index.html","73c06d2fcf31f0feb93bf1f21b6dc689"],["/categories/SpringBoot/拦截器/index.html","3c9b28c4a95f9f26dd845ef12e8758ee"],["/categories/SpringBoot/注解/index.html","7d95a99595f63a1f606107d8e40ab75d"],["/categories/SpringMVC/index.html","f3c6c18301090c7657bc50cd7618e5d6"],["/categories/SpringMVC/入门/index.html","c4195ef590dadddf92d5297df3a60906"],["/categories/SpringMVC/参数绑定/index.html","b3860f11cd4175c8170bb85477d2a436"],["/categories/SpringMVC/异常处理/index.html","f2b2b94f75bc5ea0e819e696ee463aec"],["/categories/SpringMVC/拦截器/index.html","60ddd651e68955a75c0af24317a1322e"],["/categories/SpringMVC/数据-视图/index.html","04909ed9f6d6370a21a7841a739c9e10"],["/categories/SpringMVC/文件上传/index.html","ec0ebe3fa52c9d8ae1f519e33072c6da"],["/categories/SpringMVC/概念/index.html","b32e6b26a9b7f52a005727431200f1f3"],["/categories/SpringMVC/注解/index.html","dca79a6b732bde71f59ccd4d877ca353"],["/categories/Thymeleaf/index.html","1e53861c1efe716621d5c74d6d612f50"],["/categories/Thymeleaf/字面量/index.html","f3988ae175f491f1b2585abf792a9d59"],["/categories/Thymeleaf/运算符及表达式/index.html","8c22052b853862e66604deca742517c7"],["/categories/Zookeeper/Shell/index.html","d82cd2469c9ee06ba5288b93714a79ce"],["/categories/Zookeeper/acl/index.html","6601d34ca88e46a5644a485643a1cb29"],["/categories/Zookeeper/curator/index.html","a934f62180a1a8af864a190484fdf0bf"],["/categories/Zookeeper/index.html","7b682527ff61f38d62afdd5ea2646be1"],["/categories/Zookeeper/javaAPI/index.html","239204d65819eb5add049d0d0f7bd73c"],["/categories/Zookeeper/page/2/index.html","3f8a756c5fff5654307434c1c41f465a"],["/categories/Zookeeper/taokeeper/index.html","c3d7613cc369e3cb2745584157ddccd9"],["/categories/Zookeeper/zab协议/index.html","e0e210d813bd4e872f0bed31e4f75f2d"],["/categories/Zookeeper/zab协议/leader选举/index.html","6c884e12025faabd78a2e44989a14ca8"],["/categories/Zookeeper/事件监听机制/index.html","b0daa8b1192370574f1641837e1f1553"],["/categories/Zookeeper/四字监控命令/index.html","833c797499de4d993a88080cd89946a2"],["/categories/Zookeeper/安装/index.html","40b6fe546949e336856284804b5d468a"],["/categories/Zookeeper/集群/index.html","d7bbd70c5af38d00de8111cb3591e58e"],["/categories/index.html","cce875fdef9e00b2bfb5359e0a7870e1"],["/categories/mybatis/CRUD/index.html","87cd9d03cc8a509179d8b5658f8fd22a"],["/categories/mybatis/Mysql/index.html","5b7bf92af1093d27f343ad9d1f0af0d5"],["/categories/mybatis/Mysql/多表联合/index.html","6cc259c850848a705652edaa348aa840"],["/categories/mybatis/Mysql/多表联合/xml/index.html","40d067d15f1b53057ade862edbb18106"],["/categories/mybatis/Mysql/多表联合/注解/index.html","a1658ab0cc02e432787b0732808906cb"],["/categories/mybatis/Mysql/延迟加载/index.html","226f550da9bfe712af1cc6255d8f815a"],["/categories/mybatis/Mysql/缓存/index.html","00cc933022204c693a412f9bc5cc8602"],["/categories/mybatis/index.html","147365ff923fe28428a73e9d7fc211b8"],["/categories/mybatis/page/2/index.html","eac02c41a2dba80d7eb33d35b7a9290a"],["/categories/mybatis/动态SQL/index.html","380c3e7c94458d861167a8cb7775546d"],["/categories/mybatis/参数/index.html","682173df67f96ca6cbb2ca5a14712da9"],["/categories/mybatis/框架/index.html","350b44ca7471990364fb90a606d303f8"],["/categories/mybatis/配置文件/index.html","cf25c25bd0a6dba119eca279ee6e7055"],["/categories/教程/CentOS/index.html","6161d6973c19af906ebc4f6e3ee2cbf9"],["/categories/教程/CentOS/虚拟机/index.html","64d44b044b58228fff7f1f2bb42c84e6"],["/categories/教程/Jdk/Linux/index.html","c67a6061cbb75f50def222d4597e7531"],["/categories/教程/Jdk/Windows/index.html","b20d9fbb7edbdd86b1fc86da2f5200c7"],["/categories/教程/Jdk/index.html","9c7097eb0806819c0c07abe8ccee191b"],["/categories/教程/MacOS/iTerm/index.html","50f4f0eef6ff820085daa84366d0b6ad"],["/categories/教程/MacOS/index.html","77279f45723d721949acc961e76bc8d6"],["/categories/教程/Mysql/Linux/index.html","5c58e1ccee2e2b4ed72f84a8b33af932"],["/categories/教程/Mysql/Windows/index.html","ed1b696e8a2beb8836300f6fdf2b4cc4"],["/categories/教程/Mysql/index.html","2c5136468a821746b499a7fbb0e1715d"],["/categories/教程/Redis/index.html","6c1b7c9a8ada52026f2213d82e55973c"],["/categories/教程/Tomcat/index.html","95517239b9f0a01e0a46a1c4092248a2"],["/categories/教程/gcc-g/Windows/index.html","9c87b1b1818c8ce989f587977349ae60"],["/categories/教程/gcc-g/index.html","51d5abb6fb461f0c0d5c2431d44cc515"],["/categories/教程/index.html","d954d0c7b4d90f4aa10164237e13b4a4"],["/categories/教程/vscode/index.html","39ac0f5df95eab0b8f55780f1d90fda2"],["/contact/index.html","10ae921605f2b12926641b313f3dc682"],["/css/font_icon.css","39c73f2fdfd575d03a382922f26301f5"],["/css/index.css","c8e09749be13ebbc817aac2dd05b292a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","bbd3d17ffcb2e3460ca10fc5f3ed7a78"],["/home/index.html","5b5823cd415e2b320746bf3acfff04da"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","f1a1754fc855154fb0cd7f8c32b1c41e"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","2ca0aad3a6ffffbb2dc12b5f1c1c3f8e"],["/movies/index.html","0ac9d29174617857014abb7988df03d2"],["/music/index.html","f14a18c0ed0e2d44386af819aaf550fb"],["/page/2/index.html","eb3cf504155cd3c42cd2559e1f1b69ce"],["/page/3/index.html","cb704ea3747e5f93af7934c2317c3a7a"],["/page/4/index.html","103cc00d9a2c6ba2067fcb57be863b12"],["/page/5/index.html","7600f97e6006f1961b1ce3812788351d"],["/page/6/index.html","b236d84a2b097eb858feaf6ab5f61a0c"],["/page/7/index.html","bd55100931c5de90877c29353c270545"],["/page/8/index.html","1e1afd7eb2de7639c43aac82c5b29a55"],["/page/9/index.html","50b1921ba2d935a5273edff63deb5897"],["/posts/1304884562.html","3e50faf9c393be395f45bbcaa00efd90"],["/posts/190540348.html","ac45a1c9b6bbb4cf17625621102c52fa"],["/posts/2205990951.html","1fa4b62f650c7d9a227bf85883474955"],["/posts/2296141139.html","6bba0fc0abdbc6c1a940096b16d1d26b"],["/posts/2322029606.html","f0de0e85805d0559612bedf8cab5e004"],["/posts/3300220287.html","488286c6ee19a8203f6b3a43e3d127b0"],["/posts/3328524930.html","f85f5f744534b1796230b10d87db0cad"],["/posts/3502553385.html","5d5046431fa42e1cc49e81de36c23546"],["/posts/3841896169.html","afbea953b79afc5588f534cdebc6b89f"],["/posts/4226563224.html","3c28a8397341864195b3cb1b40d809db"],["/posts/4292261589.html","a6be536b4a1e4af539c33c0feea7b6f5"],["/posts/663709621.html","5d712cf81fe510d50743aa4f41e66732"],["/posts/72389457.html","ce4320ad2114b9602b0b9f1c06100aa7"],["/posts/Aop_aoptx.html","419196df2ccbc932f79cf9881a43b256"],["/posts/Jdbc_study.html","e8b2ac914f56f082471e534fe1aba1ba"],["/posts/Maven_study.html","710fa352acbd448a1a518aa0d8b0f234"],["/posts/SpringBoot_Interceptor.html","52ebcf76ff48fe6102509ae1a911479b"],["/posts/SpringBoot_ano.html","8da8ef790a3bb37f70c357d370fe7480"],["/posts/SpringBoot_myabtis.html","f03afb7e2d5fa2555c85616a2a01dfd1"],["/posts/SpringBoot_start.html","70a7508901f7a878f213fbf45d10f357"],["/posts/SpringBoot_tran.html","2a8e995ec2c9c5064ff506e6458715fc"],["/posts/SpringIoc_XML.html","49d51ac9813e7017340bf3f653d7b213"],["/posts/SpringIoc_anno.html","13398b904f65ed3aa3119e46a2b88f8f"],["/posts/SpringIoc_yilai.html","efa5fd065a1c3bc6bfabfee42376c358"],["/posts/SpringMVC_con.html","f166ef734b812fceef57616e75a47760"],["/posts/SpringMVC_data_view.html","47a8d03f62ccbe86f5feb8c3ef1f4cb5"],["/posts/SpringMVC_interceptor.html","a46efb92f135851d2dcff204bc51278e"],["/posts/SpringMVC_start.html","24655688e8aee3402d7c1f23917c5ff7"],["/posts/SpringMvc_anno.html","58941bbb810ae88f7fc6d923c1a6f320"],["/posts/SpringMvc_exception.html","476014406a0f8bb87373ac39968abe12"],["/posts/SpringMvc_para.html","51fb1f36693ecb0681650abb8fb0cb38"],["/posts/Spring_Aop_anno.html","9fa50056f3c3e739b0334cb9a406af7e"],["/posts/Spring_Aop_xml.html","e4fc798a3054b811d8b3aa090c0a7d98"],["/posts/Spring_CRUD_XML.html","706aa8327b3b2ed175897c79c5668614"],["/posts/Spring_CRUD_anno.html","0f5f9b1f59f0a9ffe22e7497a1e646a3"],["/posts/Spring_aoptx.html","7dccefd60b66b82e076aa55f6e9d7be2"],["/posts/aop.html","0253fce096b6d4c6a000a41ea81ccad0"],["/posts/beanutils_to.html","8b89db366c67b9132176d25deb30aa28"],["/posts/c_file.html","cb0afd075d4cb13100a8539a7839f7a0"],["/posts/coupling.html","b6b1097e02767ae11d962544a5c974c5"],["/posts/database_link.html","095aeac3c823d7f2156957d982455a0a"],["/posts/java_proxy.html","57823d831e93ce91a08bfce576d5eae4"],["/posts/java_re.html","dffe8db797c19af12f7b4d2f6ca035b7"],["/posts/mybatis.html","998f9d5b27ae47b0248afa721f93ef46"],["/posts/mybatis_cache.html","cae9334001b346cb27d933263aefc8d1"],["/posts/mybatis_crud.html","e608bbca00be09ab514f9a2f299d3c34"],["/posts/mybatis_deploy.html","96cc3a3c76e471d5faea3b5c59cbe021"],["/posts/mybatis_dyn.html","d78659b1817a025a12c57bbf9b904da9"],["/posts/mybatis_en.html","60b08abe828e797b19a5ec6ba2240204"],["/posts/mybatis_lazy.html","b2a3a04c9368737168807c9bf2b2fe9b"],["/posts/mybatis_para.html","b7b5d822a1bdabef95f40848ca1bc499"],["/posts/mybatis_res.html","f22b5b22d1a94d8e797418252bbdf7cd"],["/posts/mybatismany_anno.html","367c4ad91653f29c1fef0abbb474e334"],["/posts/mybatismany_xml.html","59ace643b076ca6989a9b19420cbfd6b"],["/posts/one_web.html","344f47e1b4afccb0c61464f870830c14"],["/posts/redis_dw.html","210a3426859017729dea1d11a3586169"],["/posts/springMvc_.html","e6281fee3b54b9d97b3c064ab9ec4236"],["/posts/spring_jdbc.html","2f429970b971594d93bd2f717f5c66df"],["/posts/spring_sum.html","df93b3f58f345b8edcc72ca06546d8f1"],["/posts/springboot_character.html","8722d7c9d9a79f96246e47c94298838c"],["/posts/springboot_filter.html","3bd45042c8b2aa4b0e2b36c048fb2c21"],["/posts/springboot_logback.html","780a9696899f614a56d571493a82aa88"],["/posts/springboot_restful.html","b3eb1ea12ee78c73b7102291205a7a80"],["/posts/springboot_servlet.html","e5be2da01d2929ab1f3307d6aca804a4"],["/posts/springboot_thymeleaf.html","1848484921adb4968a5e4579864d8d4c"],["/posts/ssm.html","05e7210ef00e5ce16dd0105f764305a3"],["/posts/thymeleaf_attribute.html","d68943ab48f5ca84cafffb2facc0bec2"],["/posts/thymeleaf_literal.html","397d5d6753a8854b4d9edb3f2cd1c3bf"],["/posts/tomcat_ins.html","938aaac474f5449398aa0e2fafb19787"],["/posts/vm_centos.html","3cf86131eecc38fe681ff40ea2469c2e"],["/posts/zookeeper_acl.html","ccc8dbe81318fc69e0583bd8ece96afe"],["/posts/zookeeper_colony.html","1e2b5c39356c80f3f7b32f196af178de"],["/posts/zookeeper_command.html","143cc0ad085f72857483adf3386ea474"],["/posts/zookeeper_curator.html","5d987fc6d78b25f7d06b30c3c2cdb620"],["/posts/zookeeper_dpkg.html","f7f3b543e15830dfe507933d1b51d2d6"],["/posts/zookeeper_introduce.html","01742438f87af1319e4c90a75c210593"],["/posts/zookeeper_javaapi.html","7b8fe4994239c8faa8fbfdf7b53b5964"],["/posts/zookeeper_shell.html","f75d81f6b7683772b8b769e7df8df0fa"],["/posts/zookeeper_taokeeper.html","1afc0ffbb14309fd82ca5983d8fb768a"],["/posts/zookeeper_watcher.html","30b086b8d00712ab5fea4a5c0a0e2104"],["/posts/zookeeper_zapandlea.html","c8ff491a0564e8e15dc186bc50ad9287"],["/sw-register.js","201699feb5f48ee8cf721a5c379bbef6"],["/tags/AOP/index.html","ba7fb935e7ed19721880fe59fad7dcd1"],["/tags/BeanUtils/index.html","f9171aa0f71b45aa8e8ab08ad5c1e0eb"],["/tags/C/index.html","d4b9ca4f0424227ec3c3365dfdb66851"],["/tags/CRUD/index.html","f65cb700c7b90bab1b4d196db9631512"],["/tags/CentOS/index.html","9aacffed8752907bfce87004fbaa0442"],["/tags/Filter/index.html","051dacc6f70e82d1143add439a72f420"],["/tags/IO/index.html","1da267d4b368004ac05f656e63060b78"],["/tags/IOC/index.html","24117457b846bac1ce73d97f6aecf546"],["/tags/JDBC/index.html","fb468dd095f965236e57a854f394d504"],["/tags/Java/index.html","c86a61ddb1986756b75a3bf9a0d90828"],["/tags/Jdk/index.html","01b1696709c80cb181d87108535acb95"],["/tags/Linux/index.html","7b7d0546fa8181a18f276f0f237f3a20"],["/tags/Logback/index.html","bd4e75657c03419ab417380c20d8aec3"],["/tags/MacOS/index.html","413decd3174ec45b02cc9e21b962f3be"],["/tags/Maven/index.html","279764eb6f4e6dbfbae12b97a93cca75"],["/tags/Mysql/index.html","e2f237dc68704df54da7eedd2c1ce267"],["/tags/Python/index.html","5ecc37ef68a867bc009efa4513b290a2"],["/tags/RESTFul/index.html","5d9628cc24aa764bebd88b4d45ce65e7"],["/tags/Redis/index.html","c080be153f785ea6c9d0c5f184d0e6b9"],["/tags/SSM/index.html","d1daddd97f9c62079b01ea0209aec4d1"],["/tags/Servlet/index.html","eb03d87797eae22f8667305b21032acf"],["/tags/Shell/index.html","3957c298a7765e8c0425ace1c1db35ff"],["/tags/Spring/index.html","02bbdf61c2ebc22823f1f7690bab6af2"],["/tags/Spring/page/2/index.html","6989ffab449dbadc92d78cfc11034e98"],["/tags/SpringBoot/index.html","131d80c6a9ba788495b1c69bc7428ab9"],["/tags/SpringBoot/page/2/index.html","6750bd7bcaab64fbf1b6d4579df9b32f"],["/tags/SpringMVC/index.html","086a077aa93ecf7a9a0b6e410b27916e"],["/tags/Thymeleaf/index.html","0fafa45c61e7434ea189dc58c3396fef"],["/tags/Tomcat/index.html","989008d3b123c67a5340c4263c6bb500"],["/tags/Transacation/index.html","860f6db14f11ce7118c30307786986ba"],["/tags/Windows/index.html","656cc12874d904750e6bf41b2d025557"],["/tags/Windwos/index.html","46ae5ff9d5a4785bfd6cf484d174a971"],["/tags/XML/index.html","d5294023137a60e26d70ec4144ee7704"],["/tags/Zookeeper/index.html","8eb1c3776342779bceb473499ca0b2ae"],["/tags/Zookeeper/page/2/index.html","cd6a637b7eac502e139452f9066dd283"],["/tags/acl/index.html","dfe0208f8dd269ef6bccf080181f10d1"],["/tags/curator/index.html","3a154097571d417c018bde554a2af687"],["/tags/gcc-g/index.html","b4b9cc00748eff8c6b875e907e3e7e72"],["/tags/iTerm/index.html","ff69355bc825ad08e9f4f8ba7f0ad815"],["/tags/index.html","d17ad36ce9df179e8144cd88f44103fc"],["/tags/javaAPI/index.html","41c35617562202480bcf309dc08ccbf4"],["/tags/leader选举/index.html","441574281adf203da35e5cc7901c71a3"],["/tags/mybatis/index.html","0fdc2a77bc4dcb924b5df149154604ae"],["/tags/mybatis/page/2/index.html","34e5e5bcbac2312d91f7f8e12cee83c3"],["/tags/taokeeper/index.html","04b88d99e27a26c55a75b506b36369bd"],["/tags/vscode/index.html","bf59429fced904c7e079946dc7470039"],["/tags/zab协议/index.html","f5a0623ad0d264b754b9cd6829fd9f99"],["/tags/事件监听机制/index.html","b33659c0784f6c30f513cb3bbd344e7b"],["/tags/事务控制/index.html","4bb658d5a3ad7144fe44777bdb8f039f"],["/tags/依赖注入/index.html","3c51cda67dbe428d371235907734bde5"],["/tags/入门/index.html","5ec90766f47443e7af5898c324288877"],["/tags/内置函数/index.html","0ad19df9799e8517fec584600646d8e9"],["/tags/函数/index.html","6bff5350c871b1f4bd87808d20cd2a3b"],["/tags/动态SQL/index.html","ac3d05dfbd4313d1b6d37fee08b4f3bc"],["/tags/动态代理/index.html","a9512b38d12babc08366d98cf71f8e76"],["/tags/参数/index.html","a2bccf05a122aa9d95c487a47fab474e"],["/tags/参数绑定/index.html","4bc01bc06145f38d6a8fffaa7a31ed3e"],["/tags/反射/index.html","a8a003fcd818953c10d1cd193fe5cee3"],["/tags/四字监控命令/index.html","b1494bb03e5e925573a137b2930871b9"],["/tags/多表联合/index.html","bdf27766a0b9cde1d6b67665659e509f"],["/tags/字符编码/index.html","a72198b487450123a913bd18f47f7fe9"],["/tags/字面量/index.html","6f17e6d9ea6d574a0cf6c083bbbf4328"],["/tags/安装/index.html","b2c709cf372d01a06ac7a1b02e3ef6aa"],["/tags/延迟加载/index.html","faa4a6583387fa406a5ce475faca20fe"],["/tags/异常处理/index.html","2428fb3545253ad907259ce451a73008"],["/tags/扫雷破解/index.html","b9fd09fccc7b285f9e1b7dcb99de92a8"],["/tags/拦截器/index.html","19b1a6039e76070857787fe7b2c54e48"],["/tags/教程/index.html","3a413e76b845de41fadaab64235124dc"],["/tags/数据-视图/index.html","57f60a96c749b6d5bab82259813dd4e9"],["/tags/数据库连接池/index.html","6d0783c4d76516859e2089a281408c71"],["/tags/文件上传/index.html","e03b5fd2fa10801a4195643a019375f6"],["/tags/框架/index.html","f964cde959f8b711105be0979de79d91"],["/tags/概念/index.html","f8ef7093e597a8163466b6dac028e706"],["/tags/概述/index.html","ea7313918581b84291369d0448024e3b"],["/tags/注解/index.html","4d0c3080f7374992e9826483bbf0986e"],["/tags/缓存/index.html","e6afa6d426c711c4341ba60ca6dee79a"],["/tags/耦合与解耦/index.html","65f49ac430ae0c8777cc10bccbb409c9"],["/tags/虚拟机/index.html","679531e0fe98813b20204d792ffa8f7d"],["/tags/读-写文件/index.html","8d337757acb02ce763d05d781127b57b"],["/tags/运算符及表达式/index.html","d901a7e860d506c2a909ffcde18a573a"],["/tags/递归/index.html","3fb80cdf446b6eb7bfafd7318cb4793c"],["/tags/配置文件/index.html","3380f336c79570ca61bee6de5111a571"],["/tags/集合/index.html","5c0601b3a2e41b1abeaddab6817de9d7"],["/tags/集群/index.html","24b1de8a249e63e93a1f5dc6c38bb13f"]];
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
