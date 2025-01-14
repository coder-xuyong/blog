---
title: mysqldump 基本使用
icon: pen-to-square
date: 2025-01-13
cover: https://fastcdn.mihoyo.com/content-v2/hk4e/126888/1a1017906928ccf282455abd007ab356_8943004632492912906.png
lastUpdated: true
category:
  - mysql

tag:
  - sql
  - mysqldump

---

mysqldump 的使用
<!-- more -->


## mysqldump 介绍

此工具的目的是将数据库导出到备份文件或将数据库移动到另一个 Web 主机。其他带分隔符的文本格式（如 XML 和 CSV）也可以使用 mysqldump 生成。这些简单的查询使备份过程更加容易。文件中的文本显示为一组 SQL 语句，以后可以将其重建为原始状态。

## mysqldump 是做什么的？
- MySQL 数据库备份：使用 mysqldump 创建安全备份，保护您的数据免遭丢失或损坏。
- MySQL 数据库版本控制：创建数据库版本，有点像您可以在任何阶段恢复到的 GIT 标签
- MySQL 数据库迁移：mysqldump 简化了数据库传输，确保了服务器或环境转换期间的数据完整性。
- 设置开发环境：mysqldump 有助于复制生产数据，以实现一致且可靠的开发和测试设置。

## 导出数据的格式
- SQL 语句：默认格式会生成一个 SQL 脚本，该脚本可用于重新创建数据库结构和数据。
- 压缩文件：mysqldump 可以生成 .gz （gzip，linux内置，windows需要单独下载exe文件） 或 .bz2 （bzip2） 等格式的压缩输出文件，从而节省空间。
- XML 格式：它还可以生成 XML 格式的数据，以便更轻松地与其他系统集成或数据交换。
- 制表符分隔的文本：您可以使用 option 创建制表符分隔的文本文件，这对于数据导出和导入非常有用。
- CSV（逗号分隔值）：通过使用 --fields-terminated-by 和 options，mysqldump 可以生成 CSV 文件，这些文件通常用于数据交换。
- 自定义用户定义格式：您可以使用 option 并指定自定义分隔符和格式来定义自己的自定义输出格式。


## 如何使用？
作为开发人员，您可以利用 mysqldump 来获取 .sql 文件，该文件充当全面的数据库备份。
要使用此工具，您需要访问运行数据库实例的 MySQL 服务器，以及导出数据所需的权限。不要忘记准备好您的数据库用户凭证，包括用户名和密码。

## 如何访问？
mysqldump 命令行工具通常与 MySQL 客户端或 MySQL 服务器安装捆绑在一起。要验证 mysqldump 在本地系统上是否可用，您可以运行以下命令：
```shell
# linux
which mysqldump
# windows 所在路径为：
# D:\mysql-5.7.30-winx64\bin\mysqldump.exe
```
如果未安装该工具，则此命令将生成错误消息。

要检查系统上安装的 mysqldump 版本，请使用以下命令：
```shell
mysqldump --version
```
有关使用 mysqldump 命令的指导，您可以通过运行以下命令来访问其帮助文档：
```shell
mysqldump --help
```

## 需要哪些权限？
您需要一个有效的数据库用户，至少具有完全读取访问权限。这应该适用于基本选项，但更高级的命令可能需要额外的权限。

要使用 mysqldump，您通常需要以下权限：

- SELECT 权限：读取数据时需要。
- SHOW VIEW 权限：访问视图定义时需要。
- LOCK TABLES 权限：表锁定所必需的。
- RELOAD 权限：与 --flush-privileges 选项一起使用。

## 导出 MySQL 数据库

我们将在下面了解如何使用 mysqldump 执行以下 MySQL 任务：

- 备份 MySQL 数据库中的特定表
- 备份 MySQL 数据库中的单个表
- 备份特定的 MySQL 数据库
- 备份单个 MySQL 数据库
- 备份整个 MySQL 服务器（所有数据库）
- 备份 MySQL 数据库（不包括特定表）
- 仅备份 MySQL 数据库结构
对于这些任务中的每一个，我们将提供要使用的命令行，我们还将解释可用于自定义 mysqldump 命令的不同选项。
确保您使用的是安装了 mysqldump 的计算机。

