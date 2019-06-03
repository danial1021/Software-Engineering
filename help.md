������� �� -> Timelines, tabs�� ����
�����ڼҰ� -> v-window


# mysql

## table 만들기 샘플

create table user (  
    id varchar(20) not null,  
	password varchar(20) not null,  
	nickname varchar(20) not null,  
	block int(1) not null,  
	point int(32) not null,  
	primary key (id)  
);