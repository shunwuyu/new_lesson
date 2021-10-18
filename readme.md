- css/xuyuan
- css/scroll_indicator

INSERT INTO `faya_job_log` (`id`, `job_id`, `job_desc`, `remote_ip`, `load_balance`, `ha`, `status`, `retry`, `message`, `create_time`, `update_time`) VALUES ('3', '3', '哈哈哈', '10.10.10.1', '1', '1', '1', '1', '哈哈哈哈你好', '2018-12-19 10:48:24', '2018-12-19 10:48:24');

INSERT INTO `faya_job_log` (`id`, `job_id`, `job_desc`, `remote_ip`, `load_balance`, `ha`, `status`, `retry`, `message`, `create_time`, `update_time`) VALUES ('4', '4', '哈哈哈哈你好', '10.10.10.1', '1', '1', '1', '11', '哈哈哈哈你好', '2018-12-19 10:49:07', '2018-12-19 10:49:21');

作者：small_925_ant
链接：https://www.imooc.com/article/268244
来源：慕课网
本文首次发布于慕课网 ，转载请注明出处，谢谢合作

INSERT INTO `faya_job_log` (`id`, `job_id`, `job_desc`, `remote_ip`, `load_balance`, `ha`, `status`, `retry`, `message`, `create_time`, `update_time`) VALUES ('5', '5', '哈哈哈哈你好', '10.10.10.1', '1', '1', NULL, '1', '哈哈哈哈你好', '2018-12-19 10:49:20', '2018-12-19 12:32:28');

作者：small_925_ant
链接：https://www.imooc.com/article/268244
来源：慕课网
本文首次发布于慕课网 ，转载请注明出处，谢谢合作

alter table faya_job_log add index index_status (status) ;

作者：small_925_ant
链接：https://www.imooc.com/article/268244
来源：慕课网
本文首次发布于慕课网 ，转载请注明出处，谢谢合作
explain select * from faya_job_log where job_id="1" or status ="0";

作者：small_925_ant
链接：https://www.imooc.com/article/268244
来源：慕课网
本文首次发布于慕课网 ，转载请注明出处，谢谢合作

explain select job_id from faya_job_log where job_id="1" and status =0;

作者：small_925_ant
链接：https://www.imooc.com/article/268244
来源：慕课网
本文首次发布于慕课网 ，转载请注明出处，谢谢合作