默认情况下，转储 MySQL 数据库中的所有表，但有些类型的表不包括在转储中。这些是：

- 临时表：转储中不包括临时表。mysqldump
- 系统表：它还不包括系统表，这些表由 MySQL 内部使用，不适用于常规用户数据。
- Performance Schema Tables：不包括 Performance Schema 数据库中的表。
- 信息架构表：Information Schema 数据库中的表也不包括在内。

请务必注意，它提供了允许您自定义转储行为的选项。例如，您可以使用该选项从转储中排除特定表，包括常规用户创建的表。您还可以使用该选项排除表数据，同时保留表结构。
```shell
mysqldump--ignore-table--no-data
```

## 备份特定的 MySQL 表
匹配您的输入以符合以下 mysqldump 命令结构：
```shell
mysqldump [options] db_name [table_name ...]
```
对于 live 命令，请替换为有效的选项 names 或 flags。
这些参数很可能包括用户和密码。[options]-u-p


⚠️ 使用多个选项时，请注意它们的列出顺序，因为它们将按从第一个到最后一个的顺序进行处理。
此处，将替换为您要导出的表的名称。[table_name…]

⚠️ 不同的表格必须用空格分隔。
以下示例用于备份名为 mystery 和 cash 的表，数据库的名称为 db_cooper
```shell
mysqldump -u username -p db_cooper mystery cash > file_name.sql
```
然后，您将为数据库用户提供密码，因为该密码不会与标志一起传递。
该字符">"表示将创建转储文件的输出重定向。这里是最终文件的名称：file_name

## 备份单个 MySQL 表
如上一节所述，您可以通过在数据库名称后列出单个表来导出该表。

以下示例用于备份名为 mystery 的表，数据库的名称为 db_cooper
```shell
mysqldump -u username -p db_cooper mystery > file_name.sql
```
## 备份特定的 MySQL 数据库
导出数据库的步骤与导出表的步骤非常接近。命令的格式只是发生了一个小的变化。

匹配您的输入以符合以下 mysqldump 命令结构：
```shell
mysqldump -u username -p --databases db_larry db_curly db_moe > file_name.sql
```
您将导出的数据库位于选项之后。--databases

⚠️ 空格字符分隔多个数据库。

## 备份单个 MySQL 数据库
与导出多个数据库非常相似，您只需指定一个数据库名称。

匹配您的输入以符合以下 mysqldump 命令结构：
```shell
mysqldump -u username -p --databases db_larry > file_name.sql
```
您将导出的数据库位于选项`--databases`之后。

## 备份 MySQL 服务器（所有数据库）
该命令也适用于整个服务器。

匹配您的输入以符合以下 mysqldump 命令结构：
```shell
mysqldump -u username -p --all-databases > all_databases.sql
```
该命令本身非常基本，指示应转储服务器上的所有内容。

💡 添加将使导出的文件与较旧的 MySQL 服务器或数据库系统兼容。
💡 在 Windows 上使用 PowerShell 的开发人员需要将 include 作为一个选项。这将指定文件名并确保输出为 ASCII 格式，以便稍后正确加载：`-compatible-result-file`

其他常见选项包括 --no-data--no-create-info，使用备份数据库而不带任何结构。

## 备份 MySQL 数据库（不包括特定表）
要在排除特定表的同时备份 MySQL 数据库，您可以使用带有 option 的命令。命令格式如下：mysqldump--ignore-table
```shell
mysqldump -u username -p database_name --ignore-table=database_name.table1 --ignore-table=database_name.table2 > database_backup.sql
```
将占位符替换为以下内容：

database_name：要备份的数据库的名称。
table1、table2 等：要从备份中排除的特定表的名称。
通过使用该选项`--ignore-table`，并指定要排除的数据库名称和表名，您可以创建整个数据库的备份，同时忽略指定的表。

## 仅备份 MySQL 数据库结构

