create table mpbt_users(first_name varchar(100) not null, last_name varchar(100) not null, email varchar(100) not null unique,
		mobile varchar(10) not null, alternatemobile varchar(10), password varchar(254) not null, organization varchar(254),
		role varchar(254), user_type varchar(254), department varchar(254), privilage varchar(254), is_approved varchar(100),
		division varchar(254));

insert into mpbt_users values('chandu', 'reddy', 'chandureddyvadala1999@gmail.com', '9381317527', '8500913002', 'chandureddy',
						'gpl', 'developer', 'dev', 'it', 'backend', 'true', 'kphb');
						
insert into mpbt_users values('janardhan', 'reddy', 'chandured99@gmail.com', '9381317527', '8500913002', 'jaanu2002',
						'gpl', 'developer', 'dev', 'it', 'backend', 'true', 'kphb');

select * from mpbt_users;


-- myAccount details
select * from mpbt_users where email = 'chandureddyvadala1999@gmail.com';
select * from mpbt_users where email = 'chandured99@gmail.com';

select * from mpbt_users where email = 'chandured99@gmail.com';

-- edit my profile details
update mpbt_users set first_name='monika', last_name='reddy', mobile = '7891234563', 
                                                    alternatemobile='9632587410' where email ='chandured99@gmail.com';


create table user_settings(username varchar(100) primary key, defaultbasemap varchar(254) not null,
								defaultmapview varchar(254) not null);

insert into user_settings values('chandured99@gmail.com', 'OSM', 'zoom:14');
insert into user_settings values('chandureddyvadala1999@gmail.com', 'OSM', 'zoom:10');

select * from user_settings;

select * from user_settings where username ='chandured99@gmail.com';


-- otp table
create table otpTable(username varchar(100) unique, otp char(6), is_expired boolean default false, updatedAt timestamp);

insert into otptable(username, otp, updatedAt) values('chandured99@gmail.com', '123456', current_timestamp);

select * from otptable;


-- update is_expired to true after 10 minutes of otp sent
UPDATE otpTable SET is_expired = TRUE
	WHERE NOT is_expired AND updatedAt <= NOW() - INTERVAL '10 minutes'
