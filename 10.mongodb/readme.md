#课程介绍
周二第一讲 安装 配置 启动 增删改查 基础语法，node.js中的应用
周四第二课 索引 集合 系统管理 主从复制 分片 集群
#mongodb
##mongodb特点
BSON - binary json
对JSON的扩展，把JSON转成二进制文件并保存到硬盘上。
扩展了 null 布尔型 32 63整型 日期 正则 javascript函数等类型
##安装
##启动
安装为windows服务
mongod.exe --dbpath E:\mongodata --logpath E:\mongologo -
-logappend --directoryperdb --serviceName MongoDB --install
##mongo与关系型数据库的区别 mysql
1.集合collection  表
2.bson(key-value)  字段
3.无有明确主外键      主外键
mongosee
article {
  user_id: User(objectId) ref类型
}
4.扩展能力强，模式比较灵活   扩展能力差，不灵活
5.find                     SQl
#基本操作
##创建数据库
use blog
##添加集合和数据
db.persons.insert({name:'zfpx',age:1});