要备份 MySQL 数据库的结构（无数据），您可以使用带有 option 的命令。这是执行此操作的命令：mysqldump--no-data
```shell
mysqldump --no-data -u username -p database_name > database_structure.sql
```
替换以下占位符：

database_name：要备份的数据库的名称。
当您运行此命令时，它将创建一个 SQL 文件 database_structure.sql，其中包含数据库的结构，包括表架构、索引和其他结构元素，但没有实际数据。

## 如何恢复/导入 MySQL mysqldump 转储文件？
有多种方法和工具可以将 MySQL 转储文件导入数据库。

我们将在这里介绍如何使用 mysql 命令行工具执行此操作。

导入 .sql 文件很简单，唯一的问题是在导入任何内容之前确保目标服务器有一个空白数据库。

步骤1：确保您已在目标计算机上创建 MySQL 数据库。
```shell
mysql -u root -pYOUR_PASSWORD -e "CREATE DATABASE destination_db"
```
此命令将在目标计算机上创建数据库。

步骤2：将转储文件导入到您刚刚创建的数据库中。
```shell
mysql -u root -pYOUR_PASSWORD destination_db < db_backup.sql
```
⚠️ 请注意，此命令将覆盖数据库的内容。destination_db


## --set-gtid-purged=OFF
添加这个命令，导出的时候，不导出 GTIDs。
GTIDs：从MySQL 5.6.5 开始新增了一种基于 GTID 的复制方式。通过 GTID 保证了每个在主库上提交的事务在集群中有一个唯一的ID。这种方式强化了数据库的主备一致性，故障恢复以及容错能力。
```shell
Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions, even those that changed suppressed parts of the database. If you don't want to restore GTIDs, pass --set-gtid-purged=OFF. To make a complete dump, pass --all-databases --triggers --routines --events. mysqldump: Error 2013: Lost connection to MySQL server during query when dumping table `table` at row: 5720
```
## Mysql 备份完整示例

### 备份和恢复所有 MySQL 数据库
步骤1：首先，让我们通过为服务器上的所有数据库生成转储文件来创建 mysql 备份。
```shell
mysqldump -u username -p --all-databases > all_databases.sql
```
现在我们已经准备好了转储文件，让我们将其恢复到新服务器。

步骤2：我们首先在目标服务器上创建一个新数据库。
```shell
mysql -u root -pYOUR_PASSWORD -e "CREATE DATABASE destination_db"
```
步骤3：最后，我们将转储导入到该新数据库。
```shell
mysql -u root -pYOUR_PASSWORD destination_db < db_backup.sql
```
就是这样！现在，您拥有了 MySQL 服务器的完整备份。

### 备份和恢复单个 MySQL 表
步骤1：首先，让我们通过从 database 生成单个表的 dump file 来创建 mysql 备份。
```shell
mysqldump -u username -p db_cooper my_table > single_table_dump.sql
```
现在我们已经准备好了转储文件，让我们将其恢复到新服务器。

在这种情况下，我们不会创建任何数据库，因为我们只想将该单个表还原到现有数据库中。

步骤2：让我们将转储导入到那个新数据库。
```shell
mysql -u root -pYOUR_PASSWORD destination_db < single_table_dump.sql
```
就是这样！现在，您拥有了 MySQL 服务器的完整备份。

## 高级 mysqldump 提示和技巧
### mysqldump --quick 标志有什么作用？
Mysqldump 可以通过以下两种方式之一运行。

- 该工具可以一次获取所有数据，将其缓冲在内存中，然后转储它。
- 它逐行转储表。

第二种方法在处理大型 table 时很重要。
通过使用该 options，mysqldump 可以读取大型数据库，而无需大量 RAM 即可将整个表放入内存中。
这可确保在具有少量 RAM 和大型数据集的系统上正确读取和复制数据库。

### 不带锁定表和 --skip-lock-tables 标志的转储
可防止在转储过程中锁定表。这在备份生产数据库时非常重要，因为在转储期间无法将其锁定。

通常，建议在转储 InnoDB table 时使用。但是，对于 MyISAM 表，为了数据一致性，您可能需要锁定 table。

