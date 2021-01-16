/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","23a400c4b186430c9142d97d3451954c"],["/about/index.html","4c9de76a2e5bf8818b80b0bf026711ed"],["/archives/2020/04/index.html","c6d59532d67cf03644a22d6e941d9824"],["/archives/2020/05/index.html","eec8388e471518458564c8558092ba1f"],["/archives/2020/06/index.html","15169c97af73010996476910a0131088"],["/archives/2020/07/index.html","f97ad487d11f64786230efbfd0804718"],["/archives/2020/08/index.html","a06717f78f7cc4d58434017d8b951ef9"],["/archives/2020/08/page/2/index.html","5270d58250fb5dff87861c4b7fbf37bb"],["/archives/2020/08/page/3/index.html","e5c8e35a4531a68d92b0e5babac8d42a"],["/archives/2020/09/index.html","03773d47081ca34940f7deb5b7422025"],["/archives/2020/12/index.html","00a94fd3441679161ea2329cdd5ea9cd"],["/archives/2020/12/page/2/index.html","cb0056423c261631e1c8fdbc0fca316d"],["/archives/2020/12/page/3/index.html","8e23330f6726ffc90889de76e1fea6dd"],["/archives/2020/index.html","def98a35c63ed4b73201dd236b0d1242"],["/archives/2020/page/2/index.html","eba07f2b79b4d147505186f37a902722"],["/archives/2020/page/3/index.html","cc855b44749a101a076924a0b7243a91"],["/archives/2020/page/4/index.html","2c488b464b410db99aef0585c0e43a1d"],["/archives/2020/page/5/index.html","49c8802b8a6913f53f88976209b0081b"],["/archives/2020/page/6/index.html","65003c712f79f9b845754336547616cb"],["/archives/2020/page/7/index.html","06e823b8a356adc887a6d705cdf3708c"],["/archives/2020/page/8/index.html","90f62d5180e3f5ba9d25090c6bcada32"],["/archives/2021/01/index.html","283bf4a97f2dd07e231c835a981c599d"],["/archives/2021/index.html","7358772a4392079f964cfc08aa0fb7d8"],["/archives/index.html","acac41738260b76ff60434fb6e2c4c43"],["/archives/page/2/index.html","0e953197633fa8cc723d8bd8554d8d5e"],["/archives/page/3/index.html","aff45400b806586563788c21321e840e"],["/archives/page/4/index.html","7f4ef2a7314d7aeb631548708f1c4b03"],["/archives/page/5/index.html","c50a159445ec7f79d0b1eda691f543af"],["/archives/page/6/index.html","334f9068eff385c4ac32bf3713501f2d"],["/archives/page/7/index.html","d5da6274a4b59cc4e0d09f668b758e4f"],["/archives/page/8/index.html","2343db911074bf30d4f525d3c0e5e25a"],["/archives/page/9/index.html","ac8421dc36ec4a1d19456380a2d61be7"],["/books/index.html","d7797b47099847892e8320eee94cc101"],["/categories/C/index.html","0d958a57ebbb2a570e78b2c06c6cd835"],["/categories/C/扫雷破解/index.html","e60ef0ecc3ddb44707eaaf83b2a4772b"],["/categories/C/读-写文件/index.html","f3278601c40b41a1f37a94c899905d06"],["/categories/C/递归/index.html","ccf2a9f11164cacbe2d9120cfdb39fdb"],["/categories/Java/BeanUtils/index.html","a253ef8e9c993fd8728c857adaccf103"],["/categories/Java/IO/index.html","8f4314ea3c5fd1e91d1b7252f3a19b06"],["/categories/Java/Maven/index.html","7295b52942227800e59a5c0006000e25"],["/categories/Java/index.html","fb2755b7ccb9aaa0ff1be7a7612aa211"],["/categories/Java/动态代理/index.html","496483ebd9c3cbb4cac0ca1a4e6b8629"],["/categories/Java/反射/index.html","af7ec77996ba347c184deaf3b7bbe1b6"],["/categories/Java/耦合与解耦/index.html","077bcfa0eb15b0e79d02574ac308a769"],["/categories/Java/集合/index.html","b5729df8173d6850a2399ac43c386782"],["/categories/Mysql/JDBC/index.html","639dd9c6450450ee82a6c4d0540a7590"],["/categories/Mysql/index.html","a66ffdf42469b1b98dac46021de40781"],["/categories/Mysql/数据库连接池/index.html","b12e0dbe21423175b07135c1f52396b8"],["/categories/Python/index.html","16f088229aed2c5cf3505937a1a28dab"],["/categories/Python/内置函数/index.html","93ced0ad19777c32cf600846ae99bdf0"],["/categories/Python/函数/index.html","94d67c15bde78c5e6d31863c60c1cbb7"],["/categories/Spring/AOP/XML/index.html","3f6ba59d8b10bc08a54940c80971a269"],["/categories/Spring/AOP/index.html","8f9cd1e8d8ec16a1172f72d80ef87768"],["/categories/Spring/AOP/注解/index.html","40f0f004314dabcf2bae84f76b56f957"],["/categories/Spring/CRUD/index.html","f4724151d5b560c4ef7ef744d9d8e273"],["/categories/Spring/IOC/index.html","9d5363f71065a7a8684b8ccecbbdab85"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","213df860f181d547cca45512dfa82ff5"],["/categories/Spring/IOC/耦合与解耦/index.html","181b16a7200c048789eea1a14a96506e"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","145a45b610fbe531534348c6d550a493"],["/categories/Spring/JDBC/Mysql/index.html","f5745f5fbbc94e73548754f923b18004"],["/categories/Spring/JDBC/index.html","920bae27242c0e51d14edb3df6b60315"],["/categories/Spring/SSM/index.html","1be5e4a9a8be855eea3911ccce7aac89"],["/categories/Spring/index.html","49771ff6a6fbe5efeca3834e09ef143f"],["/categories/Spring/page/2/index.html","bb9a256f4fee29b9895184a72eca78cc"],["/categories/Spring/事务控制/AOP/index.html","b6044ae01de7a4330c0910e9d6eaab77"],["/categories/Spring/事务控制/index.html","fbaf582107d17c6fb8ef91082c418389"],["/categories/Spring/依赖注入/index.html","f3743bef4bf4cc67d82cb89572620720"],["/categories/Spring/概述/index.html","3517f8318b49fb458670ef94b2db1173"],["/categories/SpringBoot/Filter/index.html","1b44f12079d129d4bed52e30bf678b2f"],["/categories/SpringBoot/Logback/index.html","a381f9cab7823f78ea4df728201f2e05"],["/categories/SpringBoot/Mybatis/index.html","da1edc7e5689092c9e7b5c1cbbd02eb4"],["/categories/SpringBoot/RESTFul/index.html","309a78eed5a3fbb59a0755606d34ab99"],["/categories/SpringBoot/Redis/index.html","b44ac65593318c8d92ee21e8c091484b"],["/categories/SpringBoot/Servlet/index.html","6d2a1f8c03de7453d4da2567be894f65"],["/categories/SpringBoot/Thymeleaf/index.html","2110ee9fe3c88779b9c765fd76eadec5"],["/categories/SpringBoot/Transacation/index.html","9b1ec981c08d540731f8e97f71a6b983"],["/categories/SpringBoot/index.html","ef8cdbe6c039b55f0eee0d3bbcd41e4c"],["/categories/SpringBoot/page/2/index.html","a64aca2f430f589a9adb4cb3a49e2d57"],["/categories/SpringBoot/字符编码/index.html","33f287b2e18d0c6a7a634ccb4b9852ee"],["/categories/SpringBoot/拦截器/index.html","ef1199765a3cca013299f39c4744e1d7"],["/categories/SpringBoot/注解/index.html","4ed13fe44e9c09d283b66f2b3d3bf58c"],["/categories/SpringMVC/index.html","ed90873dd63d4f2bccd39275fac367a6"],["/categories/SpringMVC/入门/index.html","befe8c223ff8565bd10763e148ac84e3"],["/categories/SpringMVC/参数绑定/index.html","ccd09e6821684687319be6b53e08d5a6"],["/categories/SpringMVC/异常处理/index.html","4ef19f2f26bcb86c397581cacaf2ea11"],["/categories/SpringMVC/拦截器/index.html","bdf657fd0ad742ff843403f3a9f25225"],["/categories/SpringMVC/数据-视图/index.html","9b46625d6ac3ed0c132c26111b4f0cb8"],["/categories/SpringMVC/文件上传/index.html","48be7cfbf1119c6790d28e69a8b6cf03"],["/categories/SpringMVC/概念/index.html","2b8dcbb81aeaf6eeede878c006358f4c"],["/categories/SpringMVC/注解/index.html","8b47a8642f6fdf6b805680c5bcf13d50"],["/categories/Thymeleaf/index.html","76327e342630b7f7648a7db6364c397f"],["/categories/Thymeleaf/字面量/index.html","6691c2537166baf4ff591146e7e1710d"],["/categories/Thymeleaf/运算符及表达式/index.html","3751833613c5cafaf0239b3ebc1b39e9"],["/categories/Zookeeper/Shell/index.html","08b11feb1b8f84dff709694057339fbc"],["/categories/Zookeeper/acl/index.html","28a264ce200dfd090e487dd2c27e067a"],["/categories/Zookeeper/curator/index.html","1d4f68c140f45bd0fed66c51ddd419fa"],["/categories/Zookeeper/index.html","85e0f57b3cfc6fa45d61a63231c92452"],["/categories/Zookeeper/javaAPI/index.html","0dd9bb9c7ef6aa324d672000d355f2d2"],["/categories/Zookeeper/page/2/index.html","75bea4dc5548acfef5a5fcf0560df5d6"],["/categories/Zookeeper/taokeeper/index.html","7ab8dd6a95089570d121f50e94a731c8"],["/categories/Zookeeper/zab协议/index.html","c84bfe3ad9948a3599bb4a471386255f"],["/categories/Zookeeper/zab协议/leader选举/index.html","f8c2462fb8890dc650bc6e8473b1cebd"],["/categories/Zookeeper/事件监听机制/index.html","b8711b4464bb6329fde6a62a5c7a2169"],["/categories/Zookeeper/四字监控命令/index.html","dafab16b4b1b52d77b2862861d3c951d"],["/categories/Zookeeper/安装/index.html","0e695ef620abe41ed6d08f24442f61e7"],["/categories/Zookeeper/集群/index.html","b3b32460ff4d1cfcb8af924f78c16eee"],["/categories/index.html","638a68c2d01316c3d28dc5ab0056d02b"],["/categories/mybatis/CRUD/index.html","8f229b0f1cc92ba332c20914755e55df"],["/categories/mybatis/Mysql/index.html","beb5b2fa75c6b6bf57cf158ef0ec6fd9"],["/categories/mybatis/Mysql/多表联合/index.html","e7f7c0c9a88674d8d25dc81d541977cc"],["/categories/mybatis/Mysql/多表联合/xml/index.html","5a806bf4503b4f7f4d945b7c5d2e5f60"],["/categories/mybatis/Mysql/多表联合/注解/index.html","20c82a3e33be984dd19b59d58fef9d18"],["/categories/mybatis/Mysql/延迟加载/index.html","ba048eb6097c0129682595e360616025"],["/categories/mybatis/Mysql/缓存/index.html","bdf09018159a66da452a5d1a912235cd"],["/categories/mybatis/index.html","6f28a4c8e1022b23d87be6d3f5949f9d"],["/categories/mybatis/page/2/index.html","d9693b12e047a2cd4ff0b2737f26d65f"],["/categories/mybatis/动态SQL/index.html","d36badf25099c2b700a7df9b8ee63e7d"],["/categories/mybatis/参数/index.html","79a77386004076860a2f35c66594e1e1"],["/categories/mybatis/框架/index.html","ea40b909c78a42ae165b9e6890a20582"],["/categories/mybatis/配置文件/index.html","6988803c0c2ae8decfeff3966e4eb9f2"],["/categories/教程/CentOS/index.html","7815e2966432ac3734169e272b7a33f2"],["/categories/教程/CentOS/虚拟机/index.html","b4abf58128c21bddaef13ff153b11916"],["/categories/教程/Jdk/Linux/index.html","b51540b7330434e3e89d6b10702fe669"],["/categories/教程/Jdk/Windows/index.html","fb78a9fe312400e8a863b5de51a005ff"],["/categories/教程/Jdk/index.html","83294eac27c178a2fe81aa8eb7ac82f4"],["/categories/教程/MacOS/iTerm/index.html","73c23332b20f66d454c0983ebfd271ef"],["/categories/教程/MacOS/index.html","2ac29d674f34043fb794a9d2f4061c5c"],["/categories/教程/Mysql/Linux/index.html","1ab86b223f792bab655c31dd4bcf20a4"],["/categories/教程/Mysql/Windows/index.html","0bee3ee6ead7151e9c4461bddbc8098b"],["/categories/教程/Mysql/index.html","352dc8d679ca355420509d5122906fd0"],["/categories/教程/Redis/index.html","9d12e2b6dfb3c78875a6eb52549e7cdc"],["/categories/教程/Tomcat/index.html","4a93b16bce1d61ee4af4a4e8d4a0a991"],["/categories/教程/gcc-g/Windows/index.html","ac0cf67dc7e0acb530b3ddc2778f1eff"],["/categories/教程/gcc-g/index.html","f9bac9826ce7767ac2cfebd73c2c6d60"],["/categories/教程/index.html","6bd73516a87038bca12a4bfb86d55459"],["/categories/教程/vscode/index.html","429896d0dd82dbe2cb1d16db29dd00f0"],["/contact/index.html","10ae921605f2b12926641b313f3dc682"],["/css/font_icon.css","39c73f2fdfd575d03a382922f26301f5"],["/css/index.css","33079bfaad4a5191d3c65bef5db6e5d1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","48766d8c27853f193cb319ed6e838836"],["/home/index.html","3d1fde8e1355e2eb908bf4abcb9fbe4a"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","9f06ef8f3a4067841504a5f6beea37aa"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","403bbdb91abd85ddb3a7cdcb42bb7d12"],["/movies/index.html","e6bbe3a547614156706d5dcdcc36614d"],["/music/index.html","cb00c39e4b57bc47cc0ef41dc4a71c44"],["/page/2/index.html","27bc5ab4264d2dbefbac059e3a35faac"],["/page/3/index.html","c2a0ebcf5c10e5c3c0139fcb491cd46d"],["/page/4/index.html","6032dada21182e4d53373bc68ef54828"],["/page/5/index.html","db0be4f8ced11a2851a9fc7a89aa64f7"],["/page/6/index.html","1386968be5db27b32862d9b4f542f656"],["/page/7/index.html","6d9d0bed3ee7cf5a1996d7c8f4735547"],["/page/8/index.html","eb4494313d00bf145cda3187356923b0"],["/page/9/index.html","157051a9d60e905aefd349eaf126765b"],["/posts/1304884562.html","b692527e9b72bf4c588b60863eca047b"],["/posts/190540348.html","1ad954bfa2d85991112bd2cf1a85a47e"],["/posts/2205990951.html","b0394a1d227e4dbb565ac09b8f028712"],["/posts/2296141139.html","ca21b73d4d95a5c45bbe29f6206af35d"],["/posts/2322029606.html","867db167bbc944cfce807d425c192b2d"],["/posts/3300220287.html","dadef9dec7770ad727e45ed94de7a8f3"],["/posts/3328524930.html","c70e2b73bdcb864092a34fc805ae1a7e"],["/posts/3502553385.html","55fd07463b9865392a422752bbf7ca1e"],["/posts/3841896169.html","c8e0233ab72edd7fdace4593aad0a2a4"],["/posts/4226563224.html","1effe104d49033184b562a44e2278ded"],["/posts/4292261589.html","942f3730c804619d6e111c13543c3aba"],["/posts/663709621.html","7d0b8f40f35688291f317c6a4b6f3434"],["/posts/72389457.html","7844c816785e62b45ca039e1070da710"],["/posts/Aop_aoptx.html","28f3a5a6262e6f7b5c4b1bb56ac79f7e"],["/posts/Jdbc_study.html","71419149642a3443833a039890e7e564"],["/posts/Maven_study.html","fc8cb64ef6fa5b530542e14f6bc49139"],["/posts/SpringBoot_Interceptor.html","ade38473fe965d8d9e6ee6e9c1804b4c"],["/posts/SpringBoot_ano.html","991613e33b6522fb366ec6dc9eed7edd"],["/posts/SpringBoot_myabtis.html","53157b07400397c34f670adda5656a8d"],["/posts/SpringBoot_start.html","c7e8bf7c6c2fd737d533d5411e79818c"],["/posts/SpringBoot_tran.html","a3094d91705219c50921d6d3fafe8ac7"],["/posts/SpringIoc_XML.html","cc15ccf7500d76ebbecd54519659de7f"],["/posts/SpringIoc_anno.html","73bb3c400655bd0b0909b3fe608d3bf4"],["/posts/SpringIoc_yilai.html","1279e85929e7a2b5cd0bbe23336eae53"],["/posts/SpringMVC_con.html","cf4b12de52abec28dad028b4c8f3bee5"],["/posts/SpringMVC_data_view.html","aa81812008ce8aab0cdb76b69f14d49b"],["/posts/SpringMVC_interceptor.html","89bd2832b06fe2d1c7655dff2d9c1df8"],["/posts/SpringMVC_start.html","7192de7860bce70bfd4508cf8bf62f14"],["/posts/SpringMvc_anno.html","351851669af24d2edad955dc27231faf"],["/posts/SpringMvc_exception.html","728fe07e712eb734bea098324d23f02e"],["/posts/SpringMvc_para.html","0cfb791706de7cbf9da2315d01bdd3da"],["/posts/Spring_Aop_anno.html","6e5c08be225ac540fe7033fb86a50b88"],["/posts/Spring_Aop_xml.html","5a54ffca684bd8b39f3790a6fe49b878"],["/posts/Spring_CRUD_XML.html","3e229e04280a7f6201a2396336f4c0d9"],["/posts/Spring_CRUD_anno.html","7f74ff77c0eb8b16ddd7dd2f68858c2e"],["/posts/Spring_aoptx.html","c108bea24e8a421b5d2009dfc060d425"],["/posts/aop.html","9f216d86d3a2a65e9b1fd5aee17b6f77"],["/posts/beanutils_to.html","822fc8f6dec62b0affed42ade80663a6"],["/posts/c_file.html","2a4416fecf447ce90d61df03bfa2fd40"],["/posts/coupling.html","b409b41668eda370856253db5f90d86e"],["/posts/database_link.html","bf5c0955766c2d504228698265d4ed3b"],["/posts/java_proxy.html","d4d3c9af5495e267ea442168a3b943c2"],["/posts/java_re.html","f403d8392bb89d69e48b35fad2d4607c"],["/posts/mybatis.html","91beb62ffe3d045e1df0be1616c1a3ce"],["/posts/mybatis_cache.html","f4d68182de473850625ee98f181eab99"],["/posts/mybatis_crud.html","f12f69ce27198bf34f3009f68e5c38ab"],["/posts/mybatis_deploy.html","ac6f21dc7cdb78e87ad1b442cac8a7a8"],["/posts/mybatis_dyn.html","0c4ed274722fd79dbb1f234004c8d2f8"],["/posts/mybatis_en.html","65948e2122f2cfe5dd040416bc5cbe16"],["/posts/mybatis_lazy.html","344d181c58622a3202c3aaee02138cc5"],["/posts/mybatis_para.html","5431e97f9d8ceb866d0ff86e39070ed4"],["/posts/mybatis_res.html","0ff6821c77a82f6caf1f8568f56b0837"],["/posts/mybatismany_anno.html","a9da647b537e9e2e53930652ca9d6329"],["/posts/mybatismany_xml.html","9c140b5ce4e4361b73461a94c28fdcdf"],["/posts/one_web.html","2dd0665af71dd7ec3caf3c12613670fd"],["/posts/redis_dw.html","e72e054e91599082c1f610ee877cd327"],["/posts/springMvc_.html","979bf6dd1bdf88f2a78f8931e92fce92"],["/posts/spring_jdbc.html","f7994922a72da9a88517b82d65d1d772"],["/posts/spring_sum.html","6d7e8fa0deacdead04aab2354619b9b9"],["/posts/springboot_character.html","f70b28861ebf4c527fed64833d5bcdae"],["/posts/springboot_filter.html","3417cde98bf5e731788dfb81f10c8d7d"],["/posts/springboot_logback.html","278386b097b243eca9e800315b4e16b7"],["/posts/springboot_restful.html","e9a5db2cd0da9cde4adb55d84f2070fd"],["/posts/springboot_servlet.html","119b4cf05909a5855489f441e94d6844"],["/posts/springboot_thymeleaf.html","d9a3b6079cbc36121b530409e754e849"],["/posts/ssm.html","780298af4b8f40b0163fb5b71470797c"],["/posts/thymeleaf_attribute.html","95504bdac2e9a10722ff0b1b655cda82"],["/posts/thymeleaf_literal.html","1fb2dd18f815930bb9330f169f97f4eb"],["/posts/tomcat_ins.html","0a6fc5e8ab3b3eece357848f859bb8bc"],["/posts/vm_centos.html","4ee14b14944398733dd83082eb4e4d13"],["/posts/zookeeper_acl.html","8eba7d64e751339112ed94e34e5d57d0"],["/posts/zookeeper_colony.html","f6c5ea88f7ea207d83b7d75a5837f48e"],["/posts/zookeeper_command.html","5039a9aecb2afe8097d556140bd778f6"],["/posts/zookeeper_curator.html","f9c3a7cd64977d355a8393020646a2f6"],["/posts/zookeeper_dpkg.html","da1d984999d5b17203d2857b8dfcd902"],["/posts/zookeeper_introduce.html","de6f34863bc265530db255469986a74d"],["/posts/zookeeper_javaapi.html","492ef6fd3bdedd47c5523cee31181316"],["/posts/zookeeper_shell.html","6d1ce1751d5758e1f58fa234db39bc84"],["/posts/zookeeper_taokeeper.html","a9136957553f98d3077ad9beca8268f3"],["/posts/zookeeper_watcher.html","da32b992098a94e3a01f097a775ef581"],["/posts/zookeeper_zapandlea.html","f73e20580c15eaf3bc2a13e7b9d673b3"],["/sw-register.js","980d253e7be280e947f24639bc919211"],["/tags/AOP/index.html","a112cd07dc8948ec4f357bd682389c6f"],["/tags/BeanUtils/index.html","864124e3aa6b660e4bef6372b3f7d995"],["/tags/C/index.html","e2f50f46c7548895f32a801da1b9d79e"],["/tags/CRUD/index.html","540bbf34ece44cb759785ac8b7e0a0c6"],["/tags/CentOS/index.html","4b004cbed1861a16eb984234443422ae"],["/tags/Filter/index.html","008c57df86deb8101d07e3d29942d228"],["/tags/IO/index.html","24fbea624d1f3db2006424868a25946d"],["/tags/IOC/index.html","78e6dadd91a58c218d010ed95bf066be"],["/tags/JDBC/index.html","f75f249aa475ae107b5224deef4b2df3"],["/tags/Java/index.html","12113019fbc7eabd76e61cd639647ba2"],["/tags/Jdk/index.html","90b9036ee3e14eee7f43bb31790deb46"],["/tags/Linux/index.html","f0813fe679e24ebc1546a1b9d9ad5e5c"],["/tags/Logback/index.html","67358c1f01ec9d4b6d6e5232dcfe4846"],["/tags/MacOS/index.html","d13261181bb2e1e187c5b3ca43ebb095"],["/tags/Maven/index.html","8ae8ea5b6ba2465631b47d82ab3019a7"],["/tags/Mysql/index.html","83aa32ca1cd5a22c829659dae7c6b699"],["/tags/Python/index.html","58b36db059d11f5ebd685f7ef3d85dde"],["/tags/RESTFul/index.html","4288c957d25f24a921bef47e06733f27"],["/tags/Redis/index.html","47bc7cd86f8ae26a71fc77eb5b767a44"],["/tags/SSM/index.html","5fe62a5d17bf7bd7efe756e1b855c5db"],["/tags/Servlet/index.html","a73d11100ac53c308cab48b73b648f93"],["/tags/Shell/index.html","1ff41741623937d549cf1eb74d3ba96d"],["/tags/Spring/index.html","446cd172784b8eed0e8721e1da46aa5d"],["/tags/Spring/page/2/index.html","8395e60de820dbd9b88b6ac469f8fa58"],["/tags/SpringBoot/index.html","30a3bc739c34732c651f678327e07e6d"],["/tags/SpringBoot/page/2/index.html","6f8b23e258fc4afa4d4b594abc3a7c42"],["/tags/SpringMVC/index.html","62ef9bd9169e16a075109e201c1c7277"],["/tags/Thymeleaf/index.html","e437cbac05d604d561cb3cd6d53e3e80"],["/tags/Tomcat/index.html","99a5088c256655747d32849212634e41"],["/tags/Transacation/index.html","d8ed46b1741d2ea000fbec2fd74c2f1b"],["/tags/Windows/index.html","ea81cdfd2f0a627f5f9501f56676f141"],["/tags/Windwos/index.html","6b5bef1a0f7ba606ef09315501dc8283"],["/tags/XML/index.html","996a8891572db54f3c256340bf494c96"],["/tags/Zookeeper/index.html","359cc856a2431f28935e186d82abbf1c"],["/tags/Zookeeper/page/2/index.html","f5fa5d3c0fcffee566e35a666858d960"],["/tags/acl/index.html","18f94418024294e7649b3120061d5319"],["/tags/curator/index.html","a83b7badbd754a337f8078f58709cb54"],["/tags/gcc-g/index.html","cbb51d6ae0f4b922d2d2088335ce579e"],["/tags/iTerm/index.html","1aca09995a26e5871e3e55e8e10aecf0"],["/tags/index.html","489d552cf0285b8918e73650eb3d129e"],["/tags/javaAPI/index.html","aa563eff4de220c757e586e89ea22cc0"],["/tags/leader选举/index.html","2da98f4adfab830cc998216315593b0a"],["/tags/mybatis/index.html","00856697e48d9eae29264e449bbd5782"],["/tags/mybatis/page/2/index.html","a59bbff29bdb9b7301f14c8e045b185f"],["/tags/taokeeper/index.html","dfa6ce1601177c4251d37f0cc2edcdfd"],["/tags/vscode/index.html","c997a6e155994e517a146469608185ad"],["/tags/zab协议/index.html","b5e8e12ab9f700ba60fab400d6f3d8dd"],["/tags/事件监听机制/index.html","fc36e5dbab695e3b9567cb930ece6f5f"],["/tags/事务控制/index.html","78c66dea275e34f3808ee226b2428982"],["/tags/依赖注入/index.html","a282a34b5c52e60836a28b46fd92e39f"],["/tags/入门/index.html","942792adbef22d6e58e12a852b1a4ddf"],["/tags/内置函数/index.html","9b08561f26583cf5f2c3938c6da80b18"],["/tags/函数/index.html","01eb48e0ce4e41fb5b5e416073152182"],["/tags/动态SQL/index.html","6136bea71b5f7e8a82c13249c8766b35"],["/tags/动态代理/index.html","56347bc1f867da299c60221c4edd759b"],["/tags/参数/index.html","63f63c1c8038a6b117ada876f30e4a33"],["/tags/参数绑定/index.html","fd1ebaf906f23497a2f8d6626b5a81ff"],["/tags/反射/index.html","258279c9f9e7ad15b23bfc68a82182dd"],["/tags/四字监控命令/index.html","1daa4282af828624a929f7c5f7559f62"],["/tags/多表联合/index.html","89f54068ae7eeaae669590572b6d122d"],["/tags/字符编码/index.html","9b8dcbcf33ea5b5302fd8288778e1d1c"],["/tags/字面量/index.html","2d15dc58d5cc7b8e97aed4f4088d1274"],["/tags/安装/index.html","b51d53f83da121149f6d371a30825117"],["/tags/延迟加载/index.html","2a54ba2f8ed11126b446c74ea9e1061b"],["/tags/异常处理/index.html","900d205a31c167ce2bfab17a126570a1"],["/tags/扫雷破解/index.html","edf4c3fc282413521d4a91894bc91fdc"],["/tags/拦截器/index.html","a552f2621c40c162bd8e0ea70a90a4d5"],["/tags/教程/index.html","4859446ef419750c00941134f8bf4512"],["/tags/数据-视图/index.html","ca68952522f448029c4715b769cc4370"],["/tags/数据库连接池/index.html","6ca474161ca2b6178d55e964ae1825ed"],["/tags/文件上传/index.html","96cf19fe0434276a35fe31361c3af91a"],["/tags/框架/index.html","7f9a7e81ab9c0479d994da147cb749bc"],["/tags/概念/index.html","5e8ca2001f14913c2e7f359351512397"],["/tags/概述/index.html","3d790d19411648be27ceabc8ff7982b5"],["/tags/注解/index.html","b603e77f7ede031737efa0626503bdeb"],["/tags/缓存/index.html","3d2a2ec6f51b20c3eab75621957655cd"],["/tags/耦合与解耦/index.html","c449d654534204b658b35d999fd47465"],["/tags/虚拟机/index.html","0aec7286996b2ca5ad4d006b0e470a48"],["/tags/读-写文件/index.html","a7d7e2db5f504b66c5d7914e777e7cb0"],["/tags/运算符及表达式/index.html","bae40a104ed59009710276344508f729"],["/tags/递归/index.html","b27fae4bcb9a89d5d39707e5c386d893"],["/tags/配置文件/index.html","ee982d2346b6f04334ff28eb55a94682"],["/tags/集合/index.html","17a8c7f753c3beb60ae50198c27a6152"],["/tags/集群/index.html","b0308be9aef275720af064290eb5ca08"]];
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
