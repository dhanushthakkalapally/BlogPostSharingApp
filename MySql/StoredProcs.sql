DELIMITER //
CREATE PROCEDURE `Posts_getPosts`(IN userId INTEGER)
BEGIN
	select p.*,u.username from follow inner join  posts p on p.userid = follow.followed_user_id  inner join users u on u.id = p.userid where follow.following_user_id = userId ;
END //

DELIMITER //
CREATE  PROCEDURE `users_findUsers`(IN userId integer)
BEGIN
	select * from users where id not in
	(select followed_user_id from  follow where (following_user_id = userId)) and id != userId;
END //

DELIMITER //
CREATE DEFINER=`venkatesh`@`%` PROCEDURE `users_followcount`(IN userId integer)
BEGIN
	Declare followers INT;
    Declare following INT;
	set followers = (select count(*) from follow where followed_user_id = userId);
    set following = (select count(*) from follow where following_user_id = userId);
    update users set followers = followers ,followed = following where id = userId;
END //