那么我应该使用 --skip-lock-tables ？

如果要备份 InnoDB 表，是的。将其与`--single-transaction`结合使用以获得最佳效果。
如果要在 生产服务器上备份 MyISAM 表，请不要使用，除非您可以在备份过程中保持数据库表锁定。
```shell
mysqldump -u root -pmypassword my_database --skip-lock-tables > my_database.sql
```

### --single-transaction 标志有什么作用？
简而言之，它允许 MySQL InnoDB 转储具有数据库的一致状态。它告诉 MySQL 我们将要转储数据库，因此，将阻止表结构查询等重大更改以保持数据一致性。请注意，这仅适用于 InnoDB table。
```shell
mysqldump -u root -pmypassword my_database --single-transaction > my_database.sql
```
注意：MyISAM table 不会从这个标志中受益，如果你想保持它们的转储完整性，应该被锁定。

### 如何转储大表？
要转储大型表，您可以组合使用以下两个：--single-transaction --quick
```shell
mysqldump -u root -pmypassword my_large_db --single-transaction --quick > my_large_db.sql
```
注意：这对于 InnoDB table 来说是理想的。因为它将使用更少的 RAM，并且还会在不锁定表的情况下产生一致的转储。

### 如何使用 mysqldump 忽略表？
使用该选项，您可以在使用 mysqldump 时忽略表。–-ignore-table

下面是一个只允许你忽略一个表的示例：
```shell
mysqldump -u root -pmypassword my_db –-ignore-table=my_db.table_to_ignore > my_db.sql
```
如您所见，格式如下：`–-ignore-table=DATABASE_NAME.TABLE_TO_IGNORE`

要忽略数据库中的所有表（或在转储所有数据库时忽略整个数据库），必须重复该参数以包含要忽略的所有表。
```shell
mysqldump -u root -pmypassword –-ignore-table="my_db.table1" –-ignore-table="my_db.table2" –-ignore-table="my_db.table3" > all_databases.sql
```

### 如何转储二进制 BLOB 数据？
有时，如果生成的转储包含二进制数据，则可能会遇到问题。因此，在转储具有二进制数据的 MySQL 数据库时，可以使用以下 mysqldump 标志:`--hex-blob`

在后台，它以十六进制格式转储找到的二进制字符串（BINARY、VARBINARY、BLOB），以可靠的方式表示这些数据结构。

下面是一个正确转储二进制数据的 mysqldump 示例：
```shell
mysqldump -u root -pmypassword my_bin_db --hex-blob > my_bin_db.sql
```

### “where” 子句是否适用于 mysqldump？
是的，此子句适用于命令行。
这样，就可以轻松地为需要从数据库转储的数据设置条件。
如果有一家已经经营了几十年的大型企业想要在 2017 年 4 月 27 日之后提取信息，那么该条款允许这种情况发生。
where 子句为条件传递字符串并获取请求的特定记录。
```shell
mysqldump -u root -pmypassword wpdb --tables thetable --where="date_created > '2017-04-27'" > wpdb_myrecord.sql
```
### 不带密码提示的 MySQL 命令
虽然有一种更安全的方法可以做到这一点（提示：更新您的 .my.cnf 文件），但您可以使用以下命令来运行 MySQL 命令，而无需每次都输入密码。
```shell
mysql -u root -pYOUR_PASSWORD
```
您需要替换为您的实际密码。YOUR_PASSWORD

