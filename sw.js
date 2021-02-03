/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c05219ea45552329fe8dce7ae520adcc"],["/Just/Just.css","7e170cfd1d8cc1cc32645eaa435f6a61"],["/Just/Just.js","ea82e200d95e38bf8c42a380bb5eb6cd"],["/about/index.html","e5b898301850c89ac56cb7920c4876ec"],["/archives/2020/04/index.html","6c522244679f698b435662f7658fd143"],["/archives/2020/05/index.html","978efdeca9f24f6c4910bdcb45c80ced"],["/archives/2020/06/index.html","800a503c4f7adf1bc90898b2d8978ae8"],["/archives/2020/07/index.html","c76af7a3b07dd5fafbf899cae179853b"],["/archives/2020/08/index.html","415870dede3c089864df83fc96644ccb"],["/archives/2020/08/page/2/index.html","0b97f41e87b58ca183384412ea368517"],["/archives/2020/08/page/3/index.html","be1871934edd07360fe4244a5606bb66"],["/archives/2020/09/index.html","146113ad0b8802eb496264a03e3cadcf"],["/archives/2020/12/index.html","3e28213c4a2cbc77f8774e9f01ae10e0"],["/archives/2020/12/page/2/index.html","4006a4768123def102226a368605bda3"],["/archives/2020/12/page/3/index.html","bacb79da6966d1d32d1ed56fc37bba3f"],["/archives/2020/index.html","51ca228f4b464031625cc675b753c97c"],["/archives/2020/page/2/index.html","ad4d18b6acd1535a74e1033003ea7347"],["/archives/2020/page/3/index.html","1eb9b97b89507497427928f1270bfb1e"],["/archives/2020/page/4/index.html","4382ba6e7fe3730f47cb45b4c1313485"],["/archives/2020/page/5/index.html","442a348b46ac0990022892f33fc45d90"],["/archives/2020/page/6/index.html","5c36c9b319099a4f27b61ae89696bc80"],["/archives/2020/page/7/index.html","d2ff8f2f5f194a8545b844908fbcfd5b"],["/archives/2020/page/8/index.html","72dec05e020a89473e2ef14e0d330263"],["/archives/2021/01/index.html","b1e585c24b13aa3b5a0a068dc00d575d"],["/archives/2021/index.html","181f893d01a61414302a6b6d6325de7c"],["/archives/index.html","48e05a98f48c8511348c06df04e6d56d"],["/archives/page/2/index.html","9ab6081883a9a4561d60adae3a6a7948"],["/archives/page/3/index.html","b55009d58ed6ee290d0e2d392cc921a4"],["/archives/page/4/index.html","ceeddea9be11db367055f52661ad5a65"],["/archives/page/5/index.html","cd7c54bce234a321c59bb148e7771a24"],["/archives/page/6/index.html","8f3a4140d4cd85809cca480f35d9544e"],["/archives/page/7/index.html","e4bb8e857fd2c02baedae2c48b228bad"],["/archives/page/8/index.html","afff3dec510c3012982748a27f8195d4"],["/archives/page/9/index.html","535fe02889bf8c0f57804ef1bd961257"],["/books/index.html","d1e594e5b622d268f49cd52ce05e521f"],["/categories/C/index.html","6fabdb598830b0d997b25a95a4f71bf2"],["/categories/C/扫雷破解/index.html","84ade83033e911bb3a9126969b3ac612"],["/categories/C/读-写文件/index.html","443a328748a55388fb962fdb325c3387"],["/categories/C/递归/index.html","4fd4a3ce410fb264ad52c140139824e0"],["/categories/Java/BeanUtils/index.html","8430b1afd713b59a55d263ec46141f42"],["/categories/Java/IO/index.html","b722a92f1932a8e30ede1f47f7c33bcc"],["/categories/Java/Maven/index.html","162a98a0d825389d85875b9b0b2402cf"],["/categories/Java/index.html","d5ace53bd734080df1bea8a6caca77bb"],["/categories/Java/动态代理/index.html","e18b54ee307c7744fd603fcf19e4e157"],["/categories/Java/反射/index.html","548b037b61e39aa0dd8c5477ae33e27c"],["/categories/Java/耦合与解耦/index.html","563e1a86e11d94dfc4c7ffbed2d0f88b"],["/categories/Java/集合/index.html","78f1a45c08da6a035af0c4a2bfd815e7"],["/categories/Mysql/JDBC/index.html","a6bef3457ec9d687fb9ffc40db916191"],["/categories/Mysql/index.html","3a11c350eccf1235c213b87703db59b9"],["/categories/Mysql/数据库连接池/index.html","5d0dd4494367493f17df2ec95c62c809"],["/categories/Python/index.html","37b620af10dc36a528c62c876ee332b8"],["/categories/Python/内置函数/index.html","163a4f8ebaf8da6ac41223ac69ff6cc0"],["/categories/Python/函数/index.html","3bfd945e515fb02be2ed7701407e45ac"],["/categories/Spring/AOP/XML/index.html","ed56a4ef44c8bec4318fc4dd3c6c9dd4"],["/categories/Spring/AOP/index.html","3e71bb5bad6b8d0973e0284ee0111c6d"],["/categories/Spring/AOP/注解/index.html","883b764a9da60504b6bd52c50f1ba4d7"],["/categories/Spring/CRUD/index.html","c4cb18a0a307a9170817171e93e7fb99"],["/categories/Spring/IOC/index.html","891bc7df4d9f22d6fd41a8875fc3a9bf"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","65e85d8666edbd0f3bb3620af3ade085"],["/categories/Spring/IOC/耦合与解耦/index.html","611a6d93ee8b01fcfd8269cb102a1edd"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","9b5f28cbbd4faefd0989bddcd6216714"],["/categories/Spring/JDBC/Mysql/index.html","08aff1c47ba6fffcee741c4ededbf72d"],["/categories/Spring/JDBC/index.html","929f5b7fdc9019755f8860d7131d0db3"],["/categories/Spring/SSM/index.html","c1f03aa66dca88b305f7bdf9c2c1bf2e"],["/categories/Spring/index.html","c50acd3fa6a445560ebfc81ecc217fab"],["/categories/Spring/page/2/index.html","97050dcbaff4a31f13e486891bc63c76"],["/categories/Spring/事务控制/AOP/index.html","088cafe0d36d29be9c24172cd24b691f"],["/categories/Spring/事务控制/index.html","6904422cb2f3e05d01ab4d607ed45bd1"],["/categories/Spring/依赖注入/index.html","5845c70b812f8c5b1ebf7cfdf50afd6a"],["/categories/Spring/概述/index.html","c92c7e1e7d9d1ce88833d05b1ca86636"],["/categories/SpringBoot/Filter/index.html","23cde3a0554e75ecc5cf1ebc0bff8c6d"],["/categories/SpringBoot/Logback/index.html","f7fd59abc5a8f32f69a9185ef0568b42"],["/categories/SpringBoot/Mybatis/index.html","fd121d660a88a2617dcc022c9d86791a"],["/categories/SpringBoot/RESTFul/index.html","3b2565cfd21eb5deb7b3355d533c0ff1"],["/categories/SpringBoot/Redis/index.html","b50fe5a6dbc5b8da3924b306200552d1"],["/categories/SpringBoot/Servlet/index.html","c63a3f59e2966e2c5cc34137ab8ba8d8"],["/categories/SpringBoot/Thymeleaf/index.html","8ad512a51929c2fb6f612b7fdbf26635"],["/categories/SpringBoot/Transacation/index.html","4955653095e27c00ef3f7d4e42bb03cc"],["/categories/SpringBoot/index.html","1b033fde405805ce582524d2bb0ab668"],["/categories/SpringBoot/page/2/index.html","a68c0012082676e46fad30f2304045f2"],["/categories/SpringBoot/字符编码/index.html","dda607849a2a612a7286d813baa0afe5"],["/categories/SpringBoot/拦截器/index.html","e98962192cdc700c9561f1a063d519cb"],["/categories/SpringBoot/注解/index.html","5976c3eba5f539e54e88354751be1328"],["/categories/SpringMVC/index.html","7d1d3e2ea238ef19ab0aa052309d44e5"],["/categories/SpringMVC/入门/index.html","85243d71e808a5af368c37630be9fbbb"],["/categories/SpringMVC/参数绑定/index.html","bc12f2b8629276e19feefead7d13c706"],["/categories/SpringMVC/异常处理/index.html","709f551c145b454da5cd7ec41219de46"],["/categories/SpringMVC/拦截器/index.html","f0f82b10ecec4c0be3327923c66bf3f7"],["/categories/SpringMVC/数据-视图/index.html","095f031c7249c0a92c213e0eecd5c279"],["/categories/SpringMVC/文件上传/index.html","22e4502a769fb82fc2bca438d95260bb"],["/categories/SpringMVC/概念/index.html","6a7bde4ea477182e7b084c400d5cc7b1"],["/categories/SpringMVC/注解/index.html","df735443dee67e54349dcce69bb7176f"],["/categories/Thymeleaf/index.html","8ebafb24da558d863e63568451b6bb3d"],["/categories/Thymeleaf/字面量/index.html","910c98dc41f526860fbda984b527c19b"],["/categories/Thymeleaf/运算符及表达式/index.html","c172da8004d71653a4e84175bd4ab2a9"],["/categories/Vue/index.html","90fb6bcc6e0b1a61ae4a213591fedf12"],["/categories/Vue/基础语法/index.html","ba35cc78d63701cbbcf9ccf8aa0ebd99"],["/categories/Vue/生命周期/index.html","ea970f752c52df96dab6faaec9f80f1c"],["/categories/Vue/组件化开发/index.html","9019074503e9ba7cd3c1a2b6d764891b"],["/categories/Zookeeper/Shell/index.html","0f0228d8d9fbad95f277a45b397474c5"],["/categories/Zookeeper/acl/index.html","1898d7a5be3a5b254326fd8ab0c543ae"],["/categories/Zookeeper/curator/index.html","365d909b30e79cee6bcca84ce2b1d07e"],["/categories/Zookeeper/index.html","171bad346dbea433fe3bece88a3d2d25"],["/categories/Zookeeper/javaAPI/index.html","85cfdf18bc121073bb237bcdec19e7fe"],["/categories/Zookeeper/page/2/index.html","2501c56922e85b4457538e0d5db2277a"],["/categories/Zookeeper/taokeeper/index.html","2f7c2799656307a86d59669d25f56e7a"],["/categories/Zookeeper/zab协议/index.html","93dd1990bf18152803c1f83ce554a0a0"],["/categories/Zookeeper/zab协议/leader选举/index.html","979d1946923a64884669a7cad881dea8"],["/categories/Zookeeper/事件监听机制/index.html","c997a8573497fadce4ca64a561badb06"],["/categories/Zookeeper/四字监控命令/index.html","b91ced00e572ecff069723b12db5e82d"],["/categories/Zookeeper/安装/index.html","dc77854088ef646f8e8a764f5baa2351"],["/categories/Zookeeper/集群/index.html","38d9c215ff38f1c89a15ee3e7d5dc9ee"],["/categories/index.html","57c0321f945b9a9772da40f2f5405225"],["/categories/mybatis/CRUD/index.html","5f8153181edc7464edbeeafc9741a11e"],["/categories/mybatis/Mysql/index.html","25c3b57e64a1bad10d96fbe8002adb15"],["/categories/mybatis/Mysql/多表联合/index.html","ba0ea8614653665fef217c74f20daa50"],["/categories/mybatis/Mysql/多表联合/xml/index.html","a3b817d24c3a584a203bc9262c3cc63f"],["/categories/mybatis/Mysql/多表联合/注解/index.html","79061309d68241c43a4befaf1b810816"],["/categories/mybatis/Mysql/延迟加载/index.html","0380419598035490f8bcdd0407624587"],["/categories/mybatis/Mysql/缓存/index.html","a9aa481edfae643b5cd830826ff33f22"],["/categories/mybatis/index.html","b655206be4c538412828bd6e66ea4e5e"],["/categories/mybatis/page/2/index.html","f5d6e3257577aa98bd6ad7f54c6ae7aa"],["/categories/mybatis/动态SQL/index.html","3ce224733da87d125da5434bb40edd71"],["/categories/mybatis/参数/index.html","765b533786345b2c825211bb1e941ca3"],["/categories/mybatis/框架/index.html","541d8149ab557872965ca68b5bbc57f0"],["/categories/mybatis/配置文件/index.html","0298a42c724ce6ca3154365561725af2"],["/categories/教程/CentOS/index.html","dad4f71798ec0c3580d05c469083b175"],["/categories/教程/CentOS/虚拟机/index.html","c131834a7c5114e762e8a9e6cf8dc5e4"],["/categories/教程/Jdk/Linux/index.html","25f7fcf50e152434082216dd474ebc45"],["/categories/教程/Jdk/Windows/index.html","7e5c1a318b5a45964dabc7525bdf52b5"],["/categories/教程/Jdk/index.html","e142902ae5673f4c68f50d5415fcb5cd"],["/categories/教程/MacOS/iTerm/index.html","9ad70edcd8e00303e1b29d6e38a54b14"],["/categories/教程/MacOS/index.html","954edcc5b51252206e8c947916038b6d"],["/categories/教程/Mysql/Linux/index.html","1f3452ebdb25876159dc9d2b24bb1933"],["/categories/教程/Mysql/Windows/index.html","51fdd7671d11c71361811cfe4c5ee870"],["/categories/教程/Mysql/index.html","c6caab4a3dc5a7a1d4f3f73bf95f62de"],["/categories/教程/Redis/index.html","2eaee0f61b63376753931e3466e1c82b"],["/categories/教程/Tomcat/index.html","dfa801935eb23aac4118ead7a787fc90"],["/categories/教程/gcc-g/Windows/index.html","e268cbe86971a20c1bd144332ad3d9ba"],["/categories/教程/gcc-g/index.html","e029b690c4913c1285977cd48f154c98"],["/categories/教程/index.html","b59a72bab56b7eefc4b565b31e0554f7"],["/categories/教程/vscode/index.html","1badccee2c14092ca85f4cd1b4c731cb"],["/contact/index.html","b75a346212f924d54a18e520465740ee"],["/css/index.css","1af10641a3db73cbf800f13b8ffc29d9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","09cdfad8ef3c26201f82eaa9feff1d94"],["/home/index.html","c070a608a7ff575ba5dd2d8359181559"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","73b730f6bd5d37c4f1a527bb0bbf8ff6"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","d0f47c7aa58662c384f0f8193a8bd950"],["/movies/index.html","11ed299ca9c19ee492ee2ab3929bc22f"],["/music/index.html","131ed02db98ca774729fcaa05c0a0ba1"],["/page/2/index.html","3f100d80a1490b8fe470c6aac90df069"],["/page/3/index.html","83b330ead1ef00404b4a2944ce362ca6"],["/page/4/index.html","ac27bfa15da9c4f87c5a49fcb7c08b63"],["/page/5/index.html","442a2b00b731e664989ad7433fc842da"],["/page/6/index.html","0152363e40d7329933adbdd72bed2d24"],["/page/7/index.html","939f70a946e05c829fe0949a6d544184"],["/page/8/index.html","cc8b939971477a7223593d69176200c0"],["/page/9/index.html","1e1074a8bbad039d18861ec9c6d7edc0"],["/posts/Aop_aoptx.html","f7ebb2d9bab2ed65e32c42aa85edbae6"],["/posts/Jdbc_study.html","bdf276acee80e6a2ca3a5429bac21202"],["/posts/Maven_study.html","60f60b9858be2ef784f3c9d4cb3ff3e7"],["/posts/SpringBoot_Interceptor.html","ddefbbc178157acaeb1142c0d2ea886f"],["/posts/SpringBoot_ano.html","44ade36b5e1eec874ad9f33b9f8370b9"],["/posts/SpringBoot_myabtis.html","318bead5b34054c66f07ec0aeb9e82f8"],["/posts/SpringBoot_start.html","95d9cc4b44640f1041874e29d8f3fc69"],["/posts/SpringBoot_tran.html","ad5ef92d9c391c6a0e4b440e52e7d2e8"],["/posts/SpringIoc_XML.html","3f9bf7fae966e4f1099b6294e83b286b"],["/posts/SpringIoc_anno.html","553b3871a4b20a981f9467d64e352e6a"],["/posts/SpringIoc_yilai.html","08276e3e19d300564883659753d6cca8"],["/posts/SpringMVC_con.html","6cab8ef3eca4969606c09175f84e9c49"],["/posts/SpringMVC_data_view.html","cde41b8f3ec689bee3d5b169e1bdf518"],["/posts/SpringMVC_interceptor.html","793077e06cbeb74c370f8c1fd4b1dd06"],["/posts/SpringMVC_start.html","9f8939d5574243a460809353c227ebf4"],["/posts/SpringMvc_anno.html","445d52d84a7ca65c377b6b2c077ebd69"],["/posts/SpringMvc_exception.html","9fbfaab00791e83757aa2d4775b3ef86"],["/posts/SpringMvc_para.html","4882cf55167842bd2dca878cd03ad069"],["/posts/Spring_Aop_anno.html","686596ce2e386781c5eda915cfa41dfa"],["/posts/Spring_Aop_xml.html","f58e509587d1b472cdb0b61aa3e7babe"],["/posts/Spring_CRUD_XML.html","64de4769b640d5c5137eb0b263633973"],["/posts/Spring_CRUD_anno.html","507405bd52d90e5fc42232f89d822bce"],["/posts/Spring_aoptx.html","c177acecb45cb4b34ecfba508a944f48"],["/posts/aop.html","0ae629197ad3c6e85864b3b4eb0dd7b8"],["/posts/beanutils_to.html","4a621671719a627ec421bf3d7de5744d"],["/posts/c_file.html","ac365e0b07dd899c3dd88a0684f05e78"],["/posts/coupling.html","26749bf22d1901b43141f4092c68d78f"],["/posts/database_link.html","36b760f90241397ce6d9b9d77778fb57"],["/posts/java_io.html","507c09dfcc6185d98f6b5c16d6712b0b"],["/posts/java_list.html","85548e0c48b05a144a153d0d3ef22157"],["/posts/java_proxy.html","8a01567628b76beab7ad076bcc0d1688"],["/posts/java_re.html","2dedbb06ab1120a0cdd70f90f02cfa91"],["/posts/linux_jdk.html","a5e876f153411b27b44665d4a4f8a91e"],["/posts/linux_tomcat.html","662eb6b39a5407c516810ba7f0168bb9"],["/posts/macOS_shell.html","3548a0c33670032bca6f30e6b3a1a573"],["/posts/mine_Crack.html","c8453a66974ee3e3fa797e23ff29b352"],["/posts/mybatis.html","1f1e17748a2318ce2edd2dbab900240c"],["/posts/mybatis_cache.html","065a83b1bc383edfc91da8f9768be4ca"],["/posts/mybatis_crud.html","8a284ad2306b9fb4c091977e40cefb5c"],["/posts/mybatis_deploy.html","4ff606c1a9d3c6ca33d5169b61b136c8"],["/posts/mybatis_dyn.html","c37053ca8c1564d2c5302f299105acc7"],["/posts/mybatis_en.html","95a5a6d0ab3d724aa43cdfaa65fc301f"],["/posts/mybatis_lazy.html","d38b9d8c8d66dbd09638b391099c9b01"],["/posts/mybatis_para.html","eae0774a03616aa106bbd1e22028c9be"],["/posts/mybatis_res.html","c4968df6e9b204e55d48629bb27ded62"],["/posts/mybatismany_anno.html","b4753a8558debbb9f90f91f76ab7936a"],["/posts/mybatismany_xml.html","16025f238487fa758e0688f3f2c1d42f"],["/posts/one_web.html","d04e3af2c77e2eeeb38fa0fbbcec3cd1"],["/posts/python_Built.html","a53550dca1fbb5ac97d00c6279e7736c"],["/posts/python_functions.html","bf362af1eff8bb19111e719523456209"],["/posts/recursion.html","420794dcf3819c53138b1562f559082a"],["/posts/redis_dw.html","768cff9e1696d2cb77072080077620c2"],["/posts/springMvc_.html","72509569031ccd43d630ebffb422396f"],["/posts/spring_jdbc.html","f1d9ea4cf335d2617eaf5b6b07516a16"],["/posts/spring_sum.html","98c5d8f1b492f105709dab356b33d841"],["/posts/springboot_character.html","ea1d6c28402ac4585e537cf80827104b"],["/posts/springboot_filter.html","aace65d222c3fdc6fadad020feaa9f2b"],["/posts/springboot_logback.html","456b048b9ff0f8a9cffcad9b188fb335"],["/posts/springboot_restful.html","0dcc7714e7968b116bf5ca82878b0bc5"],["/posts/springboot_servlet.html","e9406dabbf86318762aa40c62f5cf185"],["/posts/springboot_thymeleaf.html","cce3c17448459e528f2a2e23b9b7455b"],["/posts/ssm.html","f9c05c2755b4ebe9fea72550df5d46e1"],["/posts/thymeleaf_attribute.html","1ec615ed88e03b42491a23f0401d3846"],["/posts/thymeleaf_literal.html","730b2c02facae968c04c38ab6073af76"],["/posts/tomcat_ins.html","03977b02a1bc44b173e5b313dbdaf315"],["/posts/vm_centos.html","163f3e6c500cf71f4c3a0c9eadea7244"],["/posts/vscode_c.html","4d40d7bd53273db072360d55d6796db3"],["/posts/vue_com_dev.html","b8efbcf0218189ab63ece84846f42c72"],["/posts/vue_grammar.html","1e49b79ff20c6a80b37f59fe9ee4cff5"],["/posts/vue_sm.html","07d4e44ee4f9daf694f6e25dad3280ff"],["/posts/vue_start.html","4880912a855b0c55b8a045f7d401726d"],["/posts/windows_gcc.html","dca4615817e6b46cb78bf9ad16bfc1d4"],["/posts/windows_jdk.html","c5c82ddd352db227c53ef12ae617079d"],["/posts/windows_mysql8.html","dbf20b0175d79eea1b8bfb3f4caaae28"],["/posts/zookeeper_acl.html","535d6de331008891671233b48553f62c"],["/posts/zookeeper_colony.html","5ebc13ae4a912190349a0796238c487d"],["/posts/zookeeper_command.html","7a225f17827797fa7bbddc54f0541280"],["/posts/zookeeper_curator.html","47375ae7ee1bea695cebb243cbf96aaf"],["/posts/zookeeper_dpkg.html","c0c42b1d347c2cb30648e69c8e5ca512"],["/posts/zookeeper_introduce.html","08db89a0521ad1344a2b6dddb6f10455"],["/posts/zookeeper_javaapi.html","78d8fbeee08ee029251002c033386f60"],["/posts/zookeeper_shell.html","15708925b206ffd52cbd03f278fc51c5"],["/posts/zookeeper_taokeeper.html","e379bd67f41df8fb07e67acd87a3f5e1"],["/posts/zookeeper_watcher.html","00de211f1d9bebac1cf7101379bebda1"],["/posts/zookeeper_zapandlea.html","1e95384bb9289ceec4c77da9a9176599"],["/sw-register.js","5dd7a80ba9a00a355b203ef8f82e358d"],["/tags/AOP/index.html","6fc3dd2c0163e3f0fddfc2a50e4e589d"],["/tags/BeanUtils/index.html","1b972eae2a81fd5af63f8d2ed6c76877"],["/tags/C/index.html","256de3e68e7f2848ba3345e1d44b0756"],["/tags/CRUD/index.html","83b8289b8bf6e49aef5ff9009fae1b2d"],["/tags/CentOS/index.html","b9f4ede46f92cfe461d888d8f27aeb5d"],["/tags/Filter/index.html","24c1712c982379bbf44622a7c945940d"],["/tags/IO/index.html","c9783d3e704f35f00bc267ec9f45844e"],["/tags/IOC/index.html","4e049d381c7bfde61ad670057beb7e04"],["/tags/JDBC/index.html","b445cde89603997d289b66d487ce4c81"],["/tags/Java/index.html","fa849559f8cf652c489f78e61c549a7c"],["/tags/Jdk/index.html","b345460390600abcafcb745143a133e5"],["/tags/Linux/index.html","2691fda22b6542c33a87c49e94fdfea6"],["/tags/Logback/index.html","307294bfdfcd018a9db6a7ea51b233bf"],["/tags/MacOS/index.html","1a57f264ad618eac500add6a4e512d06"],["/tags/Maven/index.html","c991b34293c231dd194008e82d9a9e37"],["/tags/Mysql/index.html","e3b6b6a21e4da22d456e771d3d5d5791"],["/tags/Python/index.html","f30b992837181413b0df5b132c900181"],["/tags/RESTFul/index.html","71a9dfe113673e16bb10fa187834f30e"],["/tags/Redis/index.html","571e7c2644b1a12225b74cd4ce216d33"],["/tags/SSM/index.html","244afbdc22a34f450a3a83c923387f50"],["/tags/Servlet/index.html","76d5cc064abac6b43d144f1c12fb414a"],["/tags/Shell/index.html","2a9a43583acfa0089e1bc966610c3620"],["/tags/Spring/index.html","459bf14df9e8b0673390ca1c1ea893a3"],["/tags/Spring/page/2/index.html","19f4799e7bffd50d4b5891145d69003c"],["/tags/SpringBoot/index.html","77b88de8feb34b0774e4d7b990606736"],["/tags/SpringBoot/page/2/index.html","e381a796f5fe9b87c700f97e6ef18974"],["/tags/SpringMVC/index.html","d7f889006f9355a98dfeba29158c8112"],["/tags/Thymeleaf/index.html","d671cb6ba3d05e200f6d5063818b52e7"],["/tags/Tomcat/index.html","4f1a98c3945d6f905e6a2d8e14859be9"],["/tags/Transacation/index.html","e9f9fa09ebf1370a53cbb5f1153307e3"],["/tags/Vue/index.html","8e60c6bb8ca4dac8ca9db9e8c7856c55"],["/tags/Windows/index.html","178c776531a53480b15ab41e9e9f6efc"],["/tags/Windwos/index.html","c682efbf36f8b869c1791fad711a1787"],["/tags/XML/index.html","af1256470f696e60f28954805c5d0f28"],["/tags/Zookeeper/index.html","f4d3a9e9a3e15f597812d6e7dcadbdd7"],["/tags/Zookeeper/page/2/index.html","080c480b29110787cd32752a016948a1"],["/tags/acl/index.html","b746bb8ead5e556acfa1d50727e45fa6"],["/tags/curator/index.html","fed7a724be532801d7b17f599890bb5d"],["/tags/gcc-g/index.html","a669b129809d7707d4609086a357bd2b"],["/tags/iTerm/index.html","ab01fad399425223a65c484c4fd7958a"],["/tags/index.html","7dc2957750b50f6a922c995e7fa60034"],["/tags/javaAPI/index.html","e7858291f6fc90e9750fa346daf8ce57"],["/tags/leader选举/index.html","261cdf5cf35b18d5c8104221799bbbe9"],["/tags/mybatis/index.html","241f20aa76ac6378833308848f3625bf"],["/tags/mybatis/page/2/index.html","d1486e6412b09a31512d883f2ac3cb40"],["/tags/taokeeper/index.html","1f848dd1863fed49b4719a41ac906277"],["/tags/vscode/index.html","e92e2941cb4ea9507143762ae86a6963"],["/tags/zab协议/index.html","43ea893ac8c7f52cdb5fd9bdafe8c0df"],["/tags/事件监听机制/index.html","0e1460373ac8913f84ca7c8826a570fa"],["/tags/事务控制/index.html","eebe1743b1f5f2ed082e4ca1bb201ea6"],["/tags/依赖注入/index.html","fd7a3a018ebb26b123deb5968fb02017"],["/tags/入门/index.html","83075d2d4be05b6973059494377c3eac"],["/tags/内置函数/index.html","711413cd74f40b7a13f1461128ab72f4"],["/tags/函数/index.html","0abe8b4f4e651b14e148cb7b50ff5077"],["/tags/动态SQL/index.html","f98d3d2176e2307826c1560d4e2ee0dd"],["/tags/动态代理/index.html","4e237c52bd21dd68d0868fb3c1fb6d47"],["/tags/参数/index.html","353e5daaeddb5436dfbe7dc22050020d"],["/tags/参数绑定/index.html","15a4a939b85e77eb1d423c6aa9cbbf28"],["/tags/反射/index.html","56aeaa25c25ca04579c42ab58c648bae"],["/tags/四字监控命令/index.html","75eac10270e37398e8297a0dc7fde08e"],["/tags/基础语法/index.html","ddb08dd8608cdb55890c23b9add85fd8"],["/tags/多表联合/index.html","b2b92fe219b90e6b06ec2102bf6a0da9"],["/tags/字符编码/index.html","ca265829685d414f23830d7d9482e20d"],["/tags/字面量/index.html","eafe19914d95eb7014b321da6186db7b"],["/tags/安装/index.html","84a6abc85fb5a55d393a2909d3edfd65"],["/tags/延迟加载/index.html","874df0b8d2738d694e16240b67db29ee"],["/tags/异常处理/index.html","94af5f591a720b320f07e5bda89d7968"],["/tags/扫雷破解/index.html","2db7c0b0635c63a59844c25c4816f0af"],["/tags/拦截器/index.html","efac8f64f2117d8a8916a2cdebb0a2fe"],["/tags/教程/index.html","9aa961aec27c9f1f39644538bb217169"],["/tags/数据-视图/index.html","e34ac05de5dcb18c155513e0125fc322"],["/tags/数据库连接池/index.html","56352d91deb847a2eed8e7e0047f9295"],["/tags/文件上传/index.html","b93dc8ad93e2b7a2b79a7dcba60471f6"],["/tags/框架/index.html","6b906e4bd5a6fcb20cf313d23d5f371f"],["/tags/概念/index.html","e957f52721f9a6ebd09d6b7a48b15442"],["/tags/概述/index.html","657d28668492992561226ac295ae4f1c"],["/tags/注解/index.html","0c1a94fad63f950f1730ed42165986dd"],["/tags/生命周期/index.html","dd70ae9e3eabe68b97204988fbc8a517"],["/tags/组件化开发/index.html","c69eda00f2e1f7dae7dbeb7296dc9404"],["/tags/缓存/index.html","0c93726c8030a4b6da3e5a529d0cfac3"],["/tags/耦合与解耦/index.html","c06ff4913ac500a9c0a937c35cfe6489"],["/tags/虚拟机/index.html","f913319cca5303064e78d53dd4524afb"],["/tags/读-写文件/index.html","ddd354780ee0792707a6620779f9353f"],["/tags/运算符及表达式/index.html","35dca42774a3498380f2723da6b4b16f"],["/tags/递归/index.html","594d9141a487ef28ebac878850473cee"],["/tags/配置文件/index.html","a9ed09a31f90bef67050eaa9a78c26b5"],["/tags/集合/index.html","3fd903c154ce7deb9c5bafabefb5f400"],["/tags/集群/index.html","7038d65f286d0e114d7af0035150dada"]];
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
