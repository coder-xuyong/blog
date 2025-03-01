---
title: mysql自定义函数
icon: pen-to-square
date: 2023-06-01
lastUpdated: true
category:
  - mysql

tag:
  - sql

---

mysql自定义函数
<!-- more -->

# mysql自定义函数



## 建库函数
```sql
CREATE DEFINER=`root`@`%` PROCEDURE `createdatabases`()
BEGIN
DECLARE str varchar(40);
DECLARE Done INT DEFAULT 0;
DECLARE rs CURSOR FOR SELECT TENANTCODE FROM sys_tenant where TENANTCODE<>'incontrol';
/* 异常处理 */
DECLARE CONTINUE HANDLER FOR SQLSTATE '02000' SET Done = 1;
/* 打开游标 */
OPEN rs;
/* 逐个取出当前记录userId字段的值*/
FETCH NEXT FROM rs INTO str;
/* 遍历数据表 */
REPEAT
	#CREATE DATABASE str CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
	SET @strsql = CONCAT('CREATE DATABASE  if not exists ',str,' CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci');
    ## 预处理需要执行的动态SQL,其中stmt是一个变量
    PREPARE stmt FROM @strsql;  
    ## 执行SQL语句
    EXECUTE stmt;  
    ## 释放掉预处理段
    deallocate prepare stmt;
FETCH NEXT FROM rs INTO str;
UNTIL Done END REPEAT;
/* 关闭游标 */
CLOSE rs;
END
```

## 建表函数

```sql
CREATE DEFINER=`root`@`%` PROCEDURE `addtable`()
BEGIN

DECLARE str varchar(40);
DECLARE Done INT DEFAULT 0;
DECLARE rs CURSOR FOR SELECT TENANTCODE FROM sys_tenant WHERE TENANTCODE!='incontrol';
/* 异常处理 */
DECLARE CONTINUE HANDLER FOR 1243 SET Done = 0;
DECLARE CONTINUE HANDLER FOR 1146 SET Done = 0;
/* 打开游标 */
OPEN rs;
/* 逐个取出当前记录userId字段的值*/
FETCH NEXT FROM rs INTO str;
/* 遍历数据表 */
REPEAT
	SET @strsql = CONCAT("CREATE TABLE  IF NOT EXISTS " ,str,".`sys_module_operation_record` (
  `ID` varchar(36) NOT NULL COMMENT '主键',
  `CODE` varchar(100) DEFAULT NULL COMMENT '编号',
  `EVENTTIME` datetime DEFAULT NULL COMMENT '事件时间',
  `OPERATIONUSERID` varchar(36) DEFAULT NULL COMMENT '操作用户ID',
  `OPERATIONUSERNAME` varchar(50) DEFAULT NULL COMMENT '操作用户名称',
  `EVENTTYPE` varchar(50) DEFAULT NULL COMMENT '事件类型',
  `EVENTTYPENAME` varchar(50) DEFAULT NULL COMMENT '事件类型名称',
  `EVENTDESCRIBE` varchar(300) DEFAULT '' COMMENT '事件描述',
  `TABLENAME` varchar(100) DEFAULT NULL COMMENT '关联主表',
  `IP` varchar(50) DEFAULT NULL COMMENT 'IP',
  `OPURL` varchar(200) DEFAULT NULL COMMENT 'URL',
  `CLIENTINFO` varchar(200) DEFAULT NULL COMMENT '客户端',
  `ISMOBILE` varchar(20) DEFAULT NULL COMMENT '是否移动端',
  `ROPTION` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '扩展json格式配置',
  `DELETED` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '0' COMMENT '是否删除Y/N',
  `REMARK` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '备注',
  `CREATEDATE` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATEUSERID` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '创建用户ID',
  `MODIFYDATE` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改日期',
  `MODIFYUSERID` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '修改用户ID',
  `CREATEUSERNAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '创建人名称',
  `MODIFYUSERNAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '修改人名称',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='日志记录';");
    ## 预处理需要执行的动态SQL，其中stmt是一个变量
    PREPARE stmt FROM @strsql;  
    ## 执行SQL语句
    EXECUTE stmt;  
    ## 释放掉预处理段
    deallocate prepare stmt;
FETCH NEXT FROM rs INTO str;
UNTIL Done END REPEAT;
/* 关闭游标 */
CLOSE rs;

END

```

## 加字段函数
```sql
CREATE DEFINER=`root`@`%` PROCEDURE `adddatabaseclumn`()
BEGIN
DECLARE str varchar(40);
DECLARE Done INT DEFAULT 0;
DECLARE rs CURSOR FOR SELECT TENANTCODE FROM sys_tenant WHERE TENANTCODE!='incontrol';
/* 异常处理 */
DECLARE CONTINUE HANDLER FOR 1243 SET Done = 0;
DECLARE CONTINUE HANDLER FOR 1146 SET Done = 0;
/* 打开游标 */
OPEN rs;
/* 逐个取出当前记录userId字段的值*/
FETCH NEXT FROM rs INTO str;
/* 遍历数据表 */
REPEAT
	#alter table wf_run_task add COLUMN AUDITTIMELIMIT datetime COMMENT '审批时限';
	SET @strsql = CONCAT('alter table ',str,'.wf_run_task add COLUMN AUDITTIMELIMIT datetime COMMENT \'审批时限\'');
    ## 预处理需要执行的动态SQL,其中stmt是一个变量
    PREPARE stmt FROM @strsql;  
    ## 执行SQL语句
    EXECUTE stmt;  
    ## 释放掉预处理段
    deallocate prepare stmt;
FETCH NEXT FROM rs INTO str;
UNTIL Done END REPEAT;
/* 关闭游标 */
CLOSE rs;
END

```

## 自定义函数中调用其他函数做循环
```sql
CREATE DEFINER=`root`@`%` PROCEDURE `createAllBlades`()
BEGIN
	#Routine body goes here...

	DECLARE macId VARCHAR(64) ;   -- 自定义变量tableName
	DECLARE done INT DEFAULT FALSE;
  declare runsql varchar(1000);

	-- 定义游标并输入结果集
	DECLARE cur_account CURSOR FOR select machine_id from qacs2000_config_2010.c_machine;

	-- 将结束标志绑定到游标，游标循环结束自动转true
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

	-- 打开游标
	OPEN  cur_account;
	-- 开始循环，read_loop为自定义循环名,结束循环时用到
	  read_loop: LOOP

		-- 取值 将游标当前读取行的数据顺序赋予自定义变量
		FETCH cur_account INTO macId;

		-- 判断是否继续循环
		IF done THEN
			LEAVE read_loop; -- 结束循环
		END IF;

    set @sqlStr= concat('call dgm2000_1_2010.createtables(', macId, ')');
    PREPARE stmt from @sqlStr;
    EXECUTE stmt;
    deallocate prepare stmt;

	END LOOP read_loop;

	CLOSE cur_account; -- 关闭游标

END
```