## 排查常见错误
在此过程中，您可能会遇到一些 [MySQL 常见错误](https://simplebackups.com/blog/extensive-mysql-common-errors-list/)，这些错误在某种程度上很容易缓解。我们将在下面分享其中一些错误以及如何解决它们

### 错误 2013：转储表时，在查询期间丢失与 MySQL 服务器的连接
要解决此问题，您需要进入 MySQL 配置文件并增加一些值。添加这些内容后，保存并关闭文件，然后重新启动 MySQL 以使更改生效。

您需要调整的值是：
```shell
max_allowed_packet
net_write_timeout
net_read_timeout
innodb_buffer_pool_size
对文件的调整将位于 and 部分下，如下所示：[mysqld][mysqldump]

[mysqld]
innodb_buffer_pool_size=100M
max_allowed_packet=1024M
[mysqldump]
max_allowed_packet=1024M
net_read_timeout=3600
net_write_timeout=3600
```

### 错误 2020：转储表时数据包大于“max_allowed_packet”字节
如果需要备份的数据库很大，并且文件大小最终大于允许的最大数据包大小，则会弹出此错误。

可以通过进入 MySQL 配置文件并增加 max_allowed_packet 部分中的值来修复此错误。完成后保存并关闭文件，然后重新启动 MySQL 以使更改生效。[mysqld][mysqldump]

更改将如下所示：
```shell
[mysqld]
max_allowed_packet=desired-value
[mysqldump]
max_allowed_packet=desired-value

```

### Table 不存在 （1146），无法执行 'show create table x''
有时，您可能会在备份期间删除表。如果是这种情况，您可以使用 option 从 mysqldump 命令限制某些表。要识别表，您必须同时说明数据库和表名称。
```shell
mysqldump -u root -pmypassword example_db --ignore-table=name_of_table > db_backup.sql
```
通过多次列出该选项，您可以忽略多个表：
```shell
mysqldump -u root -pmypassword example_db --ignore-table=table --ignore-table=tableaux > db_backup.sql
```

### 选择数据库将返回 'unknown database''
当您在命令行中使用带有密码的标志，并且 `-p` 和 `mypassword` 之间有一个空格时，通常会发生此错误。如果在使用“root”作为密码为“base-face”的用户时发生这种情况，则会出现错误，指出未知数据库 base-face。

正确的输入将如下所示：
```shell
mysqldump -u root -pbase-face wpdb > wpdb_backup.sql
```

### 选择数据库时出现错误 1044
如果尝试执行转储的用户没有访问数据库所需的权限，则会发生此错误。登录到 MySQL 并将这些权限分配给用户将解决此问题。输入命令：
```shell
mysql -u root -p
```
然后输入正确的密码，并继续向所选用户授予权限。
```shell
GRANT ALL PRIVILEGES ON wpdb.* TO 'not_a_hacker'@'inconspicuous_host';
```
之后，刷新权限并通过输入命令退出 MySQL：
```shell
FLUSH PRIVILEGES;

EXIT;
```

### 尝试连接到 mysqldump 时，用户访问被拒绝
此错误有多种可能的原因。以下是导致此问题的三个最常见原因。

1. 错误的 mysqldump 命令

如果您使用了错误的命令，则会出现此错误。该命令可能大部分是正确的，但它缺少 mysqldump 格式的关键组成部分。基本命令将如下所示：
```shell
mysqldump -u user -pmypasword database > database.sql
```
如果您未能指定用户名或密码，则它将返回以下消息：
```shell
mysqldump: Got error: 1045: &quot;Access denied for user &#39;user&#39; @ &#39;localhost&#39; (using password: NO)&quot; when trying to connect
```
2. 不允许远程主机连接到数据库

如果尝试在远程服务器上完成备份，则会出现此错误。MySQL 的配置设置为不允许外部连接。在这里，localhost 是唯一允许进行备份的 localhost。这是一项安全措施，因此这是一个很好的措施，但如果您需要更改此设置，请转到配置并更改 MySQL 以允许来自远程主机的连接。

3. 用户凭据错误

如果您在连接到数据库时尝试使用错误的用户名和密码组合，则会发生此错误。MySQL 无法验证请求是否真实并返回错误。您必须使用适当的凭据再次发出请求，确保原始命令中没有任何拼写错误，因为这是最容易犯的错误。


## 结论
Mysqldump 是一个有用的工具，可以帮助用最少的命令备份数据库。一个命令允许将整个数据库输出到单个文本文件中。该工具用途广泛，足以备份所需的数据库部分，并带有多种选项来更改您需要保存的数据。

## 参考
> https://simplebackups.com/blog/the-complete-mysqldump-guide-with-examples/#how-to-restore--import-a-mysql-mysqldump-dump-file