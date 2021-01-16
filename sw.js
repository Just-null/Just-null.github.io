/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","27a2427b4e0f229fa874e647749b886f"],["/about/index.html","4544b97e1ddfcbf1f8bb20e715dd5a10"],["/archives/2020/04/index.html","135d90cee11df3f58e988729810e75d6"],["/archives/2020/05/index.html","89d0ec152677c4a113bdf5670bd03bab"],["/archives/2020/06/index.html","0041b053628755182e7779947626df6b"],["/archives/2020/07/index.html","7ea1fc6672b2c8e5ae6ff93fbbfd6e9b"],["/archives/2020/08/index.html","a1395e033bf62fe5e9dbc916b3873ec0"],["/archives/2020/08/page/2/index.html","03b057dd272256886797ec4665c28864"],["/archives/2020/08/page/3/index.html","41f83f50027732bc1013ba3e5197369a"],["/archives/2020/09/index.html","c87e3e0e81d9a5fb4cdde164605063ae"],["/archives/2020/12/index.html","fad05e645a24fdee2594a88531d86ae8"],["/archives/2020/12/page/2/index.html","44fef3ce357fb00b1fc30aef0a1d3fea"],["/archives/2020/12/page/3/index.html","baaeed99126b0243140b88789083f663"],["/archives/2020/index.html","d0030828f4cb013dd1832bcb554d87f1"],["/archives/2020/page/2/index.html","edd7eb30e58426f294ac50a490241f7b"],["/archives/2020/page/3/index.html","912a6e6c81172092093ceb917cbbbb3a"],["/archives/2020/page/4/index.html","50eb68ec1f234ff1fb907fe9095a1cfe"],["/archives/2020/page/5/index.html","c063ac57c897c2cf7567d5236a7dc9f6"],["/archives/2020/page/6/index.html","32b55bea93bccc5acdf60d5984cb0d22"],["/archives/2020/page/7/index.html","9d8d05bc1064bb3a51a5e66477418dbe"],["/archives/2020/page/8/index.html","546f9a46e9ca9dd3df9cae2a30863e30"],["/archives/2021/01/index.html","1595843f6155a13c2ae0df73b947c804"],["/archives/2021/index.html","a788aae3e252213477e18fdb0eb8938a"],["/archives/index.html","1bdbc82c2ce46f431e174a893944c870"],["/archives/page/2/index.html","182138dd36356a2dc81d74d228948cc2"],["/archives/page/3/index.html","5cb2a306b6640e424a64a9cc02255405"],["/archives/page/4/index.html","9224263da9aaa039006a9fed4c4347e4"],["/archives/page/5/index.html","eeb4387ce9f74d1b9f1210ce910293c9"],["/archives/page/6/index.html","08435fae8984c3ff1a2aed9a3fc30959"],["/archives/page/7/index.html","63b432cdcad53dbbea6ce6af93b65e65"],["/archives/page/8/index.html","dc7b91460da812f495752559322179a2"],["/archives/page/9/index.html","c611f3a0d126136ffc871afc03f9a21c"],["/books/index.html","38ef92880f9a54407a615d43e7b9b872"],["/categories/C/index.html","c129c84d2be6050ff04897b758f97019"],["/categories/C/扫雷破解/index.html","e49b62557151de0b82d31f970de3d070"],["/categories/C/读-写文件/index.html","cba6a8f5a62a87ec16a6d1d4fc490bf4"],["/categories/C/递归/index.html","05dd4d0bec0c0411d44eab345a179d60"],["/categories/Java/BeanUtils/index.html","8a10bcbbd20e875e1f51fe96baa1c4e2"],["/categories/Java/IO/index.html","00b163974b788d7daa1669c0c1ad8acc"],["/categories/Java/Maven/index.html","079c4de5a8692eaa8897aa902ac95817"],["/categories/Java/index.html","f444e2baeaedca5757cf3642f252b1fa"],["/categories/Java/动态代理/index.html","62b81726da0260e7b28d0cd9cbf46e4a"],["/categories/Java/反射/index.html","6f7a288ffbfc27533b239d83fc82d111"],["/categories/Java/耦合与解耦/index.html","4689eb38c34b86a82f4fae10fefbeff9"],["/categories/Java/集合/index.html","fa7496470e4a1aa5de816a4ed13d869b"],["/categories/Mysql/JDBC/index.html","77902a08e7d0ab7cd9087cb0170d9586"],["/categories/Mysql/index.html","62b5b1b2426c390dbd3d44eef891dbe6"],["/categories/Mysql/数据库连接池/index.html","b83303768c02f62a95b42aaa02fd83a5"],["/categories/Python/index.html","78199c2d4969fca9b57e6646d214d390"],["/categories/Python/内置函数/index.html","14b61ee92adf666dd3e2adcfc6641c96"],["/categories/Python/函数/index.html","a5ffc605285cae4b17cc8ab4dbef00f3"],["/categories/Spring/AOP/XML/index.html","1010d7a5bf9a96d28801c75b7cc1ba33"],["/categories/Spring/AOP/index.html","119f278df3a872f519aabbc9be0f77af"],["/categories/Spring/AOP/注解/index.html","5980103c0e14e80dd5cfcab8a5e138e3"],["/categories/Spring/CRUD/index.html","56e35a9cad57c55f95c5b5c588480974"],["/categories/Spring/IOC/index.html","37155d2a5b5b1e649671ecbd58efdd3a"],["/categories/Spring/IOC/耦合与解耦/XML/index.html","c852a68a5e35ba2a5be943fe0d26bdca"],["/categories/Spring/IOC/耦合与解耦/index.html","c7be58b520ecb692be7b3e641378b8cb"],["/categories/Spring/IOC/耦合与解耦/注解/index.html","2a97670aa009ffa94557be653f650f3e"],["/categories/Spring/JDBC/Mysql/index.html","c3c78bd2300ebc7edf0c4b717b7e66c2"],["/categories/Spring/JDBC/index.html","ef937161ccabd5238d95274fa867a899"],["/categories/Spring/SSM/index.html","ca976cc0861db33c5c0263f99a88684b"],["/categories/Spring/index.html","c29104a0520cd9664d2a45fcb9111898"],["/categories/Spring/page/2/index.html","9538a2dbf66c9371e1895e3665a501ae"],["/categories/Spring/事务控制/AOP/index.html","d00452aadd9ed7d4994c898acc47f0cf"],["/categories/Spring/事务控制/index.html","1164cc91c970bccbe6f7d229deac0542"],["/categories/Spring/依赖注入/index.html","1b431a16d1d10683240980af4f5fc3c2"],["/categories/Spring/概述/index.html","69988e9f64079a83d13f2545d00bf157"],["/categories/SpringBoot/Filter/index.html","4a8f5c372f150f9893d103849cd4e357"],["/categories/SpringBoot/Logback/index.html","2e48c264e88f59ace1f1bef305c1e894"],["/categories/SpringBoot/Mybatis/index.html","5c2d0866ae3b65685a574c1c6d4cda5e"],["/categories/SpringBoot/RESTFul/index.html","9526e438223064d255aed46f28800574"],["/categories/SpringBoot/Redis/index.html","28620318511017dd24dfbed9eab0818a"],["/categories/SpringBoot/Servlet/index.html","93f3933905f4f5775af85b1aed398b63"],["/categories/SpringBoot/Thymeleaf/index.html","26b379eb4aeb11a91c39642c046e351f"],["/categories/SpringBoot/Transacation/index.html","8adf4031ef85302d4aacb2ea9f44f75d"],["/categories/SpringBoot/index.html","34c65c7ec152650f1a216d1842353868"],["/categories/SpringBoot/page/2/index.html","7e28f5a2efe7b80ca0471155d3e42997"],["/categories/SpringBoot/字符编码/index.html","4c23d5d6481dd58e858de1b13b3dfd63"],["/categories/SpringBoot/拦截器/index.html","6ee0818e7f328180c01614d4b779b86f"],["/categories/SpringBoot/注解/index.html","3f50b0cf1e53ab0ff80ade947beea93f"],["/categories/SpringMVC/index.html","a8bb9e6319d144b9c751e1a743a02b39"],["/categories/SpringMVC/入门/index.html","b0906fc524433d437ac2a45782ffaa69"],["/categories/SpringMVC/参数绑定/index.html","1eb36166d2bd2226de031a973b68042b"],["/categories/SpringMVC/异常处理/index.html","fda03010bd383c31f8a4e85f421f6fe1"],["/categories/SpringMVC/拦截器/index.html","96de09a6af901b5f644e9155366d26e3"],["/categories/SpringMVC/数据-视图/index.html","b93e8aac5d9add371dec7b676b65e6fc"],["/categories/SpringMVC/文件上传/index.html","64b857d9201170abb81a7649df30e275"],["/categories/SpringMVC/概念/index.html","d011c56f1c428af9ec6f90a255386fb5"],["/categories/SpringMVC/注解/index.html","d4cb8a8e73d234058c43693af9254d4c"],["/categories/Thymeleaf/index.html","b987bc4647da349f37a93dfee82d6e2d"],["/categories/Thymeleaf/字面量/index.html","8c97298af013393312df1ac78b8db4f4"],["/categories/Thymeleaf/运算符及表达式/index.html","a70f59daffcee474a687bd7bc5f2856f"],["/categories/Zookeeper/Shell/index.html","db26d0b4a0e55373ea154154d0fd644b"],["/categories/Zookeeper/acl/index.html","496cc9855c4102be8e48c6922a25431c"],["/categories/Zookeeper/curator/index.html","04e95175d124d8f6717f73ac32678261"],["/categories/Zookeeper/index.html","b6da2d2862be7a82fb8652018d06f372"],["/categories/Zookeeper/javaAPI/index.html","5df1be3e6492cc11f55ee91dbb7d1c7e"],["/categories/Zookeeper/page/2/index.html","146028b1eda226e103eafc2a516fec33"],["/categories/Zookeeper/taokeeper/index.html","c32e44c29ed9f83e77b42026aa4c881a"],["/categories/Zookeeper/zab协议/index.html","e920ebae471687bae84b7c16bc1d6f61"],["/categories/Zookeeper/zab协议/leader选举/index.html","b772bfe1808d71d09fb20e2a8333a93d"],["/categories/Zookeeper/事件监听机制/index.html","cf7c1dceb05c662e4f0128f73c594318"],["/categories/Zookeeper/四字监控命令/index.html","45b0bce615d5e385c9fa12cc0be24b48"],["/categories/Zookeeper/安装/index.html","2f2ba7ee1f642acc71ff90b66a58dd83"],["/categories/Zookeeper/集群/index.html","cfb7972e5e4c4c02fce18fdac66ad7e9"],["/categories/index.html","e453bb73e864b6f0b7580df14109e637"],["/categories/mybatis/CRUD/index.html","e55788446d221793dd669617f90c63a1"],["/categories/mybatis/Mysql/index.html","b75fee5736c6e854c7c7a26bc44a9d0d"],["/categories/mybatis/Mysql/多表联合/index.html","937e0e028f7200971843f73fbcba9b6d"],["/categories/mybatis/Mysql/多表联合/xml/index.html","bb2daa48e31a4b323eaf8f908bec4d83"],["/categories/mybatis/Mysql/多表联合/注解/index.html","4b5b9ea93f214132f01fb845ff651039"],["/categories/mybatis/Mysql/延迟加载/index.html","98c539df891308b4b0b943c1a13f7bb2"],["/categories/mybatis/Mysql/缓存/index.html","cd5b695a9e027e47af019168ade9d531"],["/categories/mybatis/index.html","121275e9ed6da069179b02d33c67601c"],["/categories/mybatis/page/2/index.html","d9730facbf33cc0cbd15883dbf3f8774"],["/categories/mybatis/动态SQL/index.html","39122a41f41dc38b7c3b3209f56e4957"],["/categories/mybatis/参数/index.html","2c608248938230b6162cf110e59624c7"],["/categories/mybatis/框架/index.html","6eb7ab6d5ff8a77eb97db97989bd8012"],["/categories/mybatis/配置文件/index.html","eca3fcb54219f893dc16c20cfa9d695f"],["/categories/教程/CentOS/index.html","a4b95e1eebfc8bc81cc63b6ee395be5b"],["/categories/教程/CentOS/虚拟机/index.html","f069a18500a7078d09622435e7901b4a"],["/categories/教程/Jdk/Linux/index.html","80c255990f485df532e40e7af2f62c20"],["/categories/教程/Jdk/Windows/index.html","d305ed0019cc647bec05851b1bfedd5d"],["/categories/教程/Jdk/index.html","a64b4a29108ab143190e3bee31b5d514"],["/categories/教程/MacOS/iTerm/index.html","9f9ae9ace27b3bcafd72ffd9e5db980c"],["/categories/教程/MacOS/index.html","fca3eea6115db1ffc0c2a085aec611d8"],["/categories/教程/Mysql/Linux/index.html","08a41024cdfa33836de974585ed062af"],["/categories/教程/Mysql/Windows/index.html","320ecfc6e6a7cdf3fc847f19c7c6f74f"],["/categories/教程/Mysql/index.html","3cc57b111dad311fe59739e4f2370df3"],["/categories/教程/Redis/index.html","a1b8d14ffa954299ce7f392131e8ded6"],["/categories/教程/Tomcat/index.html","384669443a63d32b4c5757ff89318e66"],["/categories/教程/gcc-g/Windows/index.html","0717721baecf505dbf88bd56eb6b92d7"],["/categories/教程/gcc-g/index.html","63a94f59869123a104fbbcdf2a83ac7f"],["/categories/教程/index.html","7f5bc6413a44c97be261d21125d4cecc"],["/categories/教程/vscode/index.html","fd6263874c22a7cb9fccb0f033358b7c"],["/contact/index.html","10ae921605f2b12926641b313f3dc682"],["/css/font_icon.css","39c73f2fdfd575d03a382922f26301f5"],["/css/index.css","ab32d5f55d535e6c7248d19fad9262e3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","3bd3961e4310fce41c0bf378166de77f"],["/home/index.html","fc1d4bee242f1caa682a024d8c81d546"],["/images/pwa/16.png","71561042f26fc0b30cb43a9471c75122"],["/images/pwa/32.png","510d6d5e1661b3500c45d0ea575c78bb"],["/images/pwa/apple-touch-icon.png","195bce40cc2b4aea7538757a1453d4e2"],["/images/pwa/safari-pinned-tab.svg","369e39403634c77f96cb6f1987c0414c"],["/images/pwaicons/144.png","8837fda185887043dfa5f003dce2b504"],["/images/pwaicons/192.png","f6ea3fea895b249e7e18752ff4b764d2"],["/images/pwaicons/36.png","403ba87730a04759ab2ff1091511f980"],["/images/pwaicons/48.png","43fe281470a940ad5505e33f6bc8b721"],["/images/pwaicons/512.png","def37ed2d6113529a5b31404e8764fee"],["/images/pwaicons/72.png","bb7185304cc2fe2f2729bdb22d535672"],["/images/pwaicons/96.png","5b0da892df56a0206adcd163b0e4fb17"],["/img/1.jpg","03ebacf9e446ba87a43c1fd211797872"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","b7b1d788b13d10079b6df2010efa0ea4"],["/img/avatar.jpg","b651c8ed3f440c4730936239b50ae62f"],["/img/favicon.png","c72b7ff859ac6067422e7f47f1cf344b"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","5698c630495c11f58b81700051d40881"],["/img/wechat.png","90d73b41884bdc4d24fb1bbd0d68298a"],["/index.html","9e5d71c106f5f7ff52eaa1df0502fb6a"],["/js/Valine.min.js","e41d4342fa7cb24ea2e03abbaefb76a0"],["/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","8a1a768dcf7b95e47e776f43a23a4b97"],["/movies/index.html","f51bc37343c605d0226d46d03697e758"],["/music/index.html","ab33f8f3cb8447ddf368adce0835dbae"],["/page/2/index.html","12f5279912e1f98ce3234ce698f7c0ef"],["/page/3/index.html","bceed60135a7b4eb23579c45a89ce985"],["/page/4/index.html","be69b0e923efbed1c6d4619dc915584c"],["/page/5/index.html","c72898a5d48979d293c434ee4ff33a4a"],["/page/6/index.html","11ceb6ac68c4f9f18691799755329c88"],["/page/7/index.html","4e0294e7264604de951362c6fc82f94a"],["/page/8/index.html","95d4f2ad293d6d3a2a52f9c70e2a3fdd"],["/page/9/index.html","bd06ed8e3e65412973b949bc6d4659e3"],["/posts/1304884562.html","3e50faf9c393be395f45bbcaa00efd90"],["/posts/190540348.html","ac45a1c9b6bbb4cf17625621102c52fa"],["/posts/2205990951.html","1fa4b62f650c7d9a227bf85883474955"],["/posts/2296141139.html","6bba0fc0abdbc6c1a940096b16d1d26b"],["/posts/2322029606.html","f0de0e85805d0559612bedf8cab5e004"],["/posts/3300220287.html","488286c6ee19a8203f6b3a43e3d127b0"],["/posts/3328524930.html","f85f5f744534b1796230b10d87db0cad"],["/posts/3502553385.html","5d5046431fa42e1cc49e81de36c23546"],["/posts/3841896169.html","afbea953b79afc5588f534cdebc6b89f"],["/posts/4226563224.html","3c28a8397341864195b3cb1b40d809db"],["/posts/4292261589.html","a6be536b4a1e4af539c33c0feea7b6f5"],["/posts/663709621.html","5d712cf81fe510d50743aa4f41e66732"],["/posts/72389457.html","ce4320ad2114b9602b0b9f1c06100aa7"],["/posts/Aop_aoptx.html","419196df2ccbc932f79cf9881a43b256"],["/posts/Jdbc_study.html","e8b2ac914f56f082471e534fe1aba1ba"],["/posts/Maven_study.html","710fa352acbd448a1a518aa0d8b0f234"],["/posts/SpringBoot_Interceptor.html","52ebcf76ff48fe6102509ae1a911479b"],["/posts/SpringBoot_ano.html","8da8ef790a3bb37f70c357d370fe7480"],["/posts/SpringBoot_myabtis.html","f03afb7e2d5fa2555c85616a2a01dfd1"],["/posts/SpringBoot_start.html","70a7508901f7a878f213fbf45d10f357"],["/posts/SpringBoot_tran.html","2a8e995ec2c9c5064ff506e6458715fc"],["/posts/SpringIoc_XML.html","49d51ac9813e7017340bf3f653d7b213"],["/posts/SpringIoc_anno.html","13398b904f65ed3aa3119e46a2b88f8f"],["/posts/SpringIoc_yilai.html","efa5fd065a1c3bc6bfabfee42376c358"],["/posts/SpringMVC_con.html","f166ef734b812fceef57616e75a47760"],["/posts/SpringMVC_data_view.html","47a8d03f62ccbe86f5feb8c3ef1f4cb5"],["/posts/SpringMVC_interceptor.html","a46efb92f135851d2dcff204bc51278e"],["/posts/SpringMVC_start.html","24655688e8aee3402d7c1f23917c5ff7"],["/posts/SpringMvc_anno.html","58941bbb810ae88f7fc6d923c1a6f320"],["/posts/SpringMvc_exception.html","476014406a0f8bb87373ac39968abe12"],["/posts/SpringMvc_para.html","51fb1f36693ecb0681650abb8fb0cb38"],["/posts/Spring_Aop_anno.html","9fa50056f3c3e739b0334cb9a406af7e"],["/posts/Spring_Aop_xml.html","e4fc798a3054b811d8b3aa090c0a7d98"],["/posts/Spring_CRUD_XML.html","706aa8327b3b2ed175897c79c5668614"],["/posts/Spring_CRUD_anno.html","0f5f9b1f59f0a9ffe22e7497a1e646a3"],["/posts/Spring_aoptx.html","7dccefd60b66b82e076aa55f6e9d7be2"],["/posts/aop.html","0253fce096b6d4c6a000a41ea81ccad0"],["/posts/beanutils_to.html","8b89db366c67b9132176d25deb30aa28"],["/posts/c_file.html","cb0afd075d4cb13100a8539a7839f7a0"],["/posts/coupling.html","b6b1097e02767ae11d962544a5c974c5"],["/posts/database_link.html","095aeac3c823d7f2156957d982455a0a"],["/posts/java_proxy.html","57823d831e93ce91a08bfce576d5eae4"],["/posts/java_re.html","dffe8db797c19af12f7b4d2f6ca035b7"],["/posts/mybatis.html","998f9d5b27ae47b0248afa721f93ef46"],["/posts/mybatis_cache.html","cae9334001b346cb27d933263aefc8d1"],["/posts/mybatis_crud.html","e608bbca00be09ab514f9a2f299d3c34"],["/posts/mybatis_deploy.html","96cc3a3c76e471d5faea3b5c59cbe021"],["/posts/mybatis_dyn.html","d78659b1817a025a12c57bbf9b904da9"],["/posts/mybatis_en.html","60b08abe828e797b19a5ec6ba2240204"],["/posts/mybatis_lazy.html","b2a3a04c9368737168807c9bf2b2fe9b"],["/posts/mybatis_para.html","b7b5d822a1bdabef95f40848ca1bc499"],["/posts/mybatis_res.html","f22b5b22d1a94d8e797418252bbdf7cd"],["/posts/mybatismany_anno.html","367c4ad91653f29c1fef0abbb474e334"],["/posts/mybatismany_xml.html","59ace643b076ca6989a9b19420cbfd6b"],["/posts/one_web.html","344f47e1b4afccb0c61464f870830c14"],["/posts/redis_dw.html","210a3426859017729dea1d11a3586169"],["/posts/springMvc_.html","e6281fee3b54b9d97b3c064ab9ec4236"],["/posts/spring_jdbc.html","2f429970b971594d93bd2f717f5c66df"],["/posts/spring_sum.html","df93b3f58f345b8edcc72ca06546d8f1"],["/posts/springboot_character.html","8722d7c9d9a79f96246e47c94298838c"],["/posts/springboot_filter.html","3bd45042c8b2aa4b0e2b36c048fb2c21"],["/posts/springboot_logback.html","780a9696899f614a56d571493a82aa88"],["/posts/springboot_restful.html","b3eb1ea12ee78c73b7102291205a7a80"],["/posts/springboot_servlet.html","e5be2da01d2929ab1f3307d6aca804a4"],["/posts/springboot_thymeleaf.html","1848484921adb4968a5e4579864d8d4c"],["/posts/ssm.html","05e7210ef00e5ce16dd0105f764305a3"],["/posts/thymeleaf_attribute.html","d68943ab48f5ca84cafffb2facc0bec2"],["/posts/thymeleaf_literal.html","397d5d6753a8854b4d9edb3f2cd1c3bf"],["/posts/tomcat_ins.html","938aaac474f5449398aa0e2fafb19787"],["/posts/vm_centos.html","3cf86131eecc38fe681ff40ea2469c2e"],["/posts/zookeeper_acl.html","ccc8dbe81318fc69e0583bd8ece96afe"],["/posts/zookeeper_colony.html","1e2b5c39356c80f3f7b32f196af178de"],["/posts/zookeeper_command.html","143cc0ad085f72857483adf3386ea474"],["/posts/zookeeper_curator.html","5d987fc6d78b25f7d06b30c3c2cdb620"],["/posts/zookeeper_dpkg.html","f7f3b543e15830dfe507933d1b51d2d6"],["/posts/zookeeper_introduce.html","01742438f87af1319e4c90a75c210593"],["/posts/zookeeper_javaapi.html","7b8fe4994239c8faa8fbfdf7b53b5964"],["/posts/zookeeper_shell.html","f75d81f6b7683772b8b769e7df8df0fa"],["/posts/zookeeper_taokeeper.html","1afc0ffbb14309fd82ca5983d8fb768a"],["/posts/zookeeper_watcher.html","30b086b8d00712ab5fea4a5c0a0e2104"],["/posts/zookeeper_zapandlea.html","c8ff491a0564e8e15dc186bc50ad9287"],["/sw-register.js","f7f75ead14ba66bfb512fd98b2bc98d7"],["/tags/AOP/index.html","4b1daa3003d6654acbddd72666ec8d64"],["/tags/BeanUtils/index.html","0e2be9c0e43528f3c0ce809f486844c8"],["/tags/C/index.html","8eea3ffadfb6b193eacbf9576b642cd2"],["/tags/CRUD/index.html","7b66b09115ab1dba6669db47d17a9f1e"],["/tags/CentOS/index.html","bd4c51658a4a88882f6dfea0ca0510fe"],["/tags/Filter/index.html","82fed38e04d14420dfa51098033b660b"],["/tags/IO/index.html","2bebd74a466d766a13c71852ffcc44d8"],["/tags/IOC/index.html","43c2f1e20cd4c2e65a8028d27ce0c61f"],["/tags/JDBC/index.html","29fbbe8b3b54ff67d6802a6ed83615b1"],["/tags/Java/index.html","c24be9e2d52f7ff3c4ddcac23b5f882e"],["/tags/Jdk/index.html","3f3112f9a98e387b966760d83d0426ae"],["/tags/Linux/index.html","737ff84dc2d2ef3cd8f9460d08034705"],["/tags/Logback/index.html","4c79a2bf60e1783d01a53ea2cd8c82f0"],["/tags/MacOS/index.html","f7585922e20fda0cef705aeb8df73cea"],["/tags/Maven/index.html","78ec3444030cc0e9e06b99f06bfb098f"],["/tags/Mysql/index.html","e823ab6277ed0f420f5a210ebc52cdf2"],["/tags/Python/index.html","301dab27399ee32732971b52e7dd753b"],["/tags/RESTFul/index.html","0441d4b6de64c5b78053f774c849fa50"],["/tags/Redis/index.html","43aa659b01d5309e1f37f93ecb590e53"],["/tags/SSM/index.html","8dd9218347460c7649ef58569f772b4f"],["/tags/Servlet/index.html","6966bd165ec2c8ddd2a79b9612eb33f2"],["/tags/Shell/index.html","705ccf217cb8953ef9295737355ad60b"],["/tags/Spring/index.html","17a98ad923dc5d9f156394ccd30590e9"],["/tags/Spring/page/2/index.html","f0e0f997eb7ac41e492e950a9306e841"],["/tags/SpringBoot/index.html","3f8b02875a15f0a4620897d957dfd864"],["/tags/SpringBoot/page/2/index.html","f7408320a795993c77485a41ea95cfe8"],["/tags/SpringMVC/index.html","5feb1166cc219d52c39c5503193997dc"],["/tags/Thymeleaf/index.html","3528b223197446a2717ccaab3b77ca5a"],["/tags/Tomcat/index.html","f26c063ff91468abab35140d613cb77b"],["/tags/Transacation/index.html","f4252badd486c6a9233c4af1423cc323"],["/tags/Windows/index.html","d45124ecf47d078b88cf0345f5f55e85"],["/tags/Windwos/index.html","69644a88ea52df267e55c22db830d63e"],["/tags/XML/index.html","84a05d4696e8c17afe0f6ab8580204ce"],["/tags/Zookeeper/index.html","0eaa5dff177e5f30b2aa9832aef583e8"],["/tags/Zookeeper/page/2/index.html","ecf1d3d8f236cce826b422c62f078d3c"],["/tags/acl/index.html","967aaf698d8e6dbb3fd1ee1566ab4f53"],["/tags/curator/index.html","87727606be0a7c4f8d513f4abaf7646f"],["/tags/gcc-g/index.html","e1a8a79e5400c6b368f58e522dd19c8c"],["/tags/iTerm/index.html","2ac7847ca65390c9d9f517fbc90b5209"],["/tags/index.html","a3aa77b65eea2e7a927ed343659937ea"],["/tags/javaAPI/index.html","07e70142b4d2034505644d6b4b1456d5"],["/tags/leader选举/index.html","e2caf9871172a1abde203536ab54041c"],["/tags/mybatis/index.html","4a128543e67132ef50e9912490ea8b59"],["/tags/mybatis/page/2/index.html","d44de2cc6d4e11a474bd7e36d11d18f3"],["/tags/taokeeper/index.html","321a1d02761bb280b243b63b28a99350"],["/tags/vscode/index.html","b6c6aeeb4b4de0b7651e93299ec9b8cd"],["/tags/zab协议/index.html","67b372c65ca43733bd445d78da5d1c49"],["/tags/事件监听机制/index.html","5f76e93eaef851d1b4a32703be962b71"],["/tags/事务控制/index.html","dd5aa7fab7aed602dbb1d3912346fa41"],["/tags/依赖注入/index.html","0e07686d8879840a047e93cf4ef57062"],["/tags/入门/index.html","1a262d3f3a247cfefa8bdc4141bc3499"],["/tags/内置函数/index.html","2ff1b7cd55e61674820e17c78e66557d"],["/tags/函数/index.html","eae163c9bf5cd7dda1188765b9407b63"],["/tags/动态SQL/index.html","0710ec4462dd0628ed304163dda5b349"],["/tags/动态代理/index.html","89df80f499b5ac027fb34099fadc2515"],["/tags/参数/index.html","6efbd6190b4bd4bede27c4a0b1971b57"],["/tags/参数绑定/index.html","08831ac58982acd26afbd2f273b39583"],["/tags/反射/index.html","404523c535c3ef45b1654171a0861c76"],["/tags/四字监控命令/index.html","0d8d43945049e1c3b45c06046de5b9fb"],["/tags/多表联合/index.html","a62f44e4f950e2910ad048646f252ad3"],["/tags/字符编码/index.html","11d50c98dde10f49438dc870fd30b1a2"],["/tags/字面量/index.html","54dca02c5ada80fc0115b0ab43748f3e"],["/tags/安装/index.html","0d953a710c41d18e602c396502599400"],["/tags/延迟加载/index.html","6f9ad77fd8721a48235daf120aabacf2"],["/tags/异常处理/index.html","f3f9c955890bbb4b4f231df48c20b951"],["/tags/扫雷破解/index.html","ce1c712ba640c0a4a3e999958426e2e1"],["/tags/拦截器/index.html","8daefc27244e755b13a2089a3914d1db"],["/tags/教程/index.html","368bcf9cf7dd04d712d3003ba0c0f530"],["/tags/数据-视图/index.html","05b2aa1ff190a646988027ee201285dd"],["/tags/数据库连接池/index.html","f4a81bc6fcc86be5e0e33b0c2b26adb6"],["/tags/文件上传/index.html","af437409094ca03ba93426dbc0238c41"],["/tags/框架/index.html","c661355bc16481b947474a1581ef3154"],["/tags/概念/index.html","4f8e0953dc9e34f648dcf06f02d6e9f7"],["/tags/概述/index.html","12e3b0fbfd6c1cc0660e55670cf1a3f4"],["/tags/注解/index.html","385d27c0801ca0850f7bdffcf2090076"],["/tags/缓存/index.html","2b90eaec7d209bec1f1ed7ed4c933ea7"],["/tags/耦合与解耦/index.html","49f896a39ccada816d07c8a7c2306e7f"],["/tags/虚拟机/index.html","762fd7babc3a1429b9cb7a514e632de7"],["/tags/读-写文件/index.html","f93e2703d9809cd243d27275d485f848"],["/tags/运算符及表达式/index.html","53c4876442881f5293cb0642f6d2606e"],["/tags/递归/index.html","b6d83d14b8bc32d69cdf8e1d0227ff17"],["/tags/配置文件/index.html","ccab11e2226d31c31a92949940be4017"],["/tags/集合/index.html","2e36fdd4f337988c6cfd847965f9354b"],["/tags/集群/index.html","02e854f5bfbad3f7cea21623cd7376c7"]];
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
