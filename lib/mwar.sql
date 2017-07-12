/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.5.55-0ubuntu0.14.04.1 : Database - mwar
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mwar` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mwar`;

/*Table structure for table `admin_user` */

DROP TABLE IF EXISTS `admin_user`;

CREATE TABLE `admin_user` (
  `id` varchar(50) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `iphone` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `age` int(50) DEFAULT NULL COMMENT '0女1男',
  `sex` varchar(50) DEFAULT NULL,
  `mark` varchar(500) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `admin_user` */

insert  into `admin_user`(`id`,`username`,`nickname`,`password`,`iphone`,`email`,`age`,`sex`,`mark`,`date`,`updatetime`) values ('0ce0b7cdb0dc4b4a08b98f1bfb61467d10dd','张昭','子布','8','8','8',8,'1','','2017-07-12 15:38:31',NULL),('1','sysadmin','超级管理员','123456','18610010534','563550553@qq.com',27,'1','创始人',NULL,NULL),('10a97a95691dc645a168ee76f74636945465','黄忠','老黄','8','00','000',48,'1','百步穿杨','2017-07-11 11:01:45',NULL),('15e8d181e637de490be8139e3dffc3e99a6c','颜良','帅帅','0','0','0',0,'1','文丑但颜良','2017-07-12 15:32:55',NULL),('2','admin','管理员','1','111','111',111,'2','日常管理员',NULL,NULL),('246f440d113c0145a01820d151b55ae4f226','文丑','文丑丑','9','9','9',9,'1','乱入','2017-07-12 15:32:29',NULL),('3','sys','测试员','1','111','111',111,'3','测试',NULL,NULL),('309fa19a58932542a5581f05044bcfec9a46','zhangliao','张辽','111','186','zhangliao@qq.com',23,'1','张辽张文远',NULL,NULL),('36e83ebe9757f94066986889a9d1eba87263','诸葛亮','卧龙','7','7','77',27,'1','诸葛超亮','2017-07-12 15:35:08',NULL),('3e31cfa13e97d34dd8380a73335f9c94003e','关羽','二哥','8','9','9898',31,'1','红脸山东大汉','2017-07-11 10:57:18',NULL),('3e5b5bcb82c2b845d2888d88a1908062a4e8','庞德','三德子','1','','1',1,'1','先马超再曹操 忠臣也','2017-07-12 15:29:24',NULL),('417c7bfe00521049f008c8c07f034a9396b5','周泰','阵亡','99','99','9',9,'1','','2017-07-12 15:30:57',NULL),('455b55f889946843c58a15f8c3fb57281c5c','赵云','小云','1','33','zhaoyun@qq.com',28,'1','我乃常山赵子龙是也','2017-07-11 10:54:20',NULL),('46de29b701e4304299085150192a0b7999b1','贾诩','谋臣','9','9','99',999,'1','善终','2017-07-12 15:35:30',NULL),('4bd81bd4246a02477328b382cb56aa65cf02','郭嘉','鬼才','j','j','0',37,'1','郭嘉遗计定辽东','2017-07-12 15:34:43',NULL),('5c8edc59ca526c4a96c9d47c2667f4a3fb29','马超','小超超','3','666','chao',19,'1','神威将军','2017-07-11 10:58:03',NULL),('615eb5ddb0f54b42efb8684b041c9f418289','邓艾','艾弗森','9','9','99',9,'1','9','2017-07-12 15:33:39',NULL),('6367f510a8a46a44f0a9ce3a0eb81840e62a','吕蒙','子蒙','999','9','9',9,'1','99','2017-07-12 15:56:01',NULL),('68886171f05c2f434cf8679f2fd61744c71f','大乔','乔乔','9','9','999',9,'1','9','2017-07-12 15:39:16',NULL),('703e3ef0e2018e48c3ebe55ec2e6f62aa1ec','庞统','令名','99999','999','9',9,'1','9','2017-07-12 15:43:45',NULL),('73914afd529d054a5a59ff95add14456156f','沮授','小受','','8','8',88,'1','','2017-07-12 15:42:30',NULL),('7d1cc7f0cde98c4fe1c9560c84b38f1ee762','荀攸','友弱','8','8','8',8,'1','','2017-07-12 15:38:05',NULL),('8526f67dfe15bf4ba2f852ef4be9671081c7','吕布','吕小布','1','','lvbu@nodejs.com',33,'1','人中吕布','2017-07-11 10:52:40',NULL),('91a706fa2ce79241742863e2b2633b7d4f93','夏侯渊','冤不冤','1','3','3',3,'1','临渊羡鱼不如退而结网','2017-07-12 15:27:30',NULL),('94dc67c8f97dff4a30f8f80f0e07afc945f7','徐庶','元直','8','8','8',88,'1','1','2017-07-12 15:41:55',NULL),('9721095f42303446ac48e68467430ef9a0aa','司马懿','小马','988','8','8',8,'1','123','2017-07-12 15:44:41',NULL),('a3bac989a0125a4188a8782a7cb88f395788','夏侯惇','小壮','1','1','2',22,'1','壮壮','2017-07-12 15:26:19',NULL),('a76d84c44c0f744d0d487eb4dea7df4c4874','荀彧','文弱','8','8','8',8,'1','子之子房也','2017-07-12 15:35:57',NULL),('c3afa828fa1c5f42f0fa991fd1fbf365ff08','魏延','胃炎','9','9','99',9,'1','反骨仔','2017-07-12 15:31:38',NULL),('c412f6186042064b0c68f5c66f09aeab37a0','曹操','贼哥','曹操','190','coacoa@node.js',37,'1','治世之能臣 乱世之枭雄',NULL,'2017-07-12 17:25:54'),('cb3e89b6bed5db4cf2baf85bb9336be34bb0','孙策','孙郎','99','9','8',23,'1','江东小霸王','2017-07-11 11:02:57',NULL),('d43a8b2293033948019bea99ecd38fa0d14b','甘宁','锦帆','u','uuu','9',0,'1','水师大都督','2017-07-12 15:30:10',NULL),('d4c65815d755ed4a55db9f5d2393ef6e4a72','张郃','那是郃不是鸽','1','1','1',1,'1','','2017-07-12 15:28:11',NULL),('d888935ac3e4ac4ec7cb9b9c44ae61d7b8ee','张绣','北地枪王','0','0','0',0,'1','八年','2017-07-12 15:32:06',NULL),('e66e700b1f77d14cfa182581110482187208','徐晃','醉汉','1','11','3',3,'1','不喝酒就晃','2017-07-12 15:28:38',NULL),('e78207ea3b31534c803b9ed37b211bb3786a','高顺','顺子','9','9','9',35,'1','陷阵营','2017-07-12 15:40:48',NULL),('e8df1b04c2370c4401c8c5acf4d25a5a48f4','姜维','老生姜','9','9','9',9,'1','','2017-07-12 15:33:15',NULL),('eb98eaa6d7484d4061d8dced631dcc692260','典韦','恶来','4','4444','elai',43,'1','古之恶来','2017-07-11 10:56:45',NULL),('edc65bc20e8a004937084bb0799dcef4af94','太史慈','小正太','8','999','8',33,'1','孝义无双','2017-07-11 11:03:41',NULL),('f6392a6ca9cb7a4157abff7adf782bee938f','周瑜','公瑾','','9','9',9,'1','','2017-07-12 15:38:44',NULL),('f68ec91c8d92d843b18b2838f87b06ff370c','小乔','乔乔','8','8','8',8,'1','8','2017-07-12 15:39:01',NULL),('fa37af9b9262e94e1398bbc9c4de7e15ec76','许褚','虎痴','许褚','1','3',3,'1','谁与我大战三百回合','0000-00-00 00:00:00','2017-07-11 11:02:21'),('fac4c0e2528cc54f2858b0a5f46ed836b429','张飞','小黑','9','oio','o',16,'1','黑脸的张飞。。。张三爷','2017-07-11 11:00:49',NULL),('fe3c83531b6ed14b481b54017ab153a642e9','鲁肃','子敬','99','','9',9,'1','9','2017-07-12 15:42:50',NULL);

/*Table structure for table `lunch` */

DROP TABLE IF EXISTS `lunch`;

CREATE TABLE `lunch` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `userid` int(50) NOT NULL,
  `state` int(50) DEFAULT NULL COMMENT '1已订购2订购',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `lunch` */

insert  into `lunch`(`id`,`userid`,`state`,`date`) values (1,3,1,'2017-07-02');

/*Table structure for table `lunch_user` */

DROP TABLE IF EXISTS `lunch_user`;

CREATE TABLE `lunch_user` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `user` varchar(200) DEFAULT NULL,
  `nickname` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `lunch_user` */

insert  into `lunch_user`(`id`,`user`,`nickname`) values (1,'花建国','花总'),(2,'付学亮','亮仔'),(3,'迟新','新仔'),(4,'杨金华','华仔'),(5,'张翔','翔仔'),(6,'朱慧敏','慧敏'),(7,'芦晨瑜','晨瑜'),(8,'杨常坤','坤哥');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `nikename` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `age` int(50) DEFAULT NULL,
  `sex` int(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`nikename`,`password`,`age`,`sex`,`email`) values ('1','zhangliao','张辽','123456',2,1,'zhangliao@node.com'),('2','lvbu','吕布','123456',45,1,'lvbu@node